from flask import Flask, request, jsonify, session, send_file
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import json
import os
import ssl
import urllib.request
import urllib.error

app = Flask(__name__)
app.secret_key = "codelab-secret-key-change-me"

SUPABASE_URL = "https://ezrhgpqehlheyppggnjf.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6cmhncHFlaGxoZXlwcGdnbmpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NzE4NzEsImV4cCI6MjA5NzU0Nzg3MX0.odI1Zu705j3s7siEV8w-j1qoVrPbvvLDu5XEYgeHMuc"


def supabase_request(method, path, body=None):
    url = f"{SUPABASE_URL}/rest/v1/{path}"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    kwargs = {}
    if not os.environ.get("VERCEL"):
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        kwargs["context"] = ctx
    try:
        with urllib.request.urlopen(req, **kwargs) as resp:
            text = resp.read().decode().strip()
            return json.loads(text) if text else {}
    except urllib.error.HTTPError as e:
        text = e.read().decode().strip()
        return {"error": text, "status": e.code}
    except json.JSONDecodeError:
        return {}


def find_user(username):
    res = supabase_request("GET", f"users?username=eq.{username}&select=*")
    if isinstance(res, list) and len(res) > 0:
        return res[0]
    return None


def create_user(username, password_hash, ip, user_agent):
    body = {
        "username": username,
        "password": password_hash,
        "ip": ip,
        "user_agent": user_agent,
        "history": [],
    }
    return supabase_request("POST", "users", body)


def add_login_history(username, ip):
    user = find_user(username)
    if not user:
        return
    history = user.get("history") or []
    history.append({
        "action": "login",
        "time": datetime.now().isoformat(),
        "ip": ip,
    })
    supabase_request("PATCH", f"users?username=eq.{username}", {"history": history})


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

    if not username or not password:
        return jsonify({"error": "Nom d'utilisateur et mot de passe requis"}), 400

    if len(password) < 4:
        return jsonify({"error": "Mot de passe trop court (minimum 4 caractères)"}), 400

    if find_user(username):
        return jsonify({"error": "Ce nom d'utilisateur existe déjà"}), 409

    password_hash = generate_password_hash(password)
    res = create_user(username, password_hash, request.remote_addr,
                      request.headers.get("User-Agent", ""))

    if isinstance(res, dict) and res.get("error"):
        return jsonify({"error": "Erreur lors de la création du compte"}), 500

    session["user"] = username
    return jsonify({"message": "Compte créé avec succès", "username": username})


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username", "").strip()
    password = data.get("password", "")

    if not username or not password:
        return jsonify({"error": "Nom d'utilisateur et mot de passe requis"}), 400

    user = find_user(username)
    if not user:
        return jsonify({"error": "Nom d'utilisateur ou mot de passe incorrect"}), 401

    if not check_password_hash(user["password"], password):
        return jsonify({"error": "Nom d'utilisateur ou mot de passe incorrect"}), 401

    session["user"] = username
    add_login_history(username, request.remote_addr)

    return jsonify({"message": "Connecté avec succès", "username": username})


@app.route("/api/track", methods=["POST"])
def track():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Données requises"}), 400
    body = {
        "visitor_id": data.get("visitor_id", ""),
        "page": data.get("page", ""),
        "referrer": data.get("referrer", ""),
        "screen": data.get("screen", ""),
        "user_agent": request.headers.get("User-Agent", ""),
        "ip": request.remote_addr,
        "username": session.get("user", ""),
    }
    supabase_request("POST", "visits", body)
    return jsonify({"ok": True})


@app.route("/api/visits")
def list_visits():
    res = supabase_request("GET", "visits?order=visited_at.desc&limit=100")
    if isinstance(res, list):
        return jsonify(res)
    return jsonify([])


@app.route("/api/logout", methods=["POST"])
def logout():
    session.pop("user", None)
    return jsonify({"message": "Déconnecté"})


@app.route("/api/me")
def me():
    if "user" in session:
        return jsonify({"username": session["user"]})
    return jsonify({"username": None})


@app.route("/api/users")
def list_users():
    res = supabase_request("GET", "users?select=username,created_at,ip,user_agent,history")
    if isinstance(res, list):
        out = {}
        for u in res:
            out[u["username"]] = {
                "created_at": u.get("created_at", ""),
                "ip": u.get("ip", ""),
                "user_agent": u.get("user_agent", ""),
                "history": u.get("history", []),
            }
        return jsonify(out)
    return jsonify({"error": "Impossible de récupérer les utilisateurs"}), 500


@app.route("/<path:filename>")
def static_files(filename):
    return serve_file(filename)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
