import json, os, sqlite3, hashlib, uuid, hmac, time
from functools import wraps
from flask import Flask, request, jsonify, session, send_file
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", os.urandom(32).hex())
CORS(app, supports_credentials=True)

DB = "site.db"
BASE = os.path.dirname(os.path.abspath(__file__))

def serve_file(path):
    full = os.path.join(BASE, path)
    if os.path.exists(full) and os.path.isfile(full):
        return send_file(full)
    return ("", 404)


@app.route("/")
def index():
    return serve_file("index.html")


@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username", "").strip()
    password = data.get("password", "")
    if len(username) < 2:
        return jsonify({"error": "Nom trop court (min. 2 caractères)"}), 400
    if len(password) < 4:
        return jsonify({"error": "Mot de passe trop court (min. 4 caractères)"}), 400
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    try:
        c.execute("INSERT INTO users (username, password_hash) VALUES (?, ?)", (username, hashlib.sha256(password.encode()).hexdigest()))
        conn.commit()
        session["user_id"] = c.lastrowid
        session["username"] = username
        return jsonify({"ok": True, "username": username})
    except sqlite3.IntegrityError:
        return jsonify({"error": "Ce nom d'utilisateur existe déjà"}), 409
    finally:
        conn.close()


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username", "").strip()
    password = data.get("password", "")
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute("SELECT id, username FROM users WHERE username=? AND password_hash=?", (username, hashlib.sha256(password.encode()).hexdigest()))
    row = c.fetchone()
    conn.close()
    if row:
        session["user_id"] = row[0]
        session["username"] = row[1]
        return jsonify({"ok": True, "username": row[1]})
    return jsonify({"error": "Identifiants incorrects"}), 401


@app.route("/api/me", methods=["GET"])
def me():
    if "user_id" in session:
        return jsonify({"username": session["username"]})
    return jsonify({"error": "Non connecté"}), 401


@app.route("/api/logout", methods=["POST"])
def logout():
    session.clear()
    return jsonify({"ok": True})


@app.route("/api/track", methods=["POST"])
def track():
    data = request.get_json()
    if not data:
        return ("", 400)
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute("""CREATE TABLE IF NOT EXISTS tracking (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        visitor_id TEXT,
        page TEXT,
        page_name TEXT,
        referrer TEXT,
        screen TEXT,
        duration_seconds INTEGER,
        action TEXT,
        created_at TEXT DEFAULT (datetime('now'))
    )""")
    c.execute("""INSERT INTO tracking (visitor_id, page, page_name, referrer, screen, duration_seconds, action)
        VALUES (?, ?, ?, ?, ?, ?, ?)""",
        (data.get("visitor_id"), data.get("page"), data.get("page_name"),
         data.get("referrer"), data.get("screen"), data.get("duration_seconds"), data.get("action")))
    conn.commit()
    conn.close()
    return ("", 200)


@app.route("/api/users", methods=["GET"])
def get_users():
    token = request.headers.get("Authorization", "").replace("Bearer ", "")
    if token != "n8e_6f8a2c1d9e3b4f5a6b7c8d9e0f1a2b3c4d5e6f":
        return jsonify({"error": "Non autorisé"}), 403
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute("SELECT id, username, created_at FROM users ORDER BY id DESC")
    rows = c.fetchall()
    c.execute("SELECT DISTINCT visitor_id, MIN(created_at) as first_seen, MAX(created_at) as last_seen, COUNT(*) as events FROM tracking GROUP BY visitor_id ORDER BY last_seen DESC")
    tracks = c.fetchall()
    conn.close()
    out = []
    for row in rows:
        visits = [{"first_seen": t[1], "last_seen": t[2], "events": t[3]} for t in tracks]
        out.append({
            "id": row[0],
            "username": row[1],
            "created_at": row[2],
            "visits": visits,
        })
    return jsonify(out)


@app.route("/api/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    token = request.headers.get("Authorization", "").replace("Bearer ", "")
    if token != "n8e_6f8a2c1d9e3b4f5a6b7c8d9e0f1a2b3c4d5e6f":
        return jsonify({"error": "Non autorisé"}), 403
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute("DELETE FROM users WHERE id=?", (user_id,))
    conn.commit()
    conn.close()
    return jsonify({"ok": True})


@app.route("/api/stats/tracking", methods=["GET"])
def get_tracking_stats():
    token = request.headers.get("Authorization", "").replace("Bearer ", "")
    if token != "n8e_6f8a2c1d9e3b4f5a6b7c8d9e0f1a2b3c4d5e6f":
        return jsonify({"error": "Non autorisé"}), 403
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute("""SELECT visitor_id,
                    MIN(CASE WHEN action IN ('page_enter','heartbeat') THEN created_at END) as first_seen,
                    MAX(created_at) as last_seen,
                    COUNT(CASE WHEN action='page_enter' THEN 1 END) as page_views,
                    COUNT(CASE WHEN action='heartbeat' THEN 1 END) as heartbeats,
                    MAX(CASE WHEN action='page_enter' OR action='heartbeat' THEN duration_seconds ELSE 0 END) as max_duration
                 FROM tracking GROUP BY visitor_id ORDER BY last_seen DESC""")
    rows = c.fetchall()
    conn.close()
    out = []
    for r in rows:
        out.append({
            "visitor_id": r[0],
            "first_seen": r[1],
            "last_seen": r[2],
            "page_views": r[3],
            "heartbeats": r[4],
            "max_duration": r[5],
        })
    return jsonify(out)


@app.route("/sitemap.xml")
def sitemap():
    from flask import make_response
    content = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://learn-codelab-theta.vercel.app/</loc>
  </url>
</urlset>
'''
    resp = make_response(content, 200)
    resp.headers["Content-Type"] = "application/xml; charset=utf-8"
    return resp


@app.route("/<path:filename>")
def static_files(filename):
    if "." in filename:
        return serve_file(filename)
    return serve_file("index.html")





if __name__ == "__main__":
    with sqlite3.connect(DB) as conn:
        conn.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password_hash TEXT, created_at TEXT DEFAULT (datetime('now')))")
        conn.execute("CREATE TABLE IF NOT EXISTS tracking (id INTEGER PRIMARY KEY AUTOINCREMENT, visitor_id TEXT, page TEXT, page_name TEXT, referrer TEXT, screen TEXT, duration_seconds INTEGER, action TEXT, created_at TEXT DEFAULT (datetime('now')))")
    app.run(debug=True, port=5000)
