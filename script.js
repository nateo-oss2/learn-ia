const languages = [
  {
    name: "HTML",
    category: "Web",
    accent: "#e5484d",
    level: "Debutant",
    intro: "HTML est la structure d'une page web. Il sert a placer les titres, paragraphes, images, liens, formulaires et sections.",
    why: "C'est le squelette du web. Sans HTML, CSS n'a rien a styliser et JavaScript n'a rien a rendre interactif.",
    build: "Tu peux creer une page personnelle, un blog, une fiche produit ou une interface simple.",
    concepts: ["Balises", "Attributs", "Liens", "Images", "Formulaires"],
    code: `<h1>Mon premier projet</h1>
<p>J'apprends a structurer une page web.</p>`
  },
  {
    name: "CSS",
    category: "Web",
    accent: "#2563eb",
    level: "Debutant",
    intro: "CSS donne du style aux pages web : couleurs, tailles, espacements, grilles, animations et responsive.",
    why: "CSS transforme une page simple en interface agreable et professionnelle.",
    build: "Tu peux creer des cartes, menus, tableaux de bord, pages responsive et animations.",
    concepts: ["Selecteurs", "Flexbox", "Grid", "Responsive", "Transitions"],
    code: `.card {
  padding: 20px;
  border-radius: 8px;
  background: white;
}`
  },
  {
    name: "JavaScript",
    category: "Web",
    accent: "#f5b700",
    level: "Essentiel",
    intro: "JavaScript rend les pages interactives avec des clics, animations, formulaires et donnees dynamiques.",
    why: "C'est le langage ideal pour passer d'une page statique a une vraie application.",
    build: "Tu peux creer un quiz, une todo-list, un jeu simple ou une app connectee a une API.",
    concepts: ["Variables", "Fonctions", "DOM", "Evenements", "Tableaux"],
    code: `button.addEventListener("click", () => {
  alert("Bravo !");
});`
  },
  {
    name: "TypeScript",
    category: "Web",
    accent: "#3178c6",
    level: "Intermediaire",
    intro: "TypeScript ajoute des types a JavaScript pour rendre les gros projets plus fiables.",
    why: "Il aide a reperer les erreurs avant meme de lancer le site.",
    build: "Tu peux creer des applications web robustes avec React, Vue, Angular ou Node.",
    concepts: ["Types", "Interfaces", "Generics", "Modules"],
    code: `type User = {
  name: string;
  points: number;
};`
  },
  {
    name: "Python",
    category: "Donnees",
    accent: "#16a34a",
    level: "Debutant",
    intro: "Python est simple, lisible et tres utilise pour les scripts, les donnees, l'IA et les APIs.",
    why: "Sa syntaxe claire permet de se concentrer sur la logique.",
    build: "Tu peux creer un bot, un script, une analyse de donnees ou une petite API.",
    concepts: ["Listes", "Dictionnaires", "Boucles", "Fonctions"],
    code: `notes = [12, 16, 18]
moyenne = sum(notes) / len(notes)
print(moyenne)`
  },
  {
    name: "Java",
    category: "Applications",
    accent: "#e11d48",
    level: "Solide",
    intro: "Java est utilise pour les applications d'entreprise, Android et les serveurs.",
    why: "Il apprend la programmation orientee objet avec rigueur.",
    build: "Tu peux creer une API, une app Android ou un logiciel de gestion.",
    concepts: ["Classes", "Objets", "Methodes", "Collections"],
    code: `class Main {
  public static void main(String[] args) {
    System.out.println("Bonjour Java");
  }
}`
  },
  {
    name: "C",
    category: "Systeme",
    accent: "#475569",
    level: "Fondations",
    intro: "C est proche de la machine et aide a comprendre la memoire et la compilation.",
    why: "Il donne une base solide pour comprendre comment fonctionne un ordinateur.",
    build: "Tu peux creer des programmes rapides, outils terminal ou systemes embarques.",
    concepts: ["Compilation", "Pointeurs", "Memoire", "Structures"],
    code: `#include <stdio.h>

int main(void) {
  printf("Bonjour C");
  return 0;
}`
  },
  {
    name: "C++",
    category: "Systeme",
    accent: "#0f766e",
    level: "Avance",
    intro: "C++ combine performance et organisation de grands projets.",
    why: "Il est tres utilise dans les jeux, moteurs 3D et logiciels lourds.",
    build: "Tu peux creer un moteur de jeu, un simulateur ou un programme performant.",
    concepts: ["Objets", "STL", "Templates", "Performance"],
    code: `#include <iostream>

int main() {
  std::cout << "Bonjour C++";
}`
  },
  {
    name: "C#",
    category: "Applications",
    accent: "#7c3aed",
    level: "Intermediaire",
    intro: "C# sert a creer des apps Windows, APIs et jeux avec Unity.",
    why: "Il est moderne, propre et tres pratique pour des projets complets.",
    build: "Tu peux creer un jeu Unity, une API ou une application de bureau.",
    concepts: ["Classes", ".NET", "LINQ", "Async"],
    code: `Console.WriteLine("Bonjour C#");`
  },
  {
    name: "PHP",
    category: "Web",
    accent: "#4f46e5",
    level: "Pratique",
    intro: "PHP sert a creer des sites dynamiques cote serveur.",
    why: "Il aide a comprendre les formulaires, sessions et bases de donnees.",
    build: "Tu peux creer un blog, un espace membre ou un back-office.",
    concepts: ["Serveur", "Formulaires", "Sessions", "PDO"],
    code: `<?php
echo "Bienvenue en PHP";
?>`
  },
  {
    name: "Ruby",
    category: "Web",
    accent: "#dc2626",
    level: "Elegant",
    intro: "Ruby est un langage expressif, souvent utilise avec Ruby on Rails.",
    why: "Il encourage un code lisible et simple.",
    build: "Tu peux creer un blog, une plateforme ou un prototype web.",
    concepts: ["Objets", "Blocs", "Gems", "Rails"],
    code: `students = ["Ada", "Grace"]
students.each do |student|
  puts student
end`
  },
  {
    name: "Go",
    category: "Systeme",
    accent: "#0891b2",
    level: "Moderne",
    intro: "Go est rapide, simple et tres utilise pour les serveurs et outils cloud.",
    why: "Il permet d'ecrire des services efficaces avec une syntaxe claire.",
    build: "Tu peux creer une API, un outil terminal ou un microservice.",
    concepts: ["Packages", "Structs", "Goroutines", "Erreurs"],
    code: `package main

import "fmt"

func main() {
  fmt.Println("Bonjour Go")
}`
  },
  {
    name: "Rust",
    category: "Systeme",
    accent: "#b45309",
    level: "Avance",
    intro: "Rust vise la performance et la securite memoire.",
    why: "Il aide a construire des logiciels fiables et rapides.",
    build: "Tu peux creer un outil CLI, un serveur rapide ou un module WebAssembly.",
    concepts: ["Ownership", "Borrowing", "Traits", "Cargo"],
    code: `fn main() {
  println!("Bonjour Rust");
}`
  },
  {
    name: "Swift",
    category: "Applications",
    accent: "#f97316",
    level: "Mobile",
    intro: "Swift est le langage d'Apple pour creer des apps iPhone, iPad et Mac.",
    why: "Il est moderne, rapide et agreable pour creer des interfaces natives.",
    build: "Tu peux creer une application mobile ou une interface SwiftUI.",
    concepts: ["Structs", "Optionals", "SwiftUI", "Protocoles"],
    code: `Text("Bonjour Swift")`
  },
  {
    name: "Kotlin",
    category: "Applications",
    accent: "#9333ea",
    level: "Mobile",
    intro: "Kotlin est tres utilise pour les applications Android modernes.",
    why: "Il est concis, clair et compatible avec l'ecosysteme Java.",
    build: "Tu peux creer une app Android ou une API serveur.",
    concepts: ["Null safety", "Data classes", "Coroutines", "Compose"],
    code: `fun main() {
  println("Bonjour Kotlin")
}`
  },
  {
    name: "SQL",
    category: "Donnees",
    accent: "#0ea5e9",
    level: "Indispensable",
    intro: "SQL sert a interroger et organiser les donnees dans une base relationnelle.",
    why: "Presque toutes les applications stockent des donnees.",
    build: "Tu peux analyser des ventes, gerer des utilisateurs ou alimenter un tableau de bord.",
    concepts: ["SELECT", "WHERE", "JOIN", "GROUP BY"],
    code: `SELECT name, score
FROM students
WHERE score >= 15;`
  },
  {
    name: "R",
    category: "Donnees",
    accent: "#1d4ed8",
    level: "Analyse",
    intro: "R est specialise dans les statistiques, graphiques et analyses de donnees.",
    why: "Il est utile pour explorer des donnees et produire des visualisations.",
    build: "Tu peux creer une analyse statistique ou un rapport automatise.",
    concepts: ["Data frames", "Vecteurs", "ggplot2", "dplyr"],
    code: `scores <- c(12, 16, 18)
mean(scores)`
  },
  {
    name: "Dart",
    category: "Applications",
    accent: "#0284c7",
    level: "Mobile",
    intro: "Dart est le langage de Flutter pour creer des apps mobile, web et desktop.",
    why: "Il permet de creer une seule app pour plusieurs plateformes.",
    build: "Tu peux creer une application mobile moderne avec Flutter.",
    concepts: ["Widgets", "Classes", "State", "Flutter"],
    code: `void main() {
  print("Bonjour Dart");
}`
  },
  {
    name: "Bash",
    category: "Systeme",
    accent: "#15803d",
    level: "Automatisation",
    intro: "Bash sert a automatiser des actions dans le terminal.",
    why: "Il rend plus rapide pour manipuler des fichiers et lancer des outils.",
    build: "Tu peux creer un script de sauvegarde ou un lanceur de projet.",
    concepts: ["Commandes", "Variables", "Boucles", "Pipes"],
    code: `for file in *.txt; do
  echo "$file"
done`
  },
  {
    name: "Lua",
    category: "Applications",
    accent: "#1e40af",
    level: "Leger",
    intro: "Lua est leger et souvent utilise dans les jeux et logiciels extensibles.",
    why: "Il est simple a apprendre et pratique pour creer des scripts.",
    build: "Tu peux creer des scripts de jeu ou des extensions.",
    concepts: ["Tables", "Fonctions", "Modules", "Scripts"],
    code: `local score = 10
print("Score : " .. score)`
  }
];

const grid = document.querySelector("#languageGrid");
const lessonPage = document.querySelector("#lessonPage");
const homePage = document.querySelector("#homePage");
const filters = document.querySelectorAll(".filter");

function slugify(value) {
  return value
    .toLowerCase()
    .replace("+", "plus")
    .replace("#", "sharp")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function findLanguageFromHash() {
  const slug = location.hash.replace("#langage/", "");
  return languages.find(language => slugify(language.name) === slug);
}

const helpRunGuides = {
  python: {
    file: "main.py",
    command: "python main.py",
    tips: [
      "Utilise une variable pour stocker ton prénom.",
      "Crée une fonction avec le mot-clé def.",
      "Respecte bien l'indentation : en Python, elle est obligatoire.",
      "Utilise print() pour afficher le résultat.",
      "Si tu mélanges texte et nombre, transforme le nombre avec str()."
    ],
    starter: `prenom = "Ton prénom"
age = 17

def presentation(nom):
    # écris ton message ici
    print("Bonjour " + nom)

presentation(prenom)`
  },
  java: {
    file: "Main.java",
    command: "javac Main.java\njava Main",
    tips: [
      "Crée une classe qui s'appelle Main.",
      "Le programme commence dans public static void main.",
      "Utilise String pour stocker du texte.",
      "Utilise int pour stocker un nombre entier.",
      "Affiche le résultat avec System.out.println()."
    ],
    starter: `public class Main {
  public static void main(String[] args) {
    String prenom = "Ton prénom";
    int age = 17;

    // affiche les informations ici
  }
}`
  },
  c: {
    file: "main.c",
    command: "gcc main.c -o main\n./main",
    tips: [
      "Ajoute #include <stdio.h> pour utiliser printf.",
      "Le point de départ est la fonction main().",
      "Utilise char[] pour stocker un texte simple.",
      "Utilise int pour stocker un nombre entier.",
      "Termine chaque instruction avec un point-virgule."
    ],
    starter: `#include <stdio.h>

int main() {
  char prenom[] = "Ton prénom";
  int age = 17;

  // affiche les informations ici

  return 0;
}`
  },
  cplus: {
    file: "main.cpp",
    command: "g++ main.cpp -o main\n./main",
    tips: [
      "Ajoute #include <iostream> pour afficher du texte.",
      "Utilise std::cout pour écrire dans le terminal.",
      "Utilise std::string pour stocker du texte.",
      "N'oublie pas le point-virgule après chaque instruction.",
      "Tu peux utiliser une classe si tu veux organiser ton programme."
    ],
    starter: `#include <iostream>
#include <string>

int main() {
  std::string prenom = "Ton prénom";
  int age = 17;

  // affiche les informations ici

  return 0;
}`
  },
  csharp: {
    file: "Program.cs",
    command: "dotnet run",
    tips: [
      "Utilise string pour stocker du texte.",
      "Utilise int pour stocker un âge.",
      "Affiche le résultat avec Console.WriteLine().",
      "Tu peux créer une classe si ton programme grandit.",
      "Avec .NET, la commande dotnet run lance le projet."
    ],
    starter: `string prenom = "Ton prénom";
int age = 17;

// affiche les informations ici
Console.WriteLine(prenom);`
  },
  php: {
    file: "index.php",
    command: "php -S localhost:8000",
    tips: [
      "Écris ton code PHP entre <?php et ?>.",
      "Une variable commence par le symbole $.",
      "Utilise echo pour afficher du texte.",
      "Utilise htmlspecialchars() si tu affiches une saisie utilisateur.",
      "Lance le serveur PHP puis ouvre localhost:8000."
    ],
    starter: `<?php
$prenom = "Ton prénom";
$age = 17;

// affiche les informations ici
echo $prenom;
?>`
  },
  ruby: {
    file: "main.rb",
    command: "ruby main.rb",
    tips: [
      "Utilise puts pour afficher un message.",
      "Les variables n'ont pas besoin de type.",
      "Crée une méthode avec def.",
      "Les tableaux se parcourent facilement avec each.",
      "Garde des noms de méthodes simples et lisibles."
    ],
    starter: `prenom = "Ton prénom"
age = 17

def presentation(nom)
  # écris ton message ici
  puts "Bonjour #{nom}"
end

presentation(prenom)`
  },
  go: {
    file: "main.go",
    command: "go run main.go",
    tips: [
      "Commence ton fichier avec package main.",
      "Ajoute import \"fmt\" pour afficher du texte.",
      "Le programme commence dans func main().",
      "Utilise := pour créer rapidement une variable.",
      "Vérifie toujours les erreurs quand une fonction en retourne."
    ],
    starter: `package main

import "fmt"

func main() {
  prenom := "Ton prénom"
  age := 17

  // affiche les informations ici
  fmt.Println(prenom, age)
}`
  },
  rust: {
    file: "main.rs",
    command: "rustc main.rs\n./main",
    tips: [
      "Le programme commence dans fn main().",
      "Utilise let pour créer une variable.",
      "Ajoute mut seulement si la variable doit changer.",
      "Affiche avec println!().",
      "Lis les messages du compilateur : Rust explique souvent l'erreur."
    ],
    starter: `fn main() {
  let prenom = "Ton prénom";
  let age = 17;

  // affiche les informations ici
  println!("{} - {}", prenom, age);
}`
  },
  swift: {
    file: "main.swift",
    command: "swift main.swift",
    tips: [
      "Utilise let pour une constante.",
      "Utilise var si la valeur doit changer.",
      "Utilise print() pour afficher le résultat.",
      "Fais attention aux optionals avec ?.",
      "Avec SwiftUI, l'interface dépend de l'état."
    ],
    starter: `let prenom = "Ton prénom"
let age = 17

// affiche les informations ici
print(prenom)
print(age)`
  },
  kotlin: {
    file: "Main.kt",
    command: "kotlinc Main.kt -include-runtime -d main.jar\njava -jar main.jar",
    tips: [
      "Le programme commence dans fun main().",
      "Utilise val pour une valeur qui ne change pas.",
      "Utilise var pour une valeur modifiable.",
      "Affiche avec println().",
      "Profite de la null safety au lieu d'utiliser !!."
    ],
    starter: `fun main() {
  val prenom = "Ton prénom"
  val age = 17

  // affiche les informations ici
  println(prenom)
  println(age)
}`
  },
  sql: {
    file: "exercice.sql",
    command: "À tester dans SQLite, DB Browser, MySQL ou PostgreSQL.",
    tips: [
      "Commence par créer une table.",
      "Insère quelques lignes avec INSERT.",
      "Utilise SELECT pour lire les données.",
      "Ajoute WHERE pour filtrer.",
      "Teste toujours une requête SELECT avant de modifier des données."
    ],
    starter: `CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER
);

INSERT INTO students (name, age)
VALUES ("Ton prénom", 17);

SELECT * FROM students;`
  },
  r: {
    file: "main.R",
    command: "Rscript main.R",
    tips: [
      "Utilise c() pour créer une liste de valeurs.",
      "Utilise data.frame() pour créer un tableau de données.",
      "Utilise mean() pour calculer une moyenne.",
      "Vérifie les valeurs manquantes avant d'analyser.",
      "Installe ggplot2 si tu veux faire des graphiques avancés."
    ],
    starter: `prenom <- "Ton prénom"
age <- 17
notes <- c(12, 15, 18)

print(prenom)
print(mean(notes))`
  },
  dart: {
    file: "main.dart",
    command: "dart run main.dart",
    tips: [
      "Le programme commence dans void main().",
      "Utilise final si la valeur ne doit pas changer.",
      "Utilise print() pour afficher.",
      "Avec Flutter, pense en widgets.",
      "Sépare ton interface en petits composants."
    ],
    starter: `void main() {
  final prenom = "Ton prénom";
  final age = 17;

  // affiche les informations ici
  print(prenom);
  print(age);
}`
  },
  bash: {
    file: "script.sh",
    command: "chmod +x script.sh\n./script.sh",
    tips: [
      "Commence le fichier avec #!/usr/bin/env bash.",
      "Mets les variables entre guillemets quand tu les utilises.",
      "Utilise echo pour afficher.",
      "Teste les chemins avant de supprimer ou déplacer des fichiers.",
      "Rends le fichier exécutable avec chmod +x."
    ],
    starter: `#!/usr/bin/env bash

prenom="Ton prénom"
age=17

# affiche les informations ici
echo "$prenom"
echo "$age"`
  },
  lua: {
    file: "main.lua",
    command: "lua main.lua",
    tips: [
      "Utilise local pour éviter les variables globales.",
      "Les tableaux commencent à l'index 1.",
      "Utilise print() pour afficher.",
      "Les tables peuvent servir de listes ou d'objets.",
      "Crée des fonctions pour éviter de répéter le code."
    ],
    starter: `local prenom = "Ton prénom"
local age = 17

local function presentation(nom)
  print("Bonjour " .. nom)
end

presentation(prenom)`
  }
};

function renderHelpRunSection(language) {
  const guide = helpRunGuides[slugify(language.name)];

  if (!guide) {
    return "";
  }

  return `
<section class="lesson-block full">
  <h3>💡 Aide</h3>

  <div class="info-card">
    <p>Si tu bloques, voici quelques indices :</p>

    <div class="pill-list">
      ${guide.tips.map((tip) => `<li>${tip}</li>`).join("")}
    </div>

    <pre><code>${escapeHtml(guide.starter)}</code></pre>
  </div>
</section>

<section class="lesson-block full">
  <h3>▶️ Comment lancer le programme ?</h3>

  <div class="info-card">
    <p>
      Enregistre ton fichier sous le nom <strong>${guide.file}</strong>.
    </p>

    <p>
      Dans le terminal de VS Code, exécute :
    </p>

    <pre><code>${escapeHtml(guide.command)}</code></pre>
  </div>
</section>
`;
}

function renderCards(filter = "Tous") {
  const visibleLanguages =
    filter === "Tous"
      ? languages
      : languages.filter(language => language.category === filter);

  grid.innerHTML = visibleLanguages.map(language => `
    <a class="language-card" style="--accent: ${language.accent}" href="#langage/${slugify(language.name)}">
      <h3>${language.name}</h3>
      <p>${language.intro}</p>
      <span class="language-meta">
        <span>${language.category}</span>
        <span>${language.level}</span>
      </span>
    </a>
  `).join("");
}

function renderLesson(language) {
  document.title = `${language.name} - CodeLab`;
  homePage.classList.add("is-hidden");
  lessonPage.classList.remove("is-hidden");

  let html = `
    <div class="lesson-inner page-enter" style="--accent: ${language.accent}">
      <a class="back-link" href="#explorer">← Retour aux langages</a>

      <div class="lesson-hero">
        <div class="lesson-title">
          <span class="lesson-kicker">${language.category} - ${language.level}</span>
          <h2>${language.name}</h2>
          <p>${language.intro}</p>
        </div>

        <aside class="lesson-side">
          <div class="stat" style="--i: 0">
            <strong>${language.concepts.length}</strong>
            <span>notions cles</span>
          </div>
          <div class="stat" style="--i: 1">
            <strong>${language.level}</strong>
            <span>niveau conseille</span>
          </div>
          <div class="stat" style="--i: 2">
            <strong>${language.category}</strong>
            <span>domaine principal</span>
          </div>
        </aside>
      </div>

      <div class="lesson-content">
        <section class="lesson-block">
          <h3>Pourquoi apprendre ${language.name} ?</h3>
          <p>${language.why}</p>
        </section>

        <section class="lesson-block">
          <h3>Ce que tu peux creer</h3>
          <p>${language.build}</p>
        </section>

        <section class="lesson-block full">
          <h3>Notions importantes</h3>
          <ul class="pill-list">
            ${language.concepts.map(concept => `<li>${concept}</li>`).join("")}
          </ul>
        </section>

        <section class="lesson-block full">
          <h3>Premier exemple</h3>
          <pre><code>${escapeHtml(language.code)}</code></pre>
        </section>
      </div>
    </div>

${language.name === "Lua" ? `
<section class="lesson-block full">
  <h3>🌙 Comprendre Lua</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Lua ?</h4>
    <p>
      Lua est un langage léger, rapide et facile à apprendre.
      Il est souvent utilisé dans les jeux vidéo pour créer des scripts.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Lua ?</h4>
    <p>
      Lua permet d'ajouter des comportements à des jeux, applications ou logiciels.
    </p>

    <div class="pill-list">
      <li>🎮 Jeux vidéo</li>
      <li>⚙️ Scripts</li>
      <li>🧩 Extensions logicielles</li>
      <li>🚀 Automatisation</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>local prenom = "Babacar"

print("Bonjour " .. prenom)</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>local</strong> → crée une variable</li>
      <li><strong>print()</strong> → affiche du texte</li>
      <li><strong>..</strong> → concatène du texte</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Lua ?</h4>
    <p>
      Lua est très utilisé dans le développement de jeux vidéo et est réputé pour sa simplicité.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme Lua qui :</p>

  <div class="pill-list">
    <li>Déclare ton prénom</li>
    <li>Déclare ton âge</li>
    <li>Affiche les deux informations</li>
    <li>Utilise print()</li>
  </div>

  <p>
    Essaie de modifier les valeurs affichées.
  </p>
</section>

<section class="lesson-block full">

  <h3>💡 Aide</h3>

  <div class="info-card">
    <p>
      Pour réussir cet exercice, pense à :
    </p>

    <div class="pill-list">
      <li>Créer les variables demandées (local)</li>
      <li>Utiliser la fonction d'affichage du langage</li>
      <li>Respecter la syntaxe du langage</li>
      <li>Tester plusieurs valeurs</li>
    </div>
  </div>

</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>local</strong> → crée une variable locale</li>
      <li><strong>print()</strong> → affiche du texte</li>
      <li><strong>..</strong> → concatène du texte</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>local prenom = "Alex"
local age = 20

print("Prenom : " .. prenom)
print("Age : " .. age)</code></pre>

  </div>
</section>
` : ""}


${language.name === "Bash" ? `
<section class="lesson-block full">
  <h3>🖥️ Comprendre Bash</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Bash ?</h4>
    <p>
      Bash est un langage de script utilisé dans le terminal Linux et macOS.
      Il permet d'automatiser des tâches et d'exécuter des commandes rapidement.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Bash ?</h4>
    <p>
      Bash est utilisé pour gérer des fichiers, lancer des programmes,
      automatiser des sauvegardes et administrer des serveurs.
    </p>

    <div class="pill-list">
      <li>🖥️ Terminal Linux</li>
      <li>⚙️ Automatisation</li>
      <li>📂 Gestion de fichiers</li>
      <li>☁️ Administration serveur</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>#!/bin/bash

echo "Bonjour Bash"</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>#!/bin/bash</strong> → indique que le script utilise Bash</li>
      <li><strong>echo</strong> → affiche du texte</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Bash ?</h4>
    <p>
      Bash est très utile pour les développeurs et administrateurs système.
      Il permet de gagner énormément de temps grâce à l'automatisation.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un script Bash qui :</p>

  <div class="pill-list">
    <li>Stocke ton prénom dans une variable</li>
    <li>Affiche ton prénom</li>
    <li>Affiche ton âge</li>
    <li>Utilise echo</li>
  </div>

  <p>
    Essaie ensuite de modifier les valeurs affichées.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>prenom="Alex"</strong> → crée une variable</li>
      <li><strong>$prenom</strong> → récupère la valeur</li>
      <li><strong>echo</strong> → affiche du texte</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>#!/bin/bash

prenom="Alex"
age=20

echo "Prenom : $prenom"
echo "Age : $age"</code></pre>

  </div>
</section>
` : ""}


${language.name === "SQL" ? `
<section class="lesson-block full">
  <h3>🗄️ Comprendre SQL</h3>

  <div class="info-card">
    <h4>Qu'est-ce que SQL ?</h4>
    <p>
      SQL (Structured Query Language) est un langage utilisé pour communiquer avec une base de données.
      Il permet de stocker, rechercher, modifier et supprimer des données.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert SQL ?</h4>
    <p>
      SQL est présent dans presque toutes les applications qui utilisent des données :
      réseaux sociaux, boutiques en ligne, jeux, banques et entreprises.
    </p>

    <div class="pill-list">
      <li>🗄️ Bases de données</li>
      <li>👤 Gestion des utilisateurs</li>
      <li>📊 Analyse de données</li>
      <li>🌐 Sites web</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>SELECT nom, age
FROM utilisateurs;</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>SELECT</strong> → choisit les colonnes</li>
      <li><strong>FROM</strong> → indique la table</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre SQL ?</h4>
    <p>
      SQL est indispensable pour gérer les données dans les applications modernes.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Écris une requête SQL qui :</p>

  <div class="pill-list">
    <li>Affiche le prénom</li>
    <li>Affiche l'âge</li>
    <li>Depuis la table utilisateurs</li>
  </div>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>SELECT</strong> → sélectionne les colonnes</li>
      <li><strong>FROM</strong> → sélectionne la table</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>SELECT prenom, age
FROM utilisateurs;</code></pre>

  </div>
</section>
` : ""}


${language.name === "Kotlin" ? `
<section class="lesson-block full">
  <h3>🤖 Comprendre Kotlin</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Kotlin ?</h4>
    <p>
      Kotlin est un langage moderne développé par JetBrains.
      Il est aujourd'hui le langage officiel recommandé pour développer des applications Android.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Kotlin ?</h4>
    <p>
      Kotlin permet de créer des applications Android, des applications serveur et des logiciels modernes.
    </p>

    <div class="pill-list">
      <li>📱 Applications Android</li>
      <li>🌐 Backend</li>
      <li>⚡ Applications modernes</li>
      <li>🧠 Code plus simple que Java</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>fun main() {
    val prenom = "Babacar"

    println("Bonjour $prenom")
}</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>fun</strong> → crée une fonction</li>
      <li><strong>main()</strong> → point d'entrée</li>
      <li><strong>println()</strong> → affiche du texte</li>
      <li><strong>$variable</strong> → insère une variable dans une chaîne</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Kotlin ?</h4>

    <p>
      Kotlin est plus moderne et plus concis que Java.
      Il est devenu la référence pour le développement Android.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme Kotlin qui :</p>

  <div class="pill-list">
    <li>Déclare un prénom</li>
    <li>Déclare un âge</li>
    <li>Affiche les deux informations</li>
    <li>Utilise println()</li>
  </div>

  <p>
    Essaie de modifier les valeurs affichées.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>fun</strong> → crée une fonction</li>
      <li><strong>val</strong> → constante</li>
      <li><strong>println()</strong> → affiche du texte</li>
      <li><strong>$</strong> → insère une variable dans une chaîne</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>fun main() {
    val prenom = "Alex"
    val age = 20

    println("Prenom : $prenom")
    println("Age : $age")
}</code></pre>

  </div>
</section>
` : ""}


${language.name === "Swift" ? `
<section class="lesson-block full">
  <h3>🍎 Comprendre Swift</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Swift ?</h4>
    <p>
      Swift est un langage de programmation créé par Apple.
      Il permet de développer des applications pour iPhone, iPad, Apple Watch et Mac.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Swift ?</h4>
    <p>
      Swift est principalement utilisé pour créer des applications mobiles et desktop dans l'écosystème Apple.
    </p>

    <div class="pill-list">
      <li>📱 Applications iPhone</li>
      <li>⌚ Applications Apple Watch</li>
      <li>💻 Applications Mac</li>
      <li>🎨 Interfaces modernes</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>let prenom = "Babacar"

print("Bonjour \\(prenom)")</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>let</strong> → crée une constante</li>
      <li><strong>print()</strong> → affiche du texte</li>
      <li><strong>\\( )</strong> → insère une variable dans une chaîne</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Swift ?</h4>

    <p>
      Swift est indispensable pour créer des applications iPhone modernes.
      C'est le langage officiel recommandé par Apple.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme Swift qui :</p>

  <div class="pill-list">
    <li>Déclare une variable prénom</li>
    <li>Déclare une variable âge</li>
    <li>Affiche les deux informations</li>
    <li>Utilise print()</li>
  </div>

  <p>
    Essaie de modifier les valeurs affichées.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>let</strong> → crée une constante</li>
      <li><strong>var</strong> → crée une variable modifiable</li>
      <li><strong>print()</strong> → affiche du texte</li>
      <li><strong>\\( )</strong> → insère une variable dans un texte</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>let prenom = "Alex"
let age = 20

print("Prenom : \\(prenom)")
print("Age : \\(age)")</code></pre>

  </div>
</section>
` : ""}


${language.name === "Rust" ? `
<section class="lesson-block full">
  <h3>🦀 Comprendre Rust</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Rust ?</h4>
    <p>
      Rust est un langage de programmation moderne conçu pour être à la fois
      rapide, sécurisé et fiable. Il permet de créer des logiciels performants
      tout en évitant de nombreuses erreurs de mémoire.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Rust ?</h4>
    <p>
      Rust est utilisé pour développer des systèmes, des serveurs,
      des outils en ligne de commande et des applications nécessitant
      de hautes performances.
    </p>

    <div class="pill-list">
      <li>⚡ Logiciels performants</li>
      <li>🖥️ Développement système</li>
      <li>🌐 Serveurs web</li>
      <li>🔒 Sécurité mémoire</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>fn main() {
    println!("Bonjour Rust");
}</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>fn</strong> → déclare une fonction</li>
      <li><strong>main()</strong> → point d'entrée du programme</li>
      <li><strong>println!</strong> → affiche du texte</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Rust ?</h4>

    <p>
      Rust est de plus en plus utilisé par les entreprises car il offre
      les performances du C/C++ tout en réduisant les risques de bugs liés à la mémoire.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme Rust qui :</p>

  <div class="pill-list">
    <li>Déclare une variable prénom</li>
    <li>Déclare une variable âge</li>
    <li>Affiche les deux informations</li>
    <li>Utilise println!</li>
  </div>

  <p>
    Essaie de modifier les valeurs affichées.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>let</strong> → déclare une variable</li>
      <li><strong>println!</strong> → affiche du texte</li>
      <li><strong>fn main()</strong> → point de départ du programme</li>
      <li><strong>Rust</strong> → langage rapide et sécurisé</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>fn main() {
    let prenom = "Alex";
    let age = 20;

    println!("Prenom : {}", prenom);
    println!("Age : {}", age);
}</code></pre>

  </div>
</section>
` : ""}


${language.name === "Go" ? `
<section class="lesson-block full">
  <h3>🐹 Comprendre Go (Golang)</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Go ?</h4>
    <p>
      Go, aussi appelé Golang, est un langage créé par Google.
      Il est conçu pour être simple, rapide et performant.
      Il est très utilisé pour créer des serveurs, des APIs et des outils cloud.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Go ?</h4>
    <p>
      Go permet de développer des applications rapides capables de gérer
      beaucoup d'utilisateurs en même temps.
    </p>

    <div class="pill-list">
      <li>🌐 APIs backend</li>
      <li>☁️ Services cloud</li>
      <li>⚡ Applications performantes</li>
      <li>🖥️ Outils en ligne de commande</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>package main

import "fmt"

func main() {
  fmt.Println("Bonjour Go")
}</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>package main</strong> → programme principal</li>
      <li><strong>import</strong> → importe une bibliothèque</li>
      <li><strong>func main()</strong> → point d'entrée du programme</li>
      <li><strong>fmt.Println()</strong> → affiche du texte</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Go ?</h4>
    <p>
      Go est très apprécié pour sa simplicité et ses performances.
      Il est largement utilisé dans les entreprises qui développent
      des services web modernes et des infrastructures cloud.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme Go qui :</p>

  <div class="pill-list">
    <li>Déclare une variable prénom</li>
    <li>Déclare une variable âge</li>
    <li>Affiche les deux informations</li>
    <li>Utilise fmt.Println()</li>
  </div>

  <p>
    Essaie de modifier les valeurs affichées.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>var</strong> → déclare une variable</li>
      <li><strong>fmt.Println()</strong> → affiche du texte</li>
      <li><strong>func main()</strong> → point de départ du programme</li>
      <li><strong>Go</strong> → langage simple et performant</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>package main

import "fmt"

func main() {
  var prenom string = "Alex"
  var age int = 20

  fmt.Println("Prenom :", prenom)
  fmt.Println("Age :", age)
}</code></pre>

  </div>
</section>
` : ""}


${language.name === "Ruby" ? `
<section class="lesson-block full">
  <h3>💎 Comprendre Ruby</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Ruby ?</h4>
    <p>
      Ruby est un langage de programmation simple, élégant et très lisible.
      Il est souvent utilisé avec le framework Ruby on Rails pour créer des sites web.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Ruby ?</h4>
    <p>
      Ruby est utilisé pour développer des applications web rapidement et de manière claire.
    </p>

    <div class="pill-list">
      <li>🌐 Applications web</li>
      <li>🚀 Prototypes rapides</li>
      <li>🧱 Backend avec Rails</li>
      <li>🧠 Code lisible et propre</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>puts "Bonjour Ruby"</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>puts</strong> → affiche du texte dans la console</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Ruby ?</h4>
    <p>
      Ruby est très apprécié pour sa simplicité et sa rapidité de développement.
      Il permet de créer des applications web très rapidement.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme Ruby qui :</p>

  <div class="pill-list">
    <li>Affiche ton prénom</li>
    <li>Affiche ton âge</li>
    <li>Utilise puts</li>
    <li>Utilise des variables</li>
  </div>

  <p>
    Essaie de modifier le message affiché.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>puts</strong> → affiche du texte</li>
      <li><strong>variables</strong> → stockent des valeurs</li>
      <li><strong>Ruby</strong> → langage simple et lisible</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>prenom = "Alex"
age = 20

puts "Prenom : #{prenom}"
puts "Age : #{age}"</code></pre>

  </div>
</section>
` : ""}


${language.name === "PHP" ? `
<section class="lesson-block full">
  <h3>🐘 Comprendre PHP</h3>

  <div class="info-card">
    <h4>Qu'est-ce que PHP ?</h4>
    <p>
      PHP est un langage de programmation utilisé principalement pour créer des sites web dynamiques côté serveur.
      Il permet de générer du contenu en fonction des utilisateurs.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert PHP ?</h4>
    <p>
      PHP sert à gérer les formulaires, les comptes utilisateurs, les bases de données et les sites dynamiques.
    </p>

    <div class="pill-list">
      <li>🌐 Sites dynamiques</li>
      <li>🧾 Formulaires</li>
      <li>🗄️ Bases de données</li>
      <li>🔐 Authentification</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>&lt;?php
echo "Bonjour PHP";
?&gt;</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>&lt;?php ?&gt;</strong> → ouverture et fermeture du code PHP</li>
      <li><strong>echo</strong> → affiche du texte</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre PHP ?</h4>
    <p>
      PHP est très utilisé sur internet et alimente encore une grande partie des sites web dans le monde.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un script PHP qui :</p>

  <div class="pill-list">
    <li>Affiche ton prénom</li>
    <li>Affiche ton âge</li>
    <li>Utilise echo</li>
    <li>Utilise les balises PHP</li>
  </div>

  <p>
    Essaie de modifier le texte affiché.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>&lt;?php ?&gt;</strong> → démarre et termine le code PHP</li>
      <li><strong>echo</strong> → affiche du contenu dans la page</li>
      <li><strong>;</strong> → termine chaque instruction</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>&lt;?php
$prenom = "Alex";
$age = 20;

echo "Prenom : " . $prenom . "&lt;br&gt;";
echo "Age : " . $age;
?&gt;</code></pre>

  </div>
</section>
` : ""}


${language.name === "C#" ? `
<section class="lesson-block full">
  <h3>🟣 Comprendre C#</h3>

  <div class="info-card">
    <h4>Qu'est-ce que C# ?</h4>
    <p>
      C# (C-Sharp) est un langage de programmation créé par Microsoft.
      Il est utilisé pour créer des applications, des jeux vidéo et des logiciels professionnels.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert C# ?</h4>
    <p>
      C# est très utilisé avec le moteur de jeu Unity, les applications Windows et les APIs backend.
    </p>

    <div class="pill-list">
      <li>🎮 Jeux vidéo (Unity)</li>
      <li>💻 Applications Windows</li>
      <li>🌐 APIs backend</li>
      <li>🏢 Logiciels professionnels</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>using System;

class Program {
  static void Main() {
    Console.WriteLine("Bonjour C#");
  }
}</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>using System</strong> → bibliothèque de base</li>
      <li><strong>Main()</strong> → point de départ du programme</li>
      <li><strong>Console.WriteLine</strong> → affiche du texte</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre C# ?</h4>
    <p>
      C# est moderne, puissant et très utilisé dans le développement de jeux et d’applications professionnelles.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme C# qui :</p>

  <div class="pill-list">
    <li>Affiche ton prénom</li>
    <li>Affiche ton âge</li>
    <li>Utilise Console.WriteLine</li>
    <li>Utilise Main()</li>
  </div>

  <p>
    Essaie de modifier les messages affichés.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>using System</strong> → importe les outils de base</li>
      <li><strong>Main()</strong> → point d’entrée du programme</li>
      <li><strong>Console.WriteLine</strong> → affiche du texte dans la console</li>
      <li><strong>class</strong> → structure du programme</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>using System;

class Program {
  static void Main() {
    string prenom = "Alex";
    int age = 20;

    Console.WriteLine("Prenom : " + prenom);
    Console.WriteLine("Age : " + age);
  }
}</code></pre>

  </div>
</section>
` : ""}


${language.name === "C++" ? `
<section class="lesson-block full">
  <h3>⚙️ Comprendre le langage C++</h3>

  <div class="info-card">
    <h4>Qu'est-ce que C++ ?</h4>
    <p>
      C++ est une évolution du langage C. Il permet de créer des programmes très rapides,
      des jeux vidéo, des moteurs 3D et des logiciels complexes.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert C++ ?</h4>
    <p>
      C++ est utilisé dans les jeux vidéo, les moteurs graphiques, les logiciels puissants et les systèmes performants.
    </p>

    <div class="pill-list">
      <li>🎮 Jeux vidéo</li>
      <li>🧠 Moteurs 3D</li>
      <li>⚙️ Logiciels rapides</li>
      <li>💻 Systèmes complexes</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>#include <iostream>

using namespace std;

int main() {
  cout << "Bonjour C++";
  return 0;
}</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>#include iostream</strong> → bibliothèque d'entrée/sortie</li>
      <li><strong>cout</strong> → affiche du texte</li>
      <li><strong>main()</strong> → point de départ du programme</li>
      <li><strong>return 0</strong> → fin du programme</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre C++ ?</h4>
    <p>
      C++ est très puissant et permet de comprendre la performance et la mémoire.
      Il est utilisé dans les jeux et les logiciels professionnels.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme C++ qui :</p>

  <div class="pill-list">
    <li>Affiche ton prénom</li>
    <li>Affiche ton âge</li>
    <li>Utilise cout</li>
    <li>Utilise main()</li>
  </div>

  <p>
    Essaie de modifier le message affiché.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>#include iostream</strong> → permet d'utiliser cout</li>
      <li><strong>cout</strong> → affiche du texte dans le terminal</li>
      <li><strong>main</strong> → point d'entrée du programme</li>
      <li><strong>return 0</strong> → fin du programme</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>#include <iostream>

using namespace std;

int main() {
  string prenom = "Alex";
  int age = 20;

  cout << "Prenom : " << prenom << endl;
  cout << "Age : " << age << endl;

  return 0;
}</code></pre>

  </div>
</section>
` : ""}


${language.name === "C" ? `
<section class="lesson-block full">
  <h3>⚙️ Comprendre le langage C</h3>

  <div class="info-card">
    <h4>Qu'est-ce que le langage C ?</h4>
    <p>
      Le langage C est un langage de programmation très proche de la machine.
      Il est utilisé pour créer des systèmes, des logiciels rapides et comprendre le fonctionnement d’un ordinateur.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert le C ?</h4>
    <p>
      Le C est utilisé dans les systèmes d’exploitation, les pilotes, les logiciels embarqués et les programmes très performants.
    </p>

    <div class="pill-list">
      <li>💻 Systèmes d’exploitation</li>
      <li>⚙️ Logiciels rapides</li>
      <li>🔌 Systèmes embarqués</li>
      <li>🧠 Compréhension bas niveau</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>#include <stdio.h>

int main() {
  printf("Bonjour en C");
  return 0;
}</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>#include</strong> → importe une bibliothèque</li>
      <li><strong>main()</strong> → point de départ du programme</li>
      <li><strong>printf</strong> → affiche du texte</li>
      <li><strong>return 0</strong> → termine le programme</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre le C ?</h4>
    <p>
      Le C est la base de nombreux autres langages comme C++, Java ou Python.
      Il permet de comprendre comment fonctionne réellement un ordinateur.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme C qui :</p>

  <div class="pill-list">
    <li>Affiche ton prénom</li>
    <li>Affiche ton âge</li>
    <li>Utilise printf</li>
    <li>Utilise la fonction main</li>
  </div>

  <p>
    Essaie de modifier le texte affiché.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>#include</strong> → ajoute les outils du langage</li>
      <li><strong>main</strong> → point d’entrée du programme</li>
      <li><strong>printf</strong> → affiche du texte à l’écran</li>
      <li><strong>int</strong> → type de retour de la fonction</li>
    </div>

    <p><strong>💻 Code corrigé :</strong></p>

    <pre><code>#include <stdio.h>

int main() {
  char prenom[] = "Alex";
  int age = 20;

  printf("Prenom : %s\n", prenom);
  printf("Age : %d\n", age);

  return 0;
}</code></pre>

  </div>
</section>
` : ""}


${language.name === "Java" ? `
<section class="lesson-block full">
  <h3>☕ Comprendre Java</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Java ?</h4>
    <p>
      Java est un langage de programmation très utilisé pour créer des applications,
      des logiciels et des applications Android.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Java ?</h4>
    <p>
      Java est utilisé dans les grandes entreprises pour développer des systèmes robustes.
    </p>

    <div class="pill-list">
      <li>📱 Applications Android</li>
      <li>💻 Logiciels</li>
      <li>🏢 Applications d’entreprise</li>
      <li>🌐 Backend web</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>public class Main {
  public static void main(String[] args) {
    System.out.println("Bonjour Java");
  }
}</code></pre>

    <p>Exemple :</p>

    <div class="pill-list">
      <li><strong>class</strong> → structure du programme</li>
      <li><strong>main</strong> → point d’entrée</li>
      <li><strong>System.out.println</strong> → affiche un message</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Java ?</h4>
    <p>
      Java est très demandé dans les entreprises et reste un langage important pour la programmation orientée objet.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme Java qui :</p>

  <div class="pill-list">
    <li>Affiche ton prénom</li>
    <li>Affiche ton âge</li>
    <li>Utilise System.out.println</li>
    <li>Crée une classe Main</li>
  </div>

  <p>
    Essaie de modifier les valeurs affichées.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

    <p><strong>📌 Ici :</strong></p>

    <div class="pill-list">
      <li><strong>class</strong> → structure du programme</li>
      <li><strong>main</strong> → point d’entrée</li>
      <li><strong>System.out.println</strong> → affiche du texte</li>
    </div>

    <pre><code>public class Main {
  public static void main(String[] args) {
    String prenom = "Alex";
    int age = 20;

    System.out.println("Prénom : " + prenom);
    System.out.println("Âge : " + age);
  }
}</code></pre>

  </div>
</section>
` : ""}

${language.name === "Python" ? `
<section class="lesson-block full">
  <h3>🐍 Comprendre Python</h3>

  <div class="info-card">
    <h4>Qu'est-ce que Python ?</h4>
    <p>
      Python est un langage de programmation simple, puissant et très utilisé.
      Il est utilisé en développement web, intelligence artificielle, automatisation et data science.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert Python ?</h4>
    <p>
      Python permet de créer des programmes, automatiser des tâches, analyser des données
      ou encore développer des applications web avec un backend.
    </p>

    <div class="pill-list">
      <li>🤖 Intelligence artificielle</li>
      <li>🌐 Développement web (backend)</li>
      <li>📊 Analyse de données</li>
      <li>⚙️ Automatisation</li>
      <li>🎮 Projets simples et rapides</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>nom = "Babacar"

def dire_bonjour(personne):
    print("Bonjour " + personne)

dire_bonjour(nom)</code></pre>

    <p> Ici </p>

    <div class="pill-list">
      <li><strong>variable</strong> → stocke une valeur</li>
      <li><strong>def</strong> → définit une fonction</li>
      <li><strong>print()</strong> → affiche un message</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre Python ?</h4>

    <p>
      Python est très demandé dans le monde professionnel et est souvent recommandé
      pour commencer la programmation grâce à sa simplicité.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme Python qui :</p>

  <div class="pill-list">
    <li>Déclare une variable avec ton prénom</li>
    <li>Crée une fonction</li>
    <li>Affiche un message personnalisé</li>
    <li>Utilise print()</li>
  </div>

  <p>
    Essaie de modifier le message pour afficher aussi ton âge.
  </p>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">
<pre><code>prenom = "Alex"
age = 20

def presentation(nom):
    print("Salut " + nom + ", tu as " + str(age) + " ans.")

presentation(prenom)</code></pre>


    <p>
      Ici :
    </p>

    <div class="pill-list">
      <li>Python est très lisible et simple</li>
      <li>Les fonctions utilisent def</li>
      <li>print() affiche le résultat</li>
    </div>
  </div>
</section>
` : ""}

${language.name === "TypeScript" ? `
<section class="lesson-block full">
  <h3>🟦 Comprendre TypeScript</h3>

  <div class="info-card">
    <h4>Qu'est-ce que TypeScript ?</h4>
    <p>
      TypeScript est une extension de JavaScript qui ajoute des types.
      Il permet d’éviter beaucoup d’erreurs avant même d’exécuter le code.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert TypeScript ?</h4>
    <p>
      TypeScript aide à écrire du code plus fiable, plus clair et plus facile à maintenir,
      surtout dans les gros projets.
    </p>

    <div class="pill-list">
      <li>🧠 Détection d’erreurs</li>
      <li>📦 Code plus structuré</li>
      <li>🔒 Typage des variables</li>
      <li>👥 Travail en équipe facilité</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>let nom: string = "Babacar";
let age: number = 17;

function saluer(personne: string) {
  return "Bonjour " + personne;
}

saluer(nom);</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>: string</strong> → texte uniquement</li>
      <li><strong>: number</strong> → nombre uniquement</li>
      <li><strong>type dans les fonctions</strong> → sécurité du code</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Différence avec JavaScript</h4>
    <p>
      JavaScript est flexible mais peut provoquer des erreurs.
      TypeScript ajoute des règles pour éviter ces erreurs avant l’exécution.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un programme TypeScript qui :</p>

  <div class="pill-list">
    <li>Déclare une variable avec ton prénom</li>
    <li>Déclare une variable âge (number)</li>
    <li>Crée une fonction typée</li>
    <li>Retourne un message personnalisé</li>
  </div>

  <p>
    Essaie de changer volontairement un type pour voir l’erreur apparaître.
  </p>
</section>

<section class="lesson-block full">
  <h3>💡 Aide</h3>

  <div class="info-card">

    <p>
      Si tu bloques, voici quelques indices :
    </p>

    <div class="pill-list">
      <li>Utilise <strong>let</strong> pour créer une variable</li>
      <li>Ajoute <strong>: string</strong> après une variable texte</li>
      <li>Ajoute <strong>: number</strong> après une variable nombre</li>
      <li>Crée une fonction avec <strong>function</strong></li>
      <li>Ajoute le type du paramètre entre parenthèses</li>
      <li>Retourne un message avec <strong>return</strong></li>
    </div>

<pre><code>let prenom: string = "Ton prénom";
let age: number = 17;

// Crée ta fonction ici

// Retourne ensuite un message</code></pre>

  </div>
</section>

<section class="lesson-block full">
  <h3>▶️ Comment lancer le programme ?</h3>

  <div class="info-card">

    <p>
      Enregistre ton fichier sous le nom <strong>test.ts</strong>.
    </p>

    <p>
      Dans le terminal de VS Code, exécute :
    </p>

<pre><code>ts-node test.ts</code></pre>

    <p>
      Si ts-node n'est pas installé :
    </p>

<pre><code>npm install -g ts-node typescript</code></pre>

    <p>
      Puis relance :
    </p>

<pre><code>ts-node test.ts</code></pre>

  </div>
</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">
<pre><code>let prenom: string = "Alex";
let age: number = 20;

function presentation(nom: string) {
  return "Salut " + nom + ", tu as " + age + " ans.";
}

message();</code></pre>

    <p>
      Ici :
    </p>

    <div class="pill-list">
      <li>TypeScript vérifie les types automatiquement</li>
      <li>Les erreurs sont détectées avant l’exécution</li>
      <li>Le code devient plus sûr et prévisible</li>
    </div>
  </div>
</section>
` : ""}

${language.name === "JavaScript" ? `
<section class="lesson-block full">
  <h3>⚡ Comprendre JavaScript</h3>

  <div class="info-card">
    <h4>Qu'est-ce que JavaScript ?</h4>
    <p>
      JavaScript est un langage de programmation qui permet de rendre un site web interactif.
      Contrairement à HTML (structure) et CSS (style), JavaScript ajoute du comportement.
    </p>
  </div>

  <div class="info-card">
    <h4>À quoi sert JavaScript ?</h4>
    <p>
      JavaScript permet de créer des actions sur une page web comme cliquer sur un bouton,
      afficher un message, modifier du contenu ou encore créer des jeux.
    </p>

    <div class="pill-list">
      <li>🖱️ Interactions utilisateur</li>
      <li>📦 Modification du contenu</li>
      <li>⏱️ Minuteurs et animations</li>
      <li>📡 Communication avec des serveurs</li>
      <li>🎮 Jeux web</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Exemple simple</h4>

    <pre><code>let nom = "Babacar";

function direBonjour() {
  console.log("Bonjour " + nom);
}

direBonjour();</code></pre>

    <p>Explication :</p>

    <div class="pill-list">
      <li><strong>let</strong> → crée une variable</li>
      <li><strong>function</strong> → crée une fonction</li>
      <li><strong>console.log()</strong> → affiche une fenêtre</li>
    </div>
  </div>

  <div class="info-card">
    <h4>Pourquoi apprendre JavaScript ?</h4>

    <p>
      JavaScript est indispensable pour devenir développeur web.
      Sans lui, les sites seraient statiques et sans interaction.
    </p>
  </div>
</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>Crée un petit programme qui :</p>

  <div class="pill-list">
    <li>Crée une variable avec ton prénom</li>
    <li>Crée une fonction</li>
    <li>Affiche un message avec alert()</li>
    <li>Utilise la concaténation</li>
  </div>

  <p>
    Essaie aussi de modifier le message pour qu’il change selon le nom.
  </p>
</section>

<section class="lesson-block full">
  <h3>💡 Aide</h3>

  <div class="info-card">

    <p>
      Si tu bloques, voici quelques indices :
    </p>

    <div class="pill-list">
      <li>Utilise <strong>let</strong> pour créer une variable prénom</li>
      <li>Crée une fonction avec <strong>function</strong></li>
      <li>Utilise <strong>console.log()</strong> pour afficher un message dans le terminal</li>
      <li>Concatène du texte avec le symbole <strong>+</strong></li>
      <li>N'oublie pas d'appeler la fonction à la fin du programme</li>
    </div>

    <pre><code>let prenom = "Ton prénom";

// Crée ta fonction ici

// Appelle ensuite ta fonction</code></pre>

  </div>
</section>

<section class="lesson-block full">

  <h3>▶️ Comment lancer le programme ?</h3>

  <div class="info-card">
    <p>
      Ouvre le terminal de Visual Studio Code puis exécute la commande suivante :
    </p>

    <pre><code>node nom_du_fichier.js</code></pre>

  </div>

</section>

<section class="lesson-block full">
  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">
<pre><code>let prenom = "Alex";

function message() {
  alert("Bienvenue " + prenom + " sur le site !");
}

message();</code></pre>

    <p>
      Ici :
    </p>

    <div class="pill-list">
      <li>Une variable stocke le prénom</li>
      <li>Une fonction organise le code</li>
      <li>console.log() affiche le message final</li>
    </div>
  </div>
</section>
` : ""}

${language.name === "CSS" ? `

<section class="lesson-block full">
  <h3>🎨 Comprendre CSS en profondeur</h3>

  <div class="info-card">
    <h4>Qu'est-ce que CSS ?</h4>

    <p>
      CSS signifie Cascading Style Sheets.
      C'est le langage qui permet de personnaliser l'apparence d'un site web.
    </p>

    <p>
      HTML crée les éléments de la page (titres, paragraphes, images...),
      tandis que CSS transforme leur apparence.
    </p>
  </div>

  <div class="info-card">
    <h4>Pourquoi CSS est indispensable ?</h4>

    <p>
      Sans CSS, tous les sites internet ressembleraient à un simple document texte.
      Grâce à CSS, on peut créer des designs modernes, des animations,
      des menus professionnels et des interfaces adaptées aux téléphones.
    </p>

    <ul class="pill-list">
      <li>🎨 Couleurs</li>
      <li>📦 Cartes</li>
      <li>📱 Responsive Design</li>
      <li>✨ Animations</li>
      <li>🖱️ Effets au survol</li>
      <li>📐 Mise en page</li>
    </ul>
  </div>

  <div class="info-card">
    <h4>Comprendre une règle CSS</h4>

<pre><code>.card{
  background:white;
  padding:20px;
  border-radius:12px;
}</code></pre>

    <p>
      Cette règle cible tous les éléments possédant la classe
      <strong>card</strong>.
    </p>

    <ul class="pill-list">
      <li>background → couleur de fond</li>
      <li>padding → espace intérieur</li>
      <li>border-radius → coins arrondis</li>
    </ul>
  </div>

  <div class="info-card">
    <h4>Flexbox : notion essentielle</h4>

<pre><code>.container{
  display:flex;
  justify-content:center;
  align-items:center;
}</code></pre>

    <p>
      Flexbox permet d'aligner facilement des éléments horizontalement
      ou verticalement.
    </p>
  </div>

</section>

<section class="lesson-block full">
  <h3>📝 Exercice</h3>

  <p>
    Crée une carte moderne contenant :
  </p>

  <ul class="pill-list">
    <li>Un titre</li>
    <li>Un paragraphe</li>
    <li>Un bouton</li>
    <li>Une couleur de fond</li>
    <li>Des coins arrondis</li>
    <li>Une ombre</li>
    <li>Un effet au survol</li>
  </ul>

  <p>
    Bonus : centre complètement la carte dans la page.
  </p>
</section>

<section class="lesson-block full">
  <h3>💡 Aide</h3>

  <div class="info-card">

    <p>
      Si tu bloques, voici quelques indices :
    </p>

    <div class="pill-list">
      <li>Utilise <strong>background</strong> pour changer la couleur de fond</li>
      <li>Utilise <strong>padding</strong> pour ajouter de l'espace à l'intérieur de la carte</li>
      <li>Utilise <strong>border-radius</strong> pour arrondir les coins</li>
      <li>Utilise <strong>box-shadow</strong> pour créer une ombre</li>
      <li>Utilise <strong>text-align: center</strong> pour centrer le texte</li>
      <li>Utilise <strong>margin: auto</strong> pour centrer la carte horizontalement</li>
    </div>

<pre><code>.card{
  background: white;

  /* Ajoute ici tes propriétés */
}</code></pre>

  </div>
</section>

<section class="lesson-block full">
  <h3>▶️ Comment tester le code ?</h3>

  <div class="info-card">

    <p>
      Le CSS ne s'exécute pas dans le terminal.
      Il doit être relié à une page HTML.
    </p>

<pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>

    <p>
      Ensuite, ouvre simplement ton fichier <strong>index.html</strong> dans ton navigateur.
    </p>

  </div>
</section>

<section class="lesson-block full">

  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">

<pre><code>.card{
  background:white;
  padding:30px;
  border-radius:20px;
  max-width:400px;
  margin:auto;
  text-align:center;
  box-shadow:0 15px 30px rgba(0,0,0,.15);
  transition:.3s;
}

.card:hover{
  transform:translateY(-5px);
}

button{
  background:#2563eb;
  color:white;
  border:none;
  padding:12px 20px;
  border-radius:10px;
  cursor:pointer;
}

button:hover{
  opacity:.9;
}</code></pre>

  </div>

</section>

` : ""}

    ${language.name === "HTML" ? `
<section class="lesson-block full">
  <h3>Explication détaillée de HTML</h3>

  <p>
    HTML (HyperText Markup Language) est le langage utilisé pour construire
    la structure d'une page web. Chaque élément visible sur un site internet
    est généralement créé grâce à des balises HTML.
  </p>

  <p>
    Les balises sont entourées de chevrons (&lt; &gt;).
    La plupart s'ouvrent puis se ferment :
  </p>

  <pre><code>&lt;p&gt;Bonjour&lt;/p&gt;</code></pre>

  <p>
    Dans cet exemple :
  </p>

  <ul class="pill-list">
    <li>&lt;p&gt; ouvre un paragraphe</li>
    <li>Bonjour est le contenu</li>
    <li>&lt;/p&gt; ferme le paragraphe</li>
  </ul>

  <p>
    Voici quelques balises très utilisées :
  </p>

  <ul class="pill-list">
    <li>&lt;h1&gt; : titre principal</li>
    <li>&lt;p&gt; : paragraphe</li>
    <li>&lt;a&gt; : lien</li>
    <li>&lt;img&gt; : image</li>
    <li>&lt;div&gt; : conteneur</li>
    <li>&lt;button&gt; : bouton</li>
  </ul>

  <p>
    HTML sert uniquement à organiser le contenu.
    Pour le design on utilise CSS.
    Pour l'interactivité on utilise JavaScript.
  </p>
</section>

<section class="lesson-block full">
  <h3>Exercice intermédiaire</h3>

  <p>
    Crée une page contenant :
  </p>

  <ul class="pill-list">
    <li>Un titre principal</li>
    <li>Un sous-titre</li>
    <li>Deux paragraphes</li>
    <li>Une image</li>
    <li>Un lien vers Google</li>
    <li>Un bouton</li>
  </ul>

  <p>
    Bonus : place tous les éléments dans une balise &lt;div&gt;.
  </p>
</section>

<section class="lesson-block full">
  <h3>Correction</h3>

  <button class="correction-btn" onclick="toggleCorrection(this)">
    Voir la correction
  </button>

  <div class="correction-content">
<pre><code>&lt;div&gt;

  &lt;h1&gt;Mon premier site&lt;/h1&gt;

  &lt;h2&gt;Présentation&lt;/h2&gt;

  &lt;p&gt;Je découvre HTML.&lt;/p&gt;

  &lt;p&gt;J'apprends à créer des pages web.&lt;/p&gt;

  &lt;img src="image.jpg" alt="Image exemple"&gt;

  &lt;br&gt;&lt;br&gt;

  &lt;a href="https://google.com"&gt;
    Aller sur Google
  &lt;/a&gt;

  &lt;br&gt;&lt;br&gt;

  &lt;button&gt;Clique-moi&lt;/button&gt;

&lt;/div&gt;</code></pre>
  </div>
</section>
` : ""}
  `;

  const helpRunHtml = renderHelpRunSection(language);
  if (helpRunHtml) {
    const marker = /<section class="lesson-block full">\s*<button class="correction-btn"/;
    const match = html.match(marker);
    if (match) {
      html = html.slice(0, match.index) + helpRunHtml + html.slice(match.index);
    } else {
      html += helpRunHtml;
    }
  }

  lessonPage.innerHTML = html;
  window.scrollTo(0, 0);
}

function showHome() {
  document.title = "CodeLab - Apprendre 20 langages";
  lessonPage.classList.add("is-hidden");
  homePage.classList.remove("is-hidden");
}

function handleRoute() {
  if (location.hash.startsWith("#langage/")) {
    const language = findLanguageFromHash();

    if (language) {
      renderLesson(language);
      return;
    }
  }

  showHome();

  if (location.hash === "#explorer") {
    document.querySelector("#explorer").scrollIntoView();
  }
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(filter => filter.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCards(button.dataset.filter);
  });
});

renderCards();
handleRoute();

window.addEventListener("hashchange", handleRoute);
function toggleCorrection(button) {
  const correction = button.nextElementSibling;

  correction.classList.toggle("show");

  if (correction.classList.contains("show")) {
    button.textContent = "Masquer la correction";
  } else {
    button.textContent = "Voir la correction";
  }
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ── Cookie Consent ── */

const cookieBanner = document.querySelector("#cookieBanner");
const cookieAccept = document.querySelector("#cookieAccept");
const cookieRefuse = document.querySelector("#cookieRefuse");

function getCookieConsent() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)cookie_consent\s*=\s*([^;]*).*$)|^.*$/, "$1");
}

function setCookieConsent(value) {
  document.cookie = `cookie_consent=${value}; path=/; max-age=31536000; SameSite=Lax`;
}

if (!getCookieConsent()) {
  cookieBanner.classList.remove("is-hidden");
} else if (getCookieConsent() === "accepted") {
  sendTrack();
}

cookieAccept.addEventListener("click", () => {
  setCookieConsent("accepted");
  cookieBanner.classList.add("is-hidden");
  sendTrack();
});

cookieRefuse.addEventListener("click", () => {
  setCookieConsent("refused");
  cookieBanner.classList.add("is-hidden");
});

/* ── Tracking ── */

let trackingStart = Date.now();
let trackingPage = location.hash || "/";

function getPageName(hash) {
  if (!hash || hash === "#accueil" || hash === "/") return "Accueil";
  if (hash === "#explorer") return "Explorer les langages";
  if (hash.startsWith("#langage/")) {
    const lang = findLanguageFromHash();
    return lang ? lang.name : hash.replace("#langage/", "");
  }
  return hash;
}

function getVisitorId() {
  if (getCookieConsent() !== "accepted") return null;
  let id = document.cookie.replace(/(?:(?:^|.*;\s*)visitor_id\s*=\s*([^;]*).*$)|^.*$/, "$1");
  if (!id) {
    id = "v_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    document.cookie = `visitor_id=${id}; path=/; max-age=${31536000}; SameSite=Lax`;
  }
  return id;
}

function sendTrack() {
  const visitorId = getVisitorId();
  if (!visitorId) return;
  const now = Date.now();
  const newPage = location.hash || "/";
  const duration = newPage !== trackingPage ? Math.round((now - trackingStart) / 1000) : 0;
  const data = {
    visitor_id: visitorId,
    page: newPage,
    page_name: getPageName(newPage),
    referrer: document.referrer || "",
    screen: `${window.innerWidth}x${window.innerHeight}`,
    duration_seconds: duration,
  };
  trackingStart = now;
  trackingPage = newPage;
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch(() => {});
}

function sendFinalTrack() {
  const visitorId = getVisitorId();
  if (!visitorId) return;
  const duration = Math.round((Date.now() - trackingStart) / 1000);
  if (duration < 2) return;
  const data = {
    visitor_id: visitorId,
    page: trackingPage,
    page_name: getPageName(trackingPage),
    referrer: "",
    screen: `${window.innerWidth}x${window.innerHeight}`,
    duration_seconds: duration,
  };
  navigator.sendBeacon("/api/track", JSON.stringify(data));
}

window.addEventListener("hashchange", sendTrack);
window.addEventListener("beforeunload", sendFinalTrack);

const hamburger = document.querySelector("#hamburger");
const overlay = document.querySelector("#mobileOverlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  overlay.classList.toggle("is-open");
});

overlay.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    overlay.classList.remove("is-open");
  });
});

/* ── Auth ── */

const authOverlay = document.querySelector("#authOverlay");
const authClose = document.querySelector("#authClose");
const btnAuth = document.querySelector("#btnAuth");
const btnLogout = document.querySelector("#btnLogout");
const userMenu = document.querySelector("#userMenu");
const userName = document.querySelector("#userName");
const mobileBtnAuth = document.querySelector("#mobileBtnAuth");
const mobileBtnLogout = document.querySelector("#mobileBtnLogout");
const mobileUserMenu = document.querySelector("#mobileUserMenu");
const mobileUserName = document.querySelector("#mobileUserName");

const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const loginError = document.querySelector("#loginError");
const registerError = document.querySelector("#registerError");
const showRegister = document.querySelector("#showRegister");
const showLogin = document.querySelector("#showLogin");

function openAuth() {
  authOverlay.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeAuth() {
  authOverlay.classList.add("is-hidden");
  document.body.style.overflow = "";
  loginError.classList.add("is-hidden");
  registerError.classList.add("is-hidden");
  loginForm.reset();
  registerForm.reset();
}

function showLoginForm() {
  loginForm.classList.remove("is-hidden");
  registerForm.classList.add("is-hidden");
  loginError.classList.add("is-hidden");
  registerError.classList.add("is-hidden");
}

function showRegisterForm() {
  loginForm.classList.add("is-hidden");
  registerForm.classList.remove("is-hidden");
  loginError.classList.add("is-hidden");
  registerError.classList.add("is-hidden");
}

function updateAuthUI(username) {
  if (username) {
    btnAuth.classList.add("is-hidden");
    userMenu.classList.remove("is-hidden");
    userName.textContent = username;
    mobileBtnAuth.classList.add("is-hidden");
    mobileUserMenu.classList.remove("is-hidden");
    mobileUserName.textContent = username;
  } else {
    btnAuth.classList.remove("is-hidden");
    userMenu.classList.add("is-hidden");
    mobileBtnAuth.classList.remove("is-hidden");
    mobileUserMenu.classList.add("is-hidden");
  }
}

function showError(el, msg) {
  el.textContent = msg;
  el.classList.remove("is-hidden");
}

async function api(path, method, body) {
  const res = await fetch(path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

async function checkSession() {
  try {
    const data = await api("/api/me", "GET");
    if (data.username) {
      updateAuthUI(data.username);
    } else {
      updateAuthUI(null);
      showLoginForm();
      openAuth();
    }
  } catch {
    updateAuthUI(null);
    showLoginForm();
    openAuth();
  }
}

loginForm.addEventListener("submit", async e => {
  e.preventDefault();
  loginError.classList.add("is-hidden");
  const username = document.querySelector("#loginUsername").value;
  const password = document.querySelector("#loginPassword").value;
  try {
    const res = await api("/api/login", "POST", { username, password });
    if (res.error) {
      showError(loginError, res.error);
    } else {
      updateAuthUI(res.username);
      closeAuth();
    }
  } catch {
    showError(loginError, "Impossible de contacter le serveur.");
  }
});

registerForm.addEventListener("submit", async e => {
  e.preventDefault();
  registerError.classList.add("is-hidden");
  const username = document.querySelector("#registerUsername").value;
  const password = document.querySelector("#registerPassword").value;
  try {
    const res = await api("/api/register", "POST", { username, password });
    if (res.error) {
      showError(registerError, res.error);
    } else {
      updateAuthUI(res.username);
      closeAuth();
    }
  } catch {
    showError(registerError, "Impossible de contacter le serveur.");
  }
});

showRegister.addEventListener("click", e => {
  e.preventDefault();
  showRegisterForm();
});

showLogin.addEventListener("click", e => {
  e.preventDefault();
  showLoginForm();
});

btnAuth.addEventListener("click", () => {
  showLoginForm();
  openAuth();
});

mobileBtnAuth.addEventListener("click", () => {
  hamburger.classList.remove("is-active");
  overlay.classList.remove("is-open");
  showLoginForm();
  openAuth();
});

authClose.addEventListener("click", closeAuth);
authOverlay.addEventListener("click", e => {
  if (e.target === authOverlay) closeAuth();
});

async function logout() {
  try {
    await api("/api/logout", "POST");
  } catch {}
  updateAuthUI(null);
}

btnLogout.addEventListener("click", logout);
mobileBtnLogout.addEventListener("click", () => {
  hamburger.classList.remove("is-active");
  overlay.classList.remove("is-open");
  logout();
});

/* ── Close mobile menu on route change ── */

window.addEventListener("hashchange", () => {
  hamburger.classList.remove("is-active");
  overlay.classList.remove("is-open");
});

/* ── Init auth session ── */

checkSession();
