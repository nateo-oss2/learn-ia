from flask import Flask, request, jsonify, session, send_file, make_response
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import hmac
import json
import os
import ssl
import urllib.parse
import urllib.request
import urllib.error

app = Flask(__name__)
# Clé de session : à définir dans les variables d'environnement Vercel (SECRET_KEY)
app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(32)
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    SESSION_COOKIE_SECURE=bool(os.environ.get("VERCEL")),
)

# Mot de passe de la page /admin : à définir dans les variables d'environnement Vercel (ADMIN_PASSWORD)
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "")

LANGUAGES = {
    "html": {"name": "HTML", "desc": "Apprends HTML, le langage de structure des pages web. Cours gratuit pour debutant avec exemples et exercices.", "cat": "Web"},
    "css": {"name": "CSS", "desc": "Apprends CSS pour styliser tes pages web. Cours gratuit avec couleurs, flexbox, animations et mise en page.", "cat": "Web"},
    "javascript": {"name": "JavaScript", "desc": "Apprends JavaScript pour rendre tes pages interactives. Cours gratuit avec DOM, events et API.", "cat": "Web"},
    "typescript": {"name": "TypeScript", "desc": "Apprends TypeScript, le superset type de JavaScript. Cours gratuit pour un code plus fiable.", "cat": "Web"},
    "python": {"name": "Python", "desc": "Apprends Python, langage polyvalent et lisible. Cours gratuit pour debutant : variables, boucles, fichiers.", "cat": "Back-end"},
    "java": {"name": "Java", "desc": "Apprends Java, langage objet utilise dans les entreprises et Android. Cours gratuit avec POO.", "cat": "Applications"},
    "c": {"name": "C", "desc": "Apprends le langage C, proche de la machine. Cours gratuit : pointeurs, memoire, systeme.", "cat": "Systeme"},
    "cplus": {"name": "C++", "desc": "Apprends le C++, langage puissant pour jeux et systemes. Cours gratuit avec POO et templates.", "cat": "Applications"},
    "csharp": {"name": "C#", "desc": "Apprends C# pour .NET, Unity et apps Windows. Cours gratuit avec classes et LINQ.", "cat": "Applications"},
    "php": {"name": "PHP", "desc": "Apprends PHP pour le web dynamique et les bases de donnees. Cours gratuit avec MySQL.", "cat": "Back-end"},
    "ruby": {"name": "Ruby", "desc": "Apprends Ruby, langage elegant et expressif. Cours gratuit avec Ruby on Rails.", "cat": "Systeme"},
    "go": {"name": "Go", "desc": "Apprends Go, langage rapide de Google pour la concurrence. Cours gratuit avec goroutines.", "cat": "Applications"},
    "rust": {"name": "Rust", "desc": "Apprends Rust, langage systeme sur et performant. Cours gratuit avec ownership et borrowing.", "cat": "Applications"},
    "swift": {"name": "Swift", "desc": "Apprends Swift pour creer des apps iOS et macOS. Cours gratuit avec optionals et SwiftUI.", "cat": "Mobile"},
    "kotlin": {"name": "Kotlin", "desc": "Apprends Kotlin, langage moderne pour Android. Cours gratuit avec null safety et coroutines.", "cat": "Mobile"},
    "sql": {"name": "SQL", "desc": "Apprends SQL pour interroger et gerer des bases de donnees. Cours gratuit avec SELECT, JOIN, GROUP BY.", "cat": "Donnees"},
    "r": {"name": "R", "desc": "Apprends R pour les statistiques et la data science. Cours gratuit avec data frames et ggplot2.", "cat": "Donnees"},
    "dart": {"name": "Dart", "desc": "Apprends Dart pour creer des apps avec Flutter. Cours gratuit avec classes, async et streams.", "cat": "Mobile"},
    "bash": {"name": "Bash", "desc": "Apprends Bash pour automatiser des taches dans le terminal. Cours gratuit avec scripts shell.", "cat": "Systeme"},
    "lua": {"name": "Lua", "desc": "Apprends Lua pour les jeux et scripts integres. Cours gratuit avec tables et fonctions.", "cat": "Systeme"},
}

SUPABASE_URL = os.environ.get("SUPABASE_URL", "https://ezrhgpqehlheyppggnjf.supabase.co")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY", "")


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
    except Exception as e:
        return {"error": str(e)}


def q(value):
    return urllib.parse.quote(str(value), safe="")


def client_ip():
    forwarded = request.headers.get("X-Forwarded-For", "")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.remote_addr or ""


def clip(value, size=300):
    return str(value or "")[:size]


def find_user(username):
    res = supabase_request("GET", f"users?username=eq.{q(username)}&select=*")
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
    supabase_request("PATCH", f"users?username=eq.{q(username)}", {"history": history})


BASE = os.path.dirname(os.path.abspath(__file__))
PUBLIC_EXTENSIONS = {".html", ".css", ".js", ".xml", ".txt", ".png", ".jpg", ".jpeg",
                     ".gif", ".svg", ".ico", ".webp", ".woff", ".woff2"}

def serve_file(path):
    full = os.path.realpath(os.path.join(BASE, path))
    if not full.startswith(BASE + os.sep):
        return ("", 404)
    if os.path.splitext(full)[1].lower() not in PUBLIC_EXTENSIONS:
        return ("", 404)
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

    if len(username) > 32:
        return jsonify({"error": "Nom d'utilisateur trop long (maximum 32 caractères)"}), 400

    if len(password) < 8:
        return jsonify({"error": "Mot de passe trop court (minimum 8 caractères)"}), 400

    if find_user(username):
        return jsonify({"error": "Ce nom d'utilisateur existe déjà"}), 409

    password_hash = generate_password_hash(password)
    res = create_user(username, password_hash, client_ip(),
                      clip(request.headers.get("User-Agent", "")))

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

    if not check_password_hash(user.get("password", ""), password):
        return jsonify({"error": "Nom d'utilisateur ou mot de passe incorrect"}), 401

    session["user"] = username
    add_login_history(username, client_ip())

    return jsonify({"message": "Connecté avec succès", "username": username})


@app.route("/api/track", methods=["POST"])
def track():
    data = request.get_json(force=True, silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "Données requises"}), 400
    action = data.get("action", "page_enter")
    if action not in ("page_enter", "page_exit", "heartbeat", "enter", "exit"):
        action = "page_enter"
    try:
        duration = max(0, min(float(data.get("duration_seconds", 0) or 0), 86400))
    except (TypeError, ValueError):
        duration = 0
    body = {
        "visitor_id": clip(data.get("visitor_id"), 64),
        "page": clip(data.get("page"), 200),
        "page_name": clip(data.get("page_name"), 100),
        "duration_seconds": duration,
        "action": action,
        "referrer": clip(data.get("referrer"), 300),
        "screen": clip(data.get("screen"), 30),
        "user_agent": clip(request.headers.get("User-Agent", "")),
        "ip": client_ip(),
        "username": session.get("user", ""),
    }
    supabase_request("POST", "visits", body)
    return jsonify({"ok": True})


def require_admin():
    if not session.get("admin"):
        return jsonify({"error": "Accès admin requis"}), 401
    return None


@app.route("/api/admin/login", methods=["POST"])
def admin_login():
    data = request.get_json(force=True, silent=True) or {}
    password = str(data.get("password", ""))
    if not ADMIN_PASSWORD:
        return jsonify({"error": "ADMIN_PASSWORD n'est pas configuré sur le serveur"}), 503
    if not hmac.compare_digest(password.encode(), ADMIN_PASSWORD.encode()):
        return jsonify({"error": "Mot de passe admin incorrect"}), 401
    session["admin"] = True
    return jsonify({"ok": True})


@app.route("/api/admin/logout", methods=["POST"])
def admin_logout():
    session.pop("admin", None)
    return jsonify({"ok": True})


@app.route("/api/visits")
def list_visits():
    err = require_admin()
    if err:
        return err
    res = supabase_request("GET", "visits?order=visited_at.desc&limit=100")
    if isinstance(res, list):
        return jsonify(res)
    return jsonify([])


@app.route("/api/logout", methods=["POST"])
def logout():
    session.pop("user", None)
    session.pop("admin", None)
    return jsonify({"message": "Déconnecté"})


@app.route("/api/me")
def me():
    if "user" in session:
        return jsonify({"username": session["user"]})
    return jsonify({"username": None})


@app.route("/admin")
@app.route("/admin.html")
def admin_panel():
    resp = make_response(serve_file("admin.html"))
    resp.headers["X-Robots-Tag"] = "noindex, nofollow"
    resp.headers["Cache-Control"] = "no-store"
    return resp

@app.route("/api/users")
def list_users():
    err = require_admin()
    if err:
        return err
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
    return jsonify([])


@app.route("/sitemap.xml")
def sitemap():
    lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    lines.append('  <url>\n    <loc>https://learn-codelab-theta.vercel.app/</loc>\n    <priority>1.0</priority>\n  </url>')
    for slug in LANGUAGES:
        lines.append(f'  <url>\n    <loc>https://learn-codelab-theta.vercel.app/{slug}</loc>\n    <priority>0.8</priority>\n  </url>')
    lines.append('</urlset>')
    content = '\n'.join(lines)
    resp = make_response(content, 200)
    resp.headers["Content-Type"] = "application/xml; charset=utf-8"
    return resp


@app.route("/<path:filename>")
def static_files(filename):
    if "." in filename:
        return serve_file(filename)
    lang = LANGUAGES.get(filename)
    if not lang:
        return serve_file("index.html")
    idx_path = os.path.join(BASE, "index.html")
    if not os.path.exists(idx_path):
        return serve_file("index.html")
    with open(idx_path) as f:
        content = f.read()
    title = f"Apprendre {lang['name']} - Cours gratuit | CodeLab"
    desc = lang["desc"]
    content = content.replace(
        "<title>CodeLab - Apprendre à coder en 20 langages de programmation</title>",
        f"<title>{title}</title>"
    )
    content = content.replace(
        '<meta name="description" content="Apprends la programmation gratuitement avec CodeLab. Cours interactifs pour 20 langages : Python, JavaScript, HTML, CSS, Java, C++, Rust, et plus." />',
        f'<meta name="description" content="{desc}" />'
    )
    content = content.replace(
        '<meta property="og:title" content="CodeLab - Apprendre à coder en 20 langages" />',
        f'<meta property="og:title" content="{title}" />'
    )
    content = content.replace(
        '<meta property="og:description" content="Cours de programmation gratuits et interactifs pour 20 langages. Parfait pour les débutants." />',
        f'<meta property="og:description" content="{desc}" />'
    )
    resp = make_response(content, 200)
    resp.headers["Content-Type"] = "text/html; charset=utf-8"
    return resp


if __name__ == "__main__":
    app.run(debug=os.environ.get("FLASK_DEBUG") == "1", port=5000)
