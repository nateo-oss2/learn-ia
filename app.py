from flask import Flask, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import json
import os

app = Flask(__name__, static_url_path="", static_folder=".")
app.secret_key = "codelab-secret-key-change-me"

USERS_FILE = "users.json"


def load_users():
    if not os.path.exists(USERS_FILE):
        return {}
    with open(USERS_FILE, "r") as f:
        return json.load(f)


def save_users(users):
    with open(USERS_FILE, "w") as f:
        json.dump(users, f, indent=2)


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username", "").strip()
    password = data.get("password", "")

    if not username or not password:
        return jsonify({"error": "Nom d'utilisateur et mot de passe requis"}), 400

    if len(password) < 4:
        return jsonify({"error": "Mot de passe trop court (minimum 4 caractères)"}), 400

    users = load_users()
    if username in users:
        return jsonify({"error": "Ce nom d'utilisateur existe déjà"}), 409

    users[username] = {
        "password": generate_password_hash(password),
        "created_at": datetime.now().isoformat(),
    }
    save_users(users)
    session["user"] = username
    return jsonify({"message": "Compte créé avec succès", "username": username})


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username", "").strip()
    password = data.get("password", "")

    if not username or not password:
        return jsonify({"error": "Nom d'utilisateur et mot de passe requis"}), 400

    users = load_users()
    if username not in users:
        return jsonify({"error": "Nom d'utilisateur ou mot de passe incorrect"}), 401

    if not check_password_hash(users[username]["password"], password):
        return jsonify({"error": "Nom d'utilisateur ou mot de passe incorrect"}), 401

    session["user"] = username
    return jsonify({"message": "Connecté avec succès", "username": username})


@app.route("/api/logout", methods=["POST"])
def logout():
    session.pop("user", None)
    return jsonify({"message": "Déconnecté"})


@app.route("/api/me")
def me():
    if "user" in session:
        return jsonify({"username": session["user"]})
    return jsonify({"username": None})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
