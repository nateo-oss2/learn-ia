const languages = [
  {
    name: 'HTML',
    category: 'Web',
    accent: '#e5484d',
    level: 'Debutant',
    intro: 'HTML est la structure d\'une page web. Il sert a placer les titres, paragraphes, images, liens, formulaires et sections.',
    why: 'C\'est le squelette du web. Sans HTML, CSS n\'a rien a styliser et JavaScript n\'a rien a rendre interactif.',
    build: 'Tu peux creer une page personnelle, un blog, une fiche produit ou une interface simple.',
    concepts: ['Balises', 'Attributs', 'Liens', 'Images', 'Formulaires'],
    code: '<h1>Mon premier projet</h1>\n<p>J\'apprends a structurer une page web.</p>',
    help: 'Ouvre un fichier .html dans VS Code, tape ! puis Enter pour generer la structure de base. Ajoute du contenu entre les balises <body>.',
    run: 'Double-clique sur le fichier .html ou glisse-le dans un navigateur pour voir le resultat.',
    basics: [
      {title: 'Les balises', text: 'Une balise HTML s\'ecrit entre < >. La plupart s\'ouvrent et se ferment.', code: '<p>Ceci est un paragraphe</p>'},
      {title: 'Les attributs', text: 'Un attribut donne des informations supplementaires a une balise.', code: '<a href="https://exemple.fr">Mon lien</a>'},
      {title: 'La structure d\'une page', text: 'Une page HTML a toujours un doctype, un <html>, un <head> et un <body>.', code: '<!DOCTYPE html>\n<html>\n<head><title>Ma page</title></head>\n<body>...</body>\n</html>'}
    ],
    examples: [
      {title: 'Afficher un message', desc: 'Utilise les balises h1 et p pour afficher un titre et un paragraphe.', code: '<h1>Bienvenue sur mon site</h1>\n<p>Je decouvre le HTML.</p>', explanation: ['h1 est une balise de titre de niveau 1 (le plus important)', 'p cree un paragraphe de texte', 'Les balises HTML s ecrivent entre chevrons < >', 'h1 ne doit etre utilise qu une fois par page pour le SEO', 'p est une balise bloc : elle occupe toute la largeur disponible']},
      {title: 'Creer un lien', desc: 'La balise a permet de creer un lien cliquable.', code: '<a href="https://google.com">Clique ici</a>', explanation: ['href est l attribut qui indique l URL de destination', 'Le texte entre <a> et </a> est affiche cliquable', 'a provient de anchor (ancre en anglais)', 'Les attributs s ecrivent dans la balise ouvrante', 'Tu peux ajouter target=_blank pour ouvrir dans un nouvel onglet']},
      {title: 'Creer un tableau', desc: 'Utilise <table>, <tr> et <td> pour afficher un tableau.', code: '<table border="1">\n  <tr><th>Nom</th><th>Age</th></tr>\n  <tr><td>Alice</td><td>17</td></tr>\n  <tr><td>Bob</td><td>22</td></tr>\n</table>', explanation: ['<table> definit un tableau', '<tr> cree une ligne', '<td> cree une cellule', '<th> cree une cellule entete', 'border="1" ajoute des bordures', 'Le tableau s\'adapte au contenu']}
    ],
    exercises: [
      {title: 'Ma premiere page', desc: 'Cree une page HTML avec un titre, un paragraphe et un lien.', hint: 'Utilise h1, p et a.', correction: '<!DOCTYPE html>\n<html>\n<head><title>Ma page</title></head>\n<body>\n  <h1>Bonjour</h1>\n  <p>Bienvenue sur ma page.</p>\n  <a href="https://example.com">Mon lien</a>\n</body>\n</html>'},
      {title: 'Ajouter une image', desc: 'Ajoute une image avec la balise img et un attribut src.', hint: 'N\'oublie pas l\'attribut alt.', correction: '<!DOCTYPE html>\n<html>\n<body>\n  <img src="photo.jpg" alt="Ma photo">\n</body>\n</html>'},
      {title: 'Formulaire de contact', desc: 'Cree un formulaire complet avec des champs nom, email, message et un bouton d envoi. Ajoute les attributs required et placeholder.', hint: 'Utilise <form>, <input>, <textarea> et <button>. Ajoute l attribut required sur les champs obligatoires.', correction: '<!DOCTYPE html>\n<html>\n<body>\n  <form>\n    <label>Nom: <input type=\"text\" name=\"nom\" required></label>\n    <label>Email: <input type=\"email\" name=\"email\" placeholder=\"exemple@mail.com\" required></label>\n    <label>Message: <textarea name=\"message\" rows=\"4\" required></textarea></label>\n    <button type=\"submit\">Envoyer</button>\n  </form>\n</body>\n</html>'},
      {title: 'Liste a puces organisee', desc: 'Cree une liste de tes langages preferes avec des liens.', hint: 'Utilise <ul>, <li> et <a> dans chaque <li>.', correction: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Mes langages preferes</h1>\n  <ul>\n    <li><a href="https://python.org">Python</a></li>\n    <li><a href="https://javascript.com">JavaScript</a></li>\n    <li><a href="https://ruby-lang.org">Ruby</a></li>\n  </ul>\n</body>\n</html>'}
    ],
    project: {desc: 'Cree une petite page de presentation personnelle avec un titre, une photo, une description et un lien.', steps: ['Ajoute un titre principal avec ton prenom', 'Ecris un paragraphe de presentation', 'Ajoute une image (balise img)', 'Ajoute un lien cliquable', 'Teste la page dans ton navigateur']},
    quiz: [
      {q: 'Que signifie HTML ?', options: ['HyperText Markup Language','High Tech Modern Language','Home Tool Markup Language'], answer: 0},
      {q: 'Quelle balise sert a creer un lien ?', options: ['<link>','<a>','<href>'], answer: 1},
      {q: 'Quelle balise affiche un titre de niveau 1 ?', options: ['<heading>','<h1>','<head>'], answer: 1},
      {q: 'Quel attribut definit l\'URL d\'un lien ?', options: ['src','link','href'], answer: 2},
      {q: 'Comment ecrit un commentaire en HTML ?', options: ['// commentaire','/* commentaire */','<!-- commentaire -->'], answer: 2},
      {q: 'Quelle balise cree un paragraphe ?', options: ['<p>','<par>','<text>'], answer: 0},
      {q: 'Quel attribut rend une image accessible ?', options: ['src','alt','title'], answer: 1},
      {q: 'Quelle balise est auto-fermante ?', options: ['<div>','<img>','<span>'], answer: 1},
      {q: 'Combien de niveaux de titres HTML ?', options: ['3','5','6'], answer: 2},
      {q: 'Quelle balise cree une liste numerotee ?', options: ['<ul>','<ol>','<li>'], answer: 1},
      {q: 'Quel attribut ouvre un lien dans un nouvel onglet ?', options: ['target="_blank"','href="new"','rel="external"'], answer: 0},
      {q: 'Quelle balise definit le pied de page ?', options: ['<footer>','<bottom>','<end>'], answer: 0},
      {q: 'Quel attribut rend un champ obligatoire ?', options: ['required','mandatory','force'], answer: 0},
      {q: 'Quelle balise insere un saut de ligne ?', options: ['<lb>','<br>','<nl>'], answer: 1},
      {q: 'Quel type d\'input cree une case a cocher ?', options: ['radio','checkbox','toggle'], answer: 1},
      {q: 'Quelle balise regroupe des elements ?', options: ['<group>','<div>','<box>'], answer: 1},
      {q: 'Quelle balise definit une cellule d\'en-tete ?', options: ['<td>','<th>','<thead>'], answer: 1},
      {q: 'Quel attribut definit la largeur d\'une image ?', options: ['size','width','dimension'], answer: 1},
      {q: 'Quelle balise cree une liste non ordonnee ?', options: ['<ol>','<ul>','<list>'], answer: 1},
      {q: 'Quel doctype est standard aujourd\'hui ?', options: ['<!DOCTYPE HTML>','<!DOCTYPE html>','<!DOCTYPE html5>'], answer: 1},
      {q: 'Quelle balise contient les metadonnees ?', options: ['<meta>','<head>','<data>'], answer: 1},
      {q: 'Quel attribut definit un style inline ?', options: ['css','style','design'], answer: 1},
      {q: 'Quelle balise cree un champ de saisie ?', options: ['<input>','<field>','<textbox>'], answer: 0},
      {q: 'Quel attribut definit l\'URL d\'une image ?', options: ['link','src','path'], answer: 1},
      {q: 'Combien de balises HTML de base existent ?', options: ['50+','100+','150+'], answer: 1},
    ],
  },
  {
    name: 'CSS',
    category: 'Web',
    accent: '#2563eb',
    level: 'Debutant',
    intro: 'CSS donne du style aux pages web : couleurs, tailles, espacements, grilles, animations et responsive.',
    why: 'CSS transforme une page simple en interface agreable et professionnelle.',
    build: 'Tu peux creer des cartes, menus, tableaux de bord, pages responsive et animations.',
    concepts: ['Selecteurs', 'Flexbox', 'Grid', 'Responsive', 'Transitions'],
    code: '.card {\n  padding: 20px;\n  border-radius: 8px;\n  background: white;\n}',
    help: 'Cree un fichier style.css et lie-le a ton HTML avec <link rel="stylesheet" href="style.css">. Les selecteurs ciblent les elements HTML.',
    run: 'Il suffit d\'actualiser la page HTML dans le navigateur. Les changements CSS sont visibles immediatement.',
    basics: [
      {title: 'Les selecteurs', text: 'Un selecteur cible les elements HTML a styliser.', code: 'h1 { color: blue; }'},
      {title: 'Les couleurs et fonds', text: 'Tu peux changer la couleur du texte et le fond des elements.', code: 'body { background: #f0f0f0; color: #333; }'},
      {title: 'Les marges et espacements', text: 'margin ajoute de l\'espace a l\'exterieur, padding a l\'interieur.', code: '.carte { margin: 20px; padding: 16px; }'}
    ],
    examples: [
      {title: 'Styliser un bouton', desc: 'Cree un bouton avec des coins arrondis et une ombre.', code: 'button {\n  background: #2563eb;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n}', explanation: ['background change la couleur de fond du bouton', 'border-radius arrondit les coins avec une valeur en pixels', 'padding ajoute de l\'espace interieur entre le texte et le bord', 'cursor: pointer change le curseur au survol', 'border: none supprime la bordure par defaut du bouton', 'color definit la couleur du texte']},
      {title: 'Centrer avec Flexbox', desc: 'Flexbox permet de centrer facilement un element.', code: '.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}', explanation: ['display: flex transforme le conteneur en mode Flexbox', 'justify-content centre les elements horizontalement', 'align-items centre les elements verticalement', 'height: 100vh prend toute la hauteur de la fenetre', 'vh signifie viewport height (hauteur de l ecran)', 'Flexbox est ideal pour centrer un element dans son parent']},
      {title: 'Animation au survol', desc: 'Cree une animation qui agrandit un element au survol.', code: '.carte {\n  width: 200px;\n  height: 200px;\n  background: #2563eb;\n  transition: transform 0.3s ease;\n}\n.carte:hover {\n  transform: scale(1.2);\n}', explanation: ['transition anime le changement', 'transform: scale() modifie la taille', ':hover declenche au survol', '0.3s est la duree', 'ease est la temporisation', 'transition anime plusieurs proprietes']}
    ],
    exercises: [
      {title: 'Carte stylisee', desc: 'Cree une carte avec un fond blanc, une ombre, des coins arrondis et un effet au survol.', hint: 'Utilise box-shadow, border-radius et :hover.', correction: '.carte {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  padding: 20px;\n  transition: transform 0.3s;\n}\n.carte:hover {\n  transform: scale(1.05);\n}'},
      {title: 'Page responsive', desc: 'Adapte ta page pour qu\'elle s\'affiche bien sur mobile avec une media query.', hint: 'Utilise @media (max-width: 600px).', correction: '@media (max-width: 600px) {\n  body { font-size: 14px; }\n  .menu { flex-direction: column; }\n  .carte { width: 100%; }\n}'},
      {title: 'Grille responsive avec Grid', desc: 'Cree une grille d images qui s adapte au nombre de colonnes selon la largeur de l ecran. Utilise CSS Grid avec auto-fill et minmax.', hint: 'Utilise display: grid, grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) et gap.', correction: '.grille {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.grille img {\n  width: 100%;\n  border-radius: 8px;\n  transition: transform 0.3s;\n}\n.grille img:hover {\n  transform: scale(1.05);\n}'},
      {title: 'Carte avec ombre et animation', desc: 'Cree une carte qui se souleve au survol.', hint: 'Utilise box-shadow et transform: translateY(-5px).', correction: '.carte {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  transition: all 0.3s ease;\n}\n.carte:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.2);\n}'}
    ],
    project: {desc: 'Concois une page d\'accueil simple avec une barre de navigation, une section hero et des cartes. Utilise Flexbox pour la mise en page et ajoute une transition au survol.', steps: ['Cree la structure HTML', 'Stylise la barre de navigation', 'Cree la section hero avec un fond colore', 'Ajoute des cartes avec Flexbox', 'Ajoute des animations au survol']},
    quiz: [
      {q: 'Comment applique une classe CSS ?', options: ['.maClasse','#maClasse','maClasse'], answer: 0},
      {q: 'Quelle propriete change la couleur du texte ?', options: ['background-color','color','text-color'], answer: 1},
      {q: 'Quelle propriete espace les elements avec Flexbox ?', options: ['margin','justify-content','gap'], answer: 2},
      {q: 'Quelle unite est relative a la taille de l\'ecran ?', options: ['px','em','vw'], answer: 2},
      {q: 'Comment appliquer un style au survol ?', options: [':click',':hover',':over'], answer: 1},
      {q: 'Quelle propriete change la taille du texte ?', options: ['font-size','text-size','size'], answer: 0},
      {q: 'Quelle valeur rend un element flexible ?', options: ['block','flex','grid'], answer: 1},
      {q: 'Quelle propriete ajoute un espace interieur ?', options: ['margin','padding','gap'], answer: 1},
      {q: 'Comment cible un ID en CSS ?', options: ['#id','.id','id'], answer: 0},
      {q: 'Quelle unite est relative a la police ?', options: ['px','em','vw'], answer: 1},
      {q: 'Quelle propriete centre un texte ?', options: ['align: center','text-align: center','center: true'], answer: 1},
      {q: 'Quelle propriete rend un element invisible ?', options: ['hidden: true','display: none','visibility: off'], answer: 1},
      {q: 'Quelle propriete change la police ?', options: ['font','font-family','typeface'], answer: 1},
      {q: 'Quelle propriete arrondit les coins ?', options: ['radius','border-radius','corner-round'], answer: 1},
      {q: 'Quelle propriete fixe une hauteur ?', options: ['height','max-height','size-y'], answer: 0},
      {q: 'Quelle valeur de position sort du flux ?', options: ['relative','absolute','static'], answer: 1},
      {q: 'Quelle propriete cree une ombre ?', options: ['shadow','box-shadow','drop-shadow'], answer: 1},
      {q: 'Quelle unite est relative a la taille de l\'ecran ?', options: ['em','rem','vh'], answer: 2},
      {q: 'Quelle propriete gere la hauteur de ligne ?', options: ['line-spacing','line-height','text-height'], answer: 1},
      {q: 'Quelle pseudo-classe cible le survol ?', options: [':hover',':over',':pointer'], answer: 0},
      {q: 'Quelle propriete gere l\'opacite ?', options: ['opacity','transparent','alpha'], answer: 0},
      {q: 'Quelle valeur de display cache l\'element ?', options: ['hidden','none','invisible'], answer: 1},
      {q: 'Quelle propriete definit une image de fond ?', options: ['background-img','background-image','bg-image'], answer: 1},
      {q: 'Quelle propriete espace les lettres ?', options: ['word-spacing','letter-spacing','char-spacing'], answer: 1},
      {q: 'Flexbox est pour des layouts ?', options: ['1D','2D','3D'], answer: 0},
    ],
  },
  {
    name: 'JavaScript',
    category: 'Web',
    accent: '#f5b700',
    level: 'Essentiel',
    intro: 'JavaScript rend les pages interactives avec des clics, animations, formulaires et donnees dynamiques.',
    why: 'C\'est le langage ideal pour passer d\'une page statique a une vraie application.',
    build: 'Tu peux creer un quiz, une todo-list, un jeu simple ou une app connectee a une API.',
    concepts: ['Variables', 'Fonctions', 'DOM', 'Evenements', 'Tableaux'],
    code: 'button.addEventListener("click", () => {\n  alert("Bravo !");\n});',
    help: 'Ouvre la console du navigateur (F12 > Console) pour voir les logs. Utilise console.log() pour deboguer.',
    run: 'Ajoute <script src="script.js"></script> dans ton HTML ou ecris le code directement dans une balise <script>. Actualise la page pour executer.',
    basics: [
      {title: 'Les variables', text: 'Une variable stocke une valeur (texte, nombre, tableau...).', code: 'let prenom = "Alice";\nlet age = 17;'},
      {title: 'Les fonctions', text: 'Une fonction regroupe des instructions pour les reutiliser.', code: 'function direBonjour() {\n  console.log("Bonjour !");\n}'},
      {title: 'Les evenements', text: 'Tu peux reagir a un clic, un survol ou une soumission de formulaire.', code: 'button.addEventListener("click", function() {\n  alert("Clique !");\n});'}
    ],
    examples: [
      {title: 'Calculer une somme', desc: 'Cree une fonction qui additionne deux nombres.', code: 'function addition(a, b) {\n  return a + b;\n}\nconsole.log(addition(3, 5));', explanation: ['function definit une fonction reutilisable', 'return renvoie la valeur calculee a l appelant', 'console.log() affiche le resultat dans la console du navigateur', 'les parametres a et b recoivent les valeurs passees a l appel', 'les accolades { } delimitent le corps de la fonction', 'Ouvre F12 > Console pour voir le resultat']},
      {title: 'Manipuler un tableau', desc: 'Parcours un tableau et affiche chaque element.', code: 'let fruits = ["Pomme", "Banane", "Orange"];\nfruits.forEach(function(fruit) {\n  console.log(fruit);\n});', explanation: ['forEach est une methode qui parcourt chaque element du tableau', 'fruit contient la valeur de l element courant a chaque iteration', 'La fonction anonyme function(fruit) est executee pour chaque element', 'Les tableaux se declarent avec des crochets [ ]', 'forEach est plus lisible qu une boucle for classique', 'Tu peux aussi utiliser map() ou filter() pour manipuler les tableaux']},
      {title: 'Ajouter un element au DOM', desc: 'Cree un paragraphe et l\'ajoute a la page.', code: 'let nouveau = document.createElement("p");\nnouveau.textContent = "Ajoute dynamiquement!";\ndocument.body.appendChild(nouveau);', explanation: ['createElement cree un element', 'textContent definit le texte', 'appendChild ajoute a la fin', 'Les elements crees en memoire', 'insertBefore ou prepend aussi', 'DOM = HTML manipulable en JS']}
    ],
    exercises: [
      {title: 'Compteur de clics', desc: 'Cree un bouton qui affiche le nombre de clics.', hint: 'Utilise une variable let pour compter et textContent pour mettre a jour l\'affichage.', correction: 'let compteur = 0;\nconst bouton = document.getElementById("monBouton");\nbouton.addEventListener("click", function() {\n  compteur++;\n  bouton.textContent = "Clics: " + compteur;\n});'},
      {title: 'Liste dynamique', desc: 'Cree un champ texte et un bouton pour ajouter des elements a une liste.', hint: 'Utilise createElement et appendChild.', correction: 'const input = document.getElementById("tache");\nconst liste = document.getElementById("liste");\ndocument.getElementById("ajouter").addEventListener("click", function() {\n  const li = document.createElement("li");\n  li.textContent = input.value;\n  liste.appendChild(li);\n  input.value = "";\n});'},
      {title: 'Mini jeu de devinettes', desc: 'Cree un jeu ou l ordinateur choisit un nombre aleatoire entre 1 et 100 et l utilisateur doit le deviner avec des indices.', hint: 'Utilise Math.random(), Math.floor(), une boucle while ou une fonction recursive et prompt() ou un champ input.', correction: 'let nombre = Math.floor(Math.random() * 100) + 1;\nlet tentative;\nlet essais = 0;\nwhile (tentative !== nombre) {\n  tentative = parseInt(prompt(\"Devine le nombre (1-100) :\"));\n  essais++;\n  if (tentative < nombre) alert(\"Plus grand !\");\n  else if (tentative > nombre) alert(\"Plus petit !\");\n}\nalert(\"Bravo ! Tu as trouve en \" + essais + \" essais.\");'},
      {title: 'Filtrer un tableau', desc: 'Garde les nombres superieurs a 10 avec filter().', hint: 'Utilise nombres.filter(n => n > 10).', correction: 'const nombres = [5, 12, 8, 15, 3, 20];\nconst grands = nombres.filter(n => n > 10);\nconsole.log("Nombres > 10:", grands);'}
    ],
    project: {desc: 'Cree une Todo List interactive : un champ pour entrer une tache, un bouton pour l\'ajouter, et un clic sur une tache la marque comme terminee.', steps: ['Cree l\'interface HTML', 'Ajoute un ecouteur sur le bouton', 'Cree un element pour chaque tache', 'Ajoute la fonction supprimer', 'Teste et ameliore le design']},
    quiz: [
      {q: 'Comment declare une constante en JS ?', options: ['var x = 5','let x = 5','const x = 5'], answer: 2},
      {q: 'Quelle methode ajoute un element a la fin d\'un tableau ?', options: ['push()','pop()','shift()'], answer: 0},
      {q: 'Comment ecrire dans la console ?', options: ['print()','echo()','console.log()'], answer: 2},
      {q: 'Quelle boucle parcourt un tableau ?', options: ['for','if','switch'], answer: 0},
      {q: 'Quelle fonction convertit JSON en objet JS ?', options: ['JSON.stringify()','JSON.parse()','JSON.object()'], answer: 1},
      {q: 'Quelle methode supprime le dernier element ?', options: ['push()','pop()','shift()'], answer: 1},
      {q: 'Comment ecrire une condition ?', options: ['if','when','for'], answer: 0},
      {q: 'Quel mot-cle cree une fonction ?', options: ['func','function','def'], answer: 1},
      {q: 'Quelle methode convertit en JSON ?', options: ['parse()','stringify()','toString()'], answer: 1},
      {q: 'Quel operateur compare valeur ET type ?', options: ['==','===','='], answer: 1},
      {q: 'Quelle methode ajoute un element au debut ?', options: ['push()','unshift()','addFirst()'], answer: 1},
      {q: 'Quel mot-cle cree une variable mutable ?', options: ['const','let','static'], answer: 1},
      {q: 'Quelle methode supprime le premier element ?', options: ['pop()','shift()','removeFirst()'], answer: 1},
      {q: 'Quel evenement se produit au clic ?', options: ['onclick','onhover','onpress'], answer: 0},
      {q: 'Quelle fonction cree un delai ?', options: ['delay()','setTimeout()','wait()'], answer: 1},
      {q: 'Quelle methode fusionne des tableaux ?', options: ['merge()','concat()','join()'], answer: 1},
      {q: 'Quel type est un objet ?', options: ['object','dictionary','map'], answer: 0},
      {q: 'Quelle methode convertit en nombre ?', options: ['toInt()','Number()','parseInt()'], answer: 1},
      {q: 'Quel evenement ecoute le clavier ?', options: ['keypress','keydown','les deux'], answer: 2},
      {q: 'Quelle boucle execute au moins une fois ?', options: ['for','while','do-while'], answer: 2},
      {q: 'Quel operateur signifie ET logique ?', options: ['||','&&','!!'], answer: 1},
      {q: 'Quelle fonction arrete l\'execution ?', options: ['stop()','return','break'], answer: 2},
      {q: 'Quel type de donnees est \'true\' ?', options: ['boolean','string','bool'], answer: 1},
      {q: 'Quel mot-cle cree un objet ?', options: ['{}','[]','new Object()'], answer: 2},
      {q: 'Quelle methode supprime un element ?', options: ['delete','remove()','splice()'], answer: 2},
    ],
  },
  {
    name: 'TypeScript',
    category: 'Web',
    accent: '#3178c6',
    level: 'Essentiel',
    intro: 'TypeScript est du JavaScript avec des types. Il permet d\'ecrire du code plus sur et plus facile a maintenir.',
    why: 'Les types detectent les erreurs avant meme d\'executer le code.',
    build: 'Tu peux creer une app React typee, une API, un jeu ou un outil en ligne de commande.',
    concepts: ['Types', 'Interfaces', 'Fonctions typees', 'Generiques', 'Enums'],
    code: 'type User = {\n  name: string;\n  points: number;\n};',
    help: 'Installe TypeScript avec npm install -g typescript. Compile avec tsc fichier.ts. Les erreurs de type apparaissent a la compilation.',
    run: 'Cree un fichier .ts et compile-le avec tsc. Le resultat est un fichier .js que tu peux executer normalement.',
    basics: [
      {title: 'Les types', text: 'TypeScript permet de definir le type des variables pour eviter les erreurs.', code: 'let prenom: string = "Alice";\nlet age: number = 17;'},
      {title: 'Les interfaces', text: 'Une interface definit la structure d\'un objet.', code: 'interface Personne {\n  nom: string;\n  age: number;\n}'},
      {title: 'Les fonctions typees', text: 'Tu peux definir le type des parametres et de la valeur de retour.', code: 'function addition(a: number, b: number): number {\n  return a + b;\n}'}
    ],
    examples: [
      {title: 'Objet type', desc: 'Cree un objet avec une interface et utilise-le.', code: 'interface Produit {\n  nom: string;\n  prix: number;\n}\nconst pomme: Produit = { nom: "Pomme", prix: 1.5 };\nconsole.log(pomme.nom);', explanation: ['interface definit la structure et les types attends d\'un objet', 'Les proprietes doivent obligatoirement correspondre a l\'interface declaree', ': string et : number specifient le type de chaque champ', 'const cree une constante qui ne peut pas etre reassignee', 'TypeScript verifie les types a la compilation, pas a l\'execution', 'Les interfaces commencent par convention par une majuscule']},
      {title: 'Fonction avec types', desc: 'Cree une fonction qui additionne deux nombres types.', code: 'function addition(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(addition(3, 5));', explanation: [': number apres a et b specifie le type des parametres', ': number apres les parentheses declare le type de retour', 'TypeScript verifie que les arguments passes sont bien des nombres', 'Le code compile en JavaScript sans les annotations de type', 'Les types permettent de detecter les erreurs avant l execution', 'Tu peux utiliser des types plus complexes comme string, boolean, void']},
      {title: 'Union types et type guard', desc: 'Fonction qui accepte string ou number avec type guard.', code: 'function afficher(valeur: string | number) {\n  if (typeof valeur === "string") {\n    console.log("Texte: " + valeur.toUpperCase());\n  } else {\n    console.log("Nombre: " + (valeur * 2));\n  }\n}\nafficher("bonjour");\nafficher(21);', explanation: ['string | number est un type union', 'typeof verifie le type a l\'execution', 'toUpperCase() sur les strings', 'Operations sur les nombres', 'TypeScript deduit le type par branche', 'Les unions offrent flexibilite typee']}
    ],
    exercises: [
      {title: 'Interface produit', desc: 'Cree une interface Produit avec un nom, un prix et une quantite.', hint: 'Declare chaque champ avec son type.', correction: 'interface Produit {\n  nom: string;\n  prix: number;\n  quantite: number;\n}\nconst article: Produit = { nom: "Livre", prix: 12.99, quantite: 3 };\nconsole.log(article);'},
      {title: 'Fonction typee', desc: 'Cree une fonction qui prend un tableau de nombres et retourne leur somme.', hint: 'Utilise number[] pour un tableau de nombres.', correction: 'function somme(nombres: number[]): number {\n  return nombres.reduce((a, b) => a + b, 0);\n}\nconsole.log(somme([1, 2, 3, 4, 5]));'},
      {title: 'Generique de fonction', desc: 'Cree une fonction generique qui prend un tableau d elements et retourne le premier element. Utilise les generiques TypeScript pour que le type de retour corresponde au type d entree.', hint: 'Utilise <T> avant les parentheses de la fonction et le type T pour le parametre et le retour.', correction: 'function premier<T>(tableau: T[]): T | undefined {\n  return tableau[0];\n}\n\nconst premierNombre = premier([1, 2, 3]);\nconst premierMot = premier([\"a\", \"b\", \"c\"]);\nconsole.log(premierNombre, premierMot);'},
      {title: 'Enum et switch', desc: 'Cree un enum des jours et une fonction qui retourne weekend ou travaille.', hint: 'Utilise enum Day puis switch.', correction: 'enum Day { Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche }\n\nfunction typeDeJour(day: Day): string {\n  switch (day) {\n    case Day.Samedi: case Day.Dimanche: return "Weekend";\n    default: return "Jour travaille";\n  }\n}\nconsole.log(typeDeJour(Day.Lundi));'}
    ],
    project: {desc: 'Cree un petit gestionnaire de taches type : chaque tache a un titre, un statut (completee ou non) et une priorite. Ajoute, supprime et filtre les taches.', steps: ['Definis les types Task et Priority', 'Cree un tableau de taches type', 'Ajoute une fonction pour ajouter une tache', 'Ajoute une fonction pour filtrer', 'Teste le tout dans la console']},
    quiz: [
      {q: 'Quel est le type d\'une variable qui peut etre string ou number ?', options: ['any','union','string &#124; number'], answer: 2},
      {q: 'Comment definit un type personnalise ?', options: ['class','type','interface'], answer: 2},
      {q: 'Quel symbole rend une propriete optionnelle ?', options: ['?','!','*'], answer: 0},
      {q: 'Que fait le compilateur TypeScript ?', options: ['Execute du code','Traduit TS en JS','Optimise les images'], answer: 1},
      {q: 'Quel type represente rien dans une fonction ?', options: ['null','undefined','void'], answer: 2},
      {q: 'Quel type est un nombre ?', options: ['num','number','int'], answer: 1},
      {q: 'Quel mot-cle empeche la reassignation ?', options: ['const','let','var'], answer: 0},
      {q: 'Quel type prend true/false ?', options: ['bit','boolean','bool'], answer: 1},
      {q: 'Quelle syntaxe est un generique ?', options: ['<T>','T[]','T?'], answer: 0},
      {q: 'Quel type est un tableau ?', options: ['array','[]','Array<T>'], answer: 2},
      {q: 'Quel type est un tableau de nombres ?', options: ['number[]','Array<number>','les deux'], answer: 2},
      {q: 'Quel mot-cle cree un alias de type ?', options: ['type','interface','alias'], answer: 0},
      {q: 'Quel symbole rend un parametre optionnel ?', options: ['?','!','*'], answer: 0},
      {q: 'Quel type est une fonction sans retour ?', options: ['void','undefined','null'], answer: 0},
      {q: 'Quel mot-cle empeche l\'heritage ?', options: ['final','sealed','readonly'], answer: 0},
      {q: 'Quelle assertion force un type ?', options: ['as','is','typeof'], answer: 0},
      {q: 'Quel type accepte plusieurs types ?', options: ['any','union','mixed'], answer: 1},
      {q: 'Quel type est un tuple ?', options: ['[string, number]','string[]','Array'], answer: 0},
      {q: 'Quel mot-cle cree une enumeration ?', options: ['enum','const','type'], answer: 0},
      {q: 'Quel symbole importe un module ?', options: ['import','require','include'], answer: 0},
      {q: 'Quel mot-cle exporte par defaut ?', options: ['export','export default','default export'], answer: 1},
      {q: 'Quel type est un objet avec des cles fixes ?', options: ['Record','Map','interface'], answer: 2},
      {q: 'Quel operateur verifie le type ?', options: ['typeof','instanceof','is'], answer: 0},
      {q: 'Quel mot-cle cree une classe abstraite ?', options: ['abstract','virtual','base'], answer: 0},
      {q: 'Quel fichier contient la config TS ?', options: ['tsconfig.json','typescript.json','config.ts'], answer: 0},
    ],
  },
  {
    name: 'Python',
    category: 'Donnees',
    accent: '#16a34a',
    level: 'Debutant',
    intro: 'Python est un langage polyvalent et simple a lire, ideal pour l\'analyse de donnees, le web et l\'automatisation.',
    why: 'Sa syntaxe claire en fait le meilleur langage pour commencer la programmation.',
    build: 'Tu peux creer un analyseur de donnees, un bot, un site web ou un script d\'automatisation.',
    concepts: ['Variables', 'Fonctions', 'Listes', 'Conditions', 'Boucles'],
    code: 'print("Bonjour Python")\nprint("Les variables n\'ont pas de type explicite")',
    help: 'Installe Python sur python.org. Execute python3 mon_fichier.py dans le terminal. Utilise print() pour afficher.',
    run: 'Cree un fichier .py et execute python3 fichier.py dans le terminal. Les resultats s\'affichent dans la console.',
    basics: [
      {title: 'Les variables', text: 'Python n\'a pas besoin de type explicite. On assigne directement.', code: 'prenom = "Alice"\nage = 17'},
      {title: 'Les fonctions', text: 'Une fonction se definit avec def et le code est indent.', code: 'def saluer(nom):\n    print("Bonjour", nom)'},
      {title: 'Les listes', text: 'Une liste stocke plusieurs valeurs dans l\'ordre.', code: 'fruits = ["Pomme", "Banane", "Orange"]\nprint(fruits[0])'}
    ],
    examples: [
      {title: 'Calculer une somme', desc: 'Cree une fonction qui additionne deux nombres.', code: 'def addition(a, b):\n    return a + b\n\nprint(addition(3, 5))', explanation: ['def est le mot-cle pour definir une fonction en Python', 'return renvoie le resultat a l\'appelant', 'L\'indentation (4 espaces) est obligatoire en Python', 'Les parametres a et b n\'ont pas de type declare', 'print() affiche le resultat dans le terminal', 'Python execute le code ligne par ligne de haut en bas']},
      {title: 'Parcourir une liste', desc: 'Utilise une boucle for pour afficher chaque element.', code: 'fruits = ["Pomme", "Banane", "Orange"]\nfor fruit in fruits:\n    print(fruit)', explanation: ['for parcourt chaque element de la liste un par un', 'fruit prend successivement chaque valeur du tableau', 'Les listes se declarent avec des crochets [ ]', 'Le bloc sous for est indentee (obligatoire en Python)', 'range() permet de creer des sequences numeriques', 'len() donne la taille d une liste']},
      {title: 'Lire et ecrire un fichier', desc: 'Ouvre un fichier, lit et ecrit une ligne supplementaire.', code: 'with open("exemple.txt", "r") as f:\n    contenu = f.read()\nprint("Contenu lu:", contenu)\n\nwith open("exemple.txt", "a") as f:\n    f.write("Nouvelle ligne\\n")', explanation: ['with open() gere la fermeture', '"r" mode lecture, "a" mode ajout', 'f.read() lit tout le fichier', 'f.write() ecrit dans le fichier', '\\n ajoute un retour a la ligne', 'Le bloc indent est le contexte']}
    ],
    exercises: [
      {title: 'Pair ou impair', desc: 'Ecris un programme qui demande un nombre et affiche s\'il est pair ou impair.', hint: 'Utilise le modulo % pour verifier le reste de la division par 2.', correction: 'nombre = int(input("Donne un nombre: "))\nif nombre % 2 == 0:\n    print("Pair")\nelse:\n    print("Impair")'},
      {title: 'Table de multiplication', desc: 'Affiche la table de multiplication d\'un nombre choisi par l\'utilisateur.', hint: 'Utilise une boucle for de 1 a 10.', correction: 'n = int(input("Table de: "))\nfor i in range(1, 11):\n    print(n, "x", i, "=", n * i)'},
      {title: 'Gestionnaire de taches JSON', desc: 'Cree un programme qui lit une liste de taches depuis un fichier JSON, permet d en ajouter une, et sauvegarde le fichier. Les taches ont un titre et un statut (faire ou terminee).', hint: 'Utilise les modules json et os. json.load() lit, json.dump() ecrit. Une tache est un dictionnaire.', correction: 'import json\nimport os\n\nfichier = \"taches.json\"\nif os.path.exists(fichier):\n    with open(fichier) as f:\n        taches = json.load(f)\nelse:\n    taches = []\n\ntaches.append({"titre": "Apprendre Python", "statut": "faire"})\n\nwith open(fichier, "w") as f:\n    json.dump(taches, f, indent=2)\n\nprint("Tache ajoutee !")'},
      {title: 'Compteur de mots', desc: 'Compte le nombre de mots dans une phrase.', hint: 'Utilise split() et len().', correction: 'phrase = input("Ecris une phrase: ")\nmots = phrase.split()\nprint(f"Nombre de mots: {len(mots)}")\nfor mot in mots:\n    print("-", mot)'}
    ],
    project: {desc: 'Cree un programme qui lit un fichier CSV de notes d\'eleves et calcule la moyenne, la note la plus haute et la plus basse.', steps: ['Cree un fichier notes.csv avec des noms et notes', 'Lis le fichier avec Python', 'Calcule la moyenne de chaque eleve', 'Trouve le meilleur et le moins bon', 'Affiche les resultats dans le terminal']},
    quiz: [
      {q: 'Comment afficher du texte en Python ?', options: ['echo','print()','console.log()'], answer: 1},
      {q: 'Comment definit une fonction ?', options: ['function','def','func'], answer: 1},
      {q: 'Quel type de boucle parcourt une liste ?', options: ['for','while','do'], answer: 0},
      {q: 'Comment commenter une ligne en Python ?', options: ['//','/*','#'], answer: 2},
      {q: 'Quelle structure de donnee est modifiable ?', options: ['tuple','str','list'], answer: 2},
      {q: 'Quel type est 3.14 ?', options: ['int','float','decimal'], answer: 1},
      {q: 'Quel mot-cle cree une boucle conditionnelle ?', options: ['for','while','loop'], answer: 1},
      {q: 'Quelle structure stocke des paires cle-valeur ?', options: ['list','tuple','dict'], answer: 2},
      {q: 'Quel symbole cree une liste en compréhension ?', options: ['[]','{}','()'], answer: 0},
      {q: 'Quelle fonction donne la longueur ?', options: ['size()','len()','length()'], answer: 1},
      {q: 'Quelle fonction convertit en entier ?', options: ['int()','integer()','toInt()'], answer: 0},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','struct','def'], answer: 0},
      {q: 'Quelle structure est immutable ?', options: ['list','tuple','set'], answer: 1},
      {q: 'Quel operateur teste l\'egalite ?', options: ['==','=','==='], answer: 0},
      {q: 'Quelle fonction lit un fichier ?', options: ['read()','open()','load()'], answer: 1},
      {q: 'Quel mot-cle capture une erreur ?', options: ['catch','except','error'], answer: 1},
      {q: 'Quelle librairie fait des calculs ?', options: ['math','calc','numbers'], answer: 0},
      {q: 'Quel type est un nombre decimal ?', options: ['float','double','decimal'], answer: 0},
      {q: 'Quelle fonction affiche ?', options: ['echo','print()','log()'], answer: 1},
      {q: 'Quel symbole est un commentaire ?', options: ['//','#','/*'], answer: 1},
      {q: 'Quelle structure est un ensemble ?', options: ['tuple','set','dict'], answer: 1},
      {q: 'Quel mot-cle cree une fonction ?', options: ['function','def','lambda'], answer: 1},
      {q: 'Quel operateur concatene des listes ?', options: ['+','*','&'], answer: 0},
      {q: 'Quelle fonction donne le type ?', options: ['typeof()','type()','isinstance()'], answer: 1},
      {q: 'Quelle boucle parcourt un dictionnaire ?', options: ['for key in dict','while','foreach'], answer: 0},
    ],
  },
  {
    name: 'Java',
    category: 'Applications',
    accent: '#ed8b00',
    level: 'Essentiel',
    intro: 'Java est un langage robuste utilise dans les entreprises, Android et les serveurs.',
    why: 'Sa machine virtuelle (JVM) permet d\'executer le meme code sur n\'importe quel systeme.',
    build: 'Tu peux creer une application Android, une API REST, un jeu ou un outil desktop.',
    concepts: ['Classes', 'Methodes', 'Conditions', 'Tableaux', 'Heritage'],
    code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Bonjour Java");\n  }\n}',
    help: 'Installe le JDK. Compile avec javac Main.java, execute avec java Main. Tout programme a besoin d\'une classe avec un main().',
    run: 'Cree un fichier Main.java, compile-le avec javac, puis execute avec java. La JVM gere la memoire automatiquement.',
    basics: [
      {title: 'Les classes', text: 'En Java, tout programme commence par une classe.', code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Bonjour");\n  }\n}'},
      {title: 'Les variables', text: 'Les variables ont un type qu\'on doit declarer.', code: 'String prenom = "Alice";\nint age = 17;'},
      {title: 'Les conditions', text: 'if/else fonctionne comme dans la plupart des langages.', code: 'if (age >= 18) {\n  System.out.println("Majeur");\n} else {\n  System.out.println("Mineur");\n}'}
    ],
    examples: [
      {title: 'Calculer une somme', desc: 'Cree une methode qui additionne deux entiers.', code: 'public class Main {\n  public static int addition(int a, int b) {\n    return a + b;\n  }\n  public static void main(String[] args) {\n    System.out.println(addition(3, 5));\n  }\n}', explanation: ['static permet d\'appeler la methode sans creer d\'objet de la classe', 'int est le type de retour : la methode renvoie un entier', 'public rend la methode accessible depuis l\'exterieur', 'La classe Main est le point d\'entree du programme', 'System.out.println() affiche un resultat dans la console', 'Les accolades { } definissent le corps de la methode']},
      {title: 'Parcourir un tableau', desc: 'Utilise une boucle pour afficher chaque element.', code: 'int[] notes = {12, 15, 18};\nfor (int note : notes) {\n  System.out.println(note);\n}', explanation: ['int[] declare un tableau d\'entiers', 'La boucle for-each (for (int note : notes)) parcourt chaque element', 'note prend la valeur de chaque element un par un', 'Les tableaux en Java ont une taille fixe', 'System.out.println() affiche chaque valeur', 'Les indices d\'un tableau commencent a 0']},
      {title: 'Tableau a deux dimensions', desc: 'Cree une matrice 3x3 avec des boucles imbriquees.', code: 'int[][] matrice = {\n  {1, 2, 3},\n  {4, 5, 6},\n  {7, 8, 9}\n};\nfor (int i = 0; i < matrice.length; i++) {\n  for (int j = 0; j < matrice[i].length; j++) {\n    System.out.print(matrice[i][j] + " ");\n  }\n  System.out.println();\n}', explanation: ['int[][] tableau 2 dimensions', 'matrice.length = nombre de lignes', 'matrice[i].length = colonnes', 'Boucle externe pour les lignes', 'Boucle interne pour les colonnes', 'print() sans retour a la ligne']}
    ],
    exercises: [
      {title: 'Verifier l\'age', desc: 'Ecris un programme qui verifie si une personne peut voter (18 ans ou plus).', hint: 'Utilise if/else avec un entier.', correction: 'public class Main {\n  public static void main(String[] args) {\n    int age = 16;\n    if (age >= 18) {\n      System.out.println("Tu peux voter");\n    } else {\n      System.out.println("Trop jeune");\n    }\n  }\n}'},
      {title: 'Moyenne de notes', desc: 'Cree un tableau de notes et calcule la moyenne.', hint: 'Additionne les notes dans une boucle, puis divise par la longueur.', correction: 'public class Main {\n  public static void main(String[] args) {\n    int[] notes = {12, 15, 18, 10, 14};\n    int somme = 0;\n    for (int n : notes) somme += n;\n    double moyenne = (double) somme / notes.length;\n    System.out.println("Moyenne: " + moyenne);\n  }\n}'},
      {title: 'Classe Personne orientee objet', desc: 'Cree une classe Personne avec un nom et un age. Ajoute un constructeur, des getters, et une methode afficher(). Dans le main, cree un tableau de personnes et affiche-les.', hint: 'Utilise une class, un constructeur public Personne(String nom, int age), et une boucle for pour parcourir le tableau.', correction: 'class Personne {\n  private String nom;\n  private int age;\n\n  public Personne(String nom, int age) {\n    this.nom = nom;\n    this.age = age;\n  }\n\n  public void afficher() {\n    System.out.println(nom + " a " + age + " ans");\n  }\n\n  public static void main(String[] args) {\n    Personne[] gens = {new Personne("Alice", 17), new Personne("Bob", 22)};\n    for (Personne p : gens) p.afficher();\n  }\n}'},
      {title: 'Recherche dans un tableau', desc: 'Trouve l index d un nombre dans un tableau.', hint: 'Boucle for avec if.', correction: 'public class Main {\n  public static void main(String[] args) {\n    int[] nombres = {5, 12, 8, 15, 3};\n    int cible = 8;\n    int index = -1;\n    for (int i = 0; i < nombres.length; i++) {\n      if (nombres[i] == cible) { index = i; break; }\n    }\n    System.out.println("Index: " + index);\n  }\n}'}
    ],
    project: {desc: 'Cree une calculatrice simple en Java : demande deux nombres et un operateur, puis effectue le calcul et affiche le resultat.', steps: ['Cree la classe Calculatrice', 'Ajoute une methode pour additionner', 'Ajoute une methode pour soustraire', 'Ajoute une methode pour multiplier/diviser', 'Utilise Scanner pour lire l\'entree utilisateur', 'Affiche le resultat dans la console']},
    quiz: [
      {q: 'Que doit contenir tout programme Java ?', options: ['function main()','void main()','public static void main(String[] args)'], answer: 2},
      {q: 'Quel mot-cle cree un objet ?', options: ['object','new','create'], answer: 1},
      {q: 'Java est un langage...', options: ['compile','interprete','compile et interprete'], answer: 2},
      {q: 'Quelle structure herite d\'une classe ?', options: ['extends','implements','inherits'], answer: 0},
      {q: 'Quel type est un entier en Java ?', options: ['integer','int','Int'], answer: 1},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','struct','type'], answer: 0},
      {q: 'Quel type est un decimal en Java ?', options: ['float','double','decimal'], answer: 1},
      {q: 'Quelle collection est une liste ordonnee ?', options: ['Set','Map','ArrayList'], answer: 2},
      {q: 'Quel modificateur rend une methode accessible partout ?', options: ['private','protected','public'], answer: 2},
      {q: 'Que signifie JVM ?', options: ['Java Virtual Machine','Java Visual Model','Java Version Manager'], answer: 0},
      {q: 'Quel mot-cle cree un tableau ?', options: ['new int[]','int[]','Array<int>'], answer: 1},
      {q: 'Quel type stocke un seul caractere ?', options: ['char','string','character'], answer: 0},
      {q: 'Quelle annotation remplace getters ?', options: ['@Data','@Getter','@Lombok'], answer: 0},
      {q: 'Quel mot-cle empeche la modification ?', options: ['static','final','const'], answer: 1},
      {q: 'Quelle interface represente une liste ?', options: ['Set','Map','List'], answer: 2},
      {q: 'Quel mot-cle indique l\'heritage ?', options: ['implements','extends','inherits'], answer: 1},
      {q: 'Quel package contient les collections ?', options: ['java.util','java.io','java.lang'], answer: 0},
      {q: 'Quelle exception est unchecked ?', options: ['IOException','NullPointerException','SQLException'], answer: 1},
      {q: 'Quel mot-cle cree un thread ?', options: ['thread','extends Thread','new Thread'], answer: 1},
      {q: 'Quel design pattern est un singleton ?', options: ['Une seule instance','Plusieurs instances','Aucune instance'], answer: 0},
      {q: 'Quel type est un entier long ?', options: ['long','Long','int64'], answer: 0},
      {q: 'Quel mot-cle arrete une boucle ?', options: ['stop','break','exit'], answer: 1},
      {q: 'Quelle collection ne contient pas de doublons ?', options: ['List','Set','Map'], answer: 1},
      {q: 'Quel mot-cle cree une interface ?', options: ['interface','abstract','trait'], answer: 0},
      {q: 'Quel type est un octet ?', options: ['byte','char','short'], answer: 0},
    ],
  },
  {
    name: 'C',
    category: 'Systeme',
    accent: '#555555',
    level: 'Avance',
    intro: 'C est un langage proche de la machine, utilise pour les systemes d\'exploitation, les drivers et l\'embarque.',
    why: 'Il te force a gerer la memoire toi-meme et te donne un controle total.',
    build: 'Tu peux creer un mini-systeme, un jeu en console ou un editeur de texte.',
    concepts: ['Pointeurs', 'Memoire', 'Structures', 'Fichiers', 'Tableaux'],
    code: '#include <stdio.h>\n\nint main(void) {\n  printf("Bonjour C");\n  return 0;\n}',
    help: 'Installe GCC (Xcode sur Mac, MinGW sur Windows). Compile avec gcc main.c -o main, execute avec ./main.',
    run: 'Cree un fichier .c, compile-le avec gcc, puis execute le binaire produit. N\'oublie pas #include <stdio.h> pour printf.',
    basics: [
      {title: 'Structure de base', text: 'Un programme C commence par #include <stdio.h> et la fonction main.', code: '#include <stdio.h>\n\nint main() {\n  printf("Bonjour");\n  return 0;\n}'},
      {title: 'Les variables', text: 'On declare une variable avec son type (int, char, float...).', code: 'int age = 17;\nchar prenom[] = "Alice";'},
      {title: 'Les pointeurs', text: 'Un pointeur stocke l\'adresse memoire d\'une variable.', code: 'int x = 10;\nint* ptr = &x;\nprintf("%d", *ptr);'}
    ],
    examples: [
      {title: 'Afficher une variable', desc: 'Declare une variable et affiche sa valeur.', code: '#include <stdio.h>\n\nint main() {\n  int age = 17;\n  printf("Age: %d", age);\n  return 0;\n}', explanation: ['%d est le format specifiant un entier decimal dans printf', 'age est passe en second argument pour remplacer %d', 'La virgule separe le format des valeurs a afficher', '#include <stdio.h> est necessaire pour utiliser printf', 'int age = 17 declare une variable entiere', 'return 0 termine le programme avec succes']},
      {title: 'Boucle for', desc: 'Affiche les nombres de 1 a 5.', code: '#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 5; i++) {\n    printf("%d\\n", i);\n  }\n  return 0;\n}', explanation: ['for se compose de trois parties : initialisation ; condition ; incrementation', 'int i = 1 initialise le compteur a 1', 'i <= 5 est la condition qui maintient la boucle active', 'i++ incremente le compteur de 1 a chaque tour', 'Les accolades { } entourent le bloc a repeter', '\n dans printf ajoute un retour a la ligne']},
      {title: 'Structure et typedef', desc: 'Cree une structure Personne et affiche ses membres.', code: '#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n  char nom[50];\n  int age;\n} Personne;\n\nint main() {\n  Personne p;\n  strcpy(p.nom, "Alice");\n  p.age = 17;\n  printf("%s a %d ans\\n", p.nom, p.age);\n  return 0;\n}', explanation: ['typedef cree un alias de type', 'struct regroupe plusieurs variables', 'strcpy copie une chaine', 'Acces aux champs avec .', 'Types personnalises', 'Peut contenir differents types']}
    ],
    exercises: [
      {title: 'Somme de deux nombres', desc: 'Ecris un programme qui additionne deux entiers et affiche le resultat.', hint: 'Utilise int, printf et l\'operateur +.', correction: '#include <stdio.h>\n\nint main() {\n  int a = 5, b = 3;\n  int somme = a + b;\n  printf("%d + %d = %d", a, b, somme);\n  return 0;\n}'},
      {title: 'Table de multiplication', desc: 'Affiche la table de multiplication d\'un nombre donne.', hint: 'Utilise une boucle for de 1 a 10.', correction: '#include <stdio.h>\n\nint main() {\n  int n = 7;\n  for (int i = 1; i <= 10; i++) {\n    printf("%d x %d = %d\\n", n, i, n * i);\n  }\n  return 0;\n}'},
      {title: 'Calculer la longueur d une chaine', desc: 'Ecris un programme qui calcule la longueur d une chaine de caracteres sans utiliser strlen(). Utilise un pointeur pour parcourir la chaine.', hint: 'Parcourt la chaine avec un pointeur char* jusqu a rencontrer le caractere nul \\0.', correction: '#include <stdio.h>\n\nint longueur(char *s) {\n  int len = 0;\n  while (*s != \'\\0\') {\n    len++;\n    s++;\n  }\n  return len;\n}\n\nint main() {\n  char mot[] = "Bonjour";\n  printf("Longueur: %d\\n", longueur(mot));\n  return 0;\n}'},
      {title: 'Inverser une chaine', desc: 'Inverse une chaine caractere par caractere.', hint: 'Parcourt de la fin vers le debut.', correction: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n  char mot[] = "Bonjour";\n  int len = strlen(mot);\n  for (int i = len - 1; i >= 0; i--) {\n    printf("%c", mot[i]);\n  }\n  printf("\\n");\n  return 0;\n}'}
    ],
    project: {desc: 'Cree un jeu du plus ou moins en C : l\'utilisateur doit deviner un nombre entre 1 et 100 genere aleatoirement.', steps: ['Genere un nombre aleatoire avec rand()', 'Boucle tant que l\'utilisateur n\'a pas trouve', 'Compare la proposition et donne un indice', 'Compte le nombre de tentatives', 'Affiche un message de felicitation a la fin']},
    quiz: [
      {q: 'Comment inclus une bibliotheque en C ?', options: ['import','#include','using'], answer: 1},
      {q: 'Quel type est un caractere en C ?', options: ['string','char','str'], answer: 1},
      {q: 'Que retourne main() en C ?', options: ['void','int','bool'], answer: 1},
      {q: 'Quelle fonction affiche du texte ?', options: ['print','echo','printf'], answer: 2},
      {q: 'Quel operateur accede a un champ de structure ?', options: ['.','->','::'], answer: 0},
      {q: 'Quel type est 5 (entier) ?', options: ['float','int','char'], answer: 1},
      {q: 'Quelle fonction lit une entree clavier ?', options: ['scanf()','input()','read()'], answer: 0},
      {q: 'Quel symbole prend l\'adresse d\'une variable ?', options: ['*','&','@'], answer: 1},
      {q: 'Quel header pour les fonctions mathematiques ?', options: ['math.h','stdlib.h','stdio.h'], answer: 0},
      {q: 'Quel type retourne main() ?', options: ['void','int','bool'], answer: 1},
      {q: 'Quel header pour les entree/sorties ?', options: ['stdlib.h','stdio.h','io.h'], answer: 1},
      {q: 'Quel operateur compare deux valeurs ?', options: ['=','==','==='], answer: 1},
      {q: 'Quel type stocke un entier court ?', options: ['short','byte','int8'], answer: 0},
      {q: 'Quelle boucle s\'execute au moins une fois ?', options: ['while','do-while','for'], answer: 1},
      {q: 'Quel symbole est un pointeur ?', options: ['&','*','%'], answer: 1},
      {q: 'Quel mot-cle cree une constante ?', options: ['const','#define','les deux'], answer: 2},
      {q: 'Quelle fonction alloue de la memoire ?', options: ['malloc()','alloc()','new()'], answer: 0},
      {q: 'Quelle fonction libere la memoire ?', options: ['delete()','free()','release()'], answer: 1},
      {q: 'Quel type pour un nombre flottant ?', options: ['float','double','les deux'], answer: 2},
      {q: 'Quelle fonction calcule la taille ?', options: ['sizeof()','length()','size()'], answer: 0},
      {q: 'Quel operateur est ET bit a bit ?', options: ['&&','&','and'], answer: 1},
      {q: 'Quelle structure conditionnelle existe ?', options: ['if-else','switch','les deux'], answer: 2},
      {q: 'Quel header pour les fonctions mathematiques ?', options: ['math.h','cmath','stdlib.h'], answer: 0},
      {q: 'Quel type est un caractere non signe ?', options: ['char','unsigned char','uchar'], answer: 1},
      {q: 'Quelle fonction genere un nombre aleatoire ?', options: ['random()','rand()','rnd()'], answer: 1},
    ],
  },
  {
    name: 'C++',
    category: 'Systeme',
    accent: '#00599c',
    level: 'Avance',
    intro: 'C++ ajoute la programmation objet a C, avec des classes, des templates et la STL.',
    why: 'Il est utilise dans les jeux video, les simulateurs et les applications performances.',
    build: 'Tu peux creer un jeu 2D, un moteur physique, une bibliotheque ou une app desktop.',
    concepts: ['Classes', 'Heritage', 'Pointeurs', 'Templates', 'STL'],
    code: '#include <iostream>\n\nint main() {\n  std::cout << "Bonjour C++";\n}',
    help: 'Installe un compilateur C++ (g++ sur Mac/Linux, MinGW sur Windows). Compile avec g++ main.cpp -o main, execute avec ./main.',
    run: 'Cree un fichier .cpp, compile-le avec g++ main.cpp -o main, puis execute ./main. La STL est incluse dans le compilateur.',
    basics: [
      {title: 'Structure de base', text: 'Un programme C++ commence par #include <iostream> et la fonction main.', code: '#include <iostream>\n\nint main() {\n  std::cout << "Bonjour";\n  return 0;\n}'},
      {title: 'Les variables', text: 'On declare une variable avec son type.', code: 'int age = 17;\nstd::string prenom = "Alice";'},
      {title: 'Les conditions', text: 'if/else permet d\'executer du code selon une condition.', code: 'if (age >= 18) {\n  std::cout << "Majeur";\n}'}
    ],
    examples: [
      {title: 'Additionner deux nombres', desc: 'Cree une fonction qui additionne deux entiers.', code: '#include <iostream>\n\nint addition(int a, int b) {\n  return a + b;\n}\n\nint main() {\n  std::cout << addition(3, 5);\n  return 0;\n}', explanation: ['int est le type de retour : la fonction renvoie un entier', 'Les parametres ont un type explicite (int a, int b)', 'std::cout est le flux de sortie standard', '<< envoie la valeur dans le flux de sortie', 'Le programme principal est dans la fonction main()', '#include <iostream> est necessaire pour std::cout']},
      {title: 'Boucle for', desc: 'Affiche les nombres de 1 a 5 avec une boucle.', code: 'for (int i = 1; i <= 5; i++) {\n  std::cout << i << " ";\n}', explanation: ['for (initialisation; condition; incrementation) est la syntaxe standard', 'int i = 1 initialise le compteur de boucle', 'i <= 5 est la condition de continuation', 'i++ ajoute 1 au compteur apres chaque iteration', 'std::cout << i << " " affiche chaque valeur suivie d un espace', 'Les boucles for sont tres utilisees pour parcourir des tableaux']},
      {title: 'Surcharge de fonctions', desc: 'Deux fonctions meme nom, une pour int, une pour double.', code: '#include <iostream>\nusing namespace std;\n\nint somme(int a, int b) {\n  return a + b;\n}\n\ndouble somme(double a, double b) {\n  return a + b;\n}\n\nint main() {\n  cout << somme(3, 5) << endl;\n  cout << somme(2.5, 3.7) << endl;\n  return 0;\n}', explanation: ['Surcharge = meme nom, types differents', 'Le compilateur choisit selon les args', 'int pour entiers, double pour decimaux', 'Le type de retour peut differer', 'Code plus lisible', 'Signatures doivent differer']}
    ],
    exercises: [
      {title: 'Pair ou impair', desc: 'Ecris un programme qui verifie si un nombre est pair ou impair.', hint: 'Utilise l\'operateur % (modulo).', correction: '#include <iostream>\n\nint main() {\n  int n = 7;\n  if (n % 2 == 0) std::cout << "Pair";\n  else std::cout << "Impair";\n  return 0;\n}'},
      {title: 'Table de multiplication', desc: 'Affiche la table de 7 avec une boucle for.', hint: 'Multiplie i * 7 dans la boucle.', correction: '#include <iostream>\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    std::cout << "7 x " << i << " = " << 7 * i << std::endl;\n  }\n  return 0;\n}'},
      {title: 'Classe CompteBancaire', desc: 'Cree une classe CompteBancaire avec un titulaire et un solde. Ajoute des methodes deposer(), retirer() et afficher(). Teste avec plusieurs operations.', hint: 'Utilise class, private pour les attributs, public pour les methodes. Verifie que le retrait ne depasse pas le solde.', correction: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass CompteBancaire {\nprivate:\n  string titulaire;\n  double solde;\npublic:\n  CompteBancaire(string t, double s) : titulaire(t), solde(s) {}\n  void deposer(double montant) { solde += montant; }\n  bool retirer(double montant) {\n    if (montant > solde) return false;\n    solde -= montant;\n    return true;\n  }\n  void afficher() {\n    cout << titulaire << " : " << solde << " EUR" << endl;\n  }\n};\n\nint main() {\n  CompteBancaire cb("Alice", 1000);\n  cb.deposer(500);\n  cb.retirer(200);\n  cb.afficher();\n  return 0;\n}'},
      {title: 'Fonction avec valeur par defaut', desc: 'Saluer avec un message optionnel.', hint: 'string msg = "Bonjour" en parametre.', correction: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid saluer(string nom, string msg = "Bonjour") {\n  cout << msg << ", " << nom << " !" << endl;\n}\n\nint main() {\n  saluer("Alice");\n  saluer("Bob", "Salut");\n  return 0;\n}'}
    ],
    project: {desc: 'Cree un programme qui demande des notes a l\'utilisateur, les stocke dans un tableau, calcule la moyenne et affiche un recapitulatif.', steps: ['Cree un tableau de notes', 'Boucle pour saisir les notes', 'Calcule la somme et la moyenne', 'Trouve la note min et max', 'Affiche les resultats']},
    quiz: [
      {q: 'Comment inclus une bibliotheque en C ?', options: ['import','#include','using'], answer: 1},
      {q: 'Quel type est un caractere en C ?', options: ['string','char','str'], answer: 1},
      {q: 'Que retourne main() en C ?', options: ['void','int','bool'], answer: 1},
      {q: 'Quelle fonction affiche du texte ?', options: ['print','echo','printf'], answer: 2},
      {q: 'Quel operateur accede a un champ de structure ?', options: ['.','->','::'], answer: 0},
      {q: 'Quel type est 5 (entier) ?', options: ['float','int','char'], answer: 1},
      {q: 'Quelle fonction lit une entree clavier ?', options: ['scanf()','input()','read()'], answer: 0},
      {q: 'Quel symbole prend l\'adresse d\'une variable ?', options: ['*','&','@'], answer: 1},
      {q: 'Quel header pour les fonctions mathematiques ?', options: ['math.h','stdlib.h','stdio.h'], answer: 0},
      {q: 'Quel type retourne main() ?', options: ['void','int','bool'], answer: 1},
      {q: 'Quel header pour les entree/sorties ?', options: ['stdlib.h','stdio.h','io.h'], answer: 1},
      {q: 'Quel operateur compare deux valeurs ?', options: ['=','==','==='], answer: 1},
      {q: 'Quel type stocke un entier court ?', options: ['short','byte','int8'], answer: 0},
      {q: 'Quelle boucle s\'execute au moins une fois ?', options: ['while','do-while','for'], answer: 1},
      {q: 'Quel symbole est un pointeur ?', options: ['&','*','%'], answer: 1},
      {q: 'Quel mot-cle cree une constante ?', options: ['const','#define','les deux'], answer: 2},
      {q: 'Quelle fonction alloue de la memoire ?', options: ['malloc()','alloc()','new()'], answer: 0},
      {q: 'Quelle fonction libere la memoire ?', options: ['delete()','free()','release()'], answer: 1},
      {q: 'Quel type pour un nombre flottant ?', options: ['float','double','les deux'], answer: 2},
      {q: 'Quelle fonction calcule la taille ?', options: ['sizeof()','length()','size()'], answer: 0},
      {q: 'Quel operateur est ET bit a bit ?', options: ['&&','&','and'], answer: 1},
      {q: 'Quelle structure conditionnelle existe ?', options: ['if-else','switch','les deux'], answer: 2},
      {q: 'Quel header pour les fonctions mathematiques ?', options: ['math.h','cmath','stdlib.h'], answer: 0},
      {q: 'Quel type est un caractere non signe ?', options: ['char','unsigned char','uchar'], answer: 1},
      {q: 'Quelle fonction genere un nombre aleatoire ?', options: ['random()','rand()','rnd()'], answer: 1},
    ],
  },
  {
    name: 'C#',
    category: 'Applications',
    accent: '#9b4f96',
    level: 'Essentiel',
    intro: 'C# est le langage principal de l\'ecosysteme .NET, utilise pour le web, les jeux Unity et les apps Windows.',
    why: 'Il combine la puissance de C++ avec la simplicite de Java, et s\'integre parfaitement a Windows.',
    build: 'Tu peux creer un jeu Unity, une API ASP.NET, une app desktop ou un service cloud.',
    concepts: ['Classes', 'Proprietes', 'LINQ', 'Async', 'Heritage'],
    code: 'Console.WriteLine("Bonjour C#");',
    help: 'Installe .NET SDK depuis dotnet.microsoft.com. Cree un projet avec dotnet new console. Execute avec dotnet run.',
    run: 'Cree un projet .NET avec dotnet new console. Le fichier Program.cs contient le point d\'entree. Execute avec dotnet run.',
    basics: [
      {title: 'Les classes', text: 'Tout en C# est dans une classe.', code: 'class Personne {\n  public string Nom { get; set; }\n}'},
      {title: 'Les variables', text: 'Les variables ont un type explicite ou utilise var.', code: 'string prenom = "Alice";\nint age = 17;'},
      {title: 'Les conditions', text: 'if/else fonctionne comme en Java ou C.', code: 'if (age >= 18) {\n  Console.WriteLine("Majeur");\n}'}
    ],
    examples: [
      {title: 'Afficher un message', desc: 'Utilise Console.WriteLine pour afficher.', code: 'Console.WriteLine("Bonjour C# !");', explanation: ['Console.WriteLine() affiche un message avec un retour a la ligne automatique', 'Console.Write() affiche sans retour a la ligne', 'Le point-virgule termine chaque instruction en C#', 'La methode Main() est le point d entree du programme', 'using System; permet d utiliser Console sans prefixe complet', 'Les guillemets droits "" delimitent une chaine de caracteres']},
      {title: 'Calculer une somme', desc: 'Cree une fonction qui additionne deux entiers.', code: 'int Addition(int a, int b) {\n  return a + b;\n}\nConsole.WriteLine(Addition(3, 5));', explanation: ['int est le type de retour de la fonction', 'Les parametres a et b sont de type int (entier)', 'Console.WriteLine() affiche le resultat dans la console', 'La fonction est appelee avec Addition(3, 5)', 'C# utilise la syntaxe des types avant les noms des parametres', 'Les accolades { } delimitent le corps de la fonction']},
      {title: 'Proprietes automatiques', desc: 'Cree une classe Livre avec proprietes et constructeur.', code: 'class Livre {\n  public string Titre { get; set; }\n  public string Auteur { get; set; }\n  public int Annee { get; set; }\n\n  public Livre(string titre, string auteur, int annee) {\n    Titre = titre;\n    Auteur = auteur;\n    Annee = annee;\n  }\n}\n\nLivre livre = new Livre("1984", "Orwell", 1949);\nConsole.WriteLine(livre.Titre + " par " + livre.Auteur);', explanation: ['{ get; set; } propriete automatique', 'Proprietes encapsulent l\'acces', 'Constructeur initialise les props', 'new cree un objet', 'Proprietes comme champs publics', 'C# genere le champ de stockage']}
    ],
    exercises: [
      {title: 'Nombre positif ou negatif', desc: 'Ecris un programme qui verifie si un nombre est positif.', hint: 'Utilise if (nombre >= 0).', correction: 'int n = -3;\nif (n >= 0) Console.WriteLine("Positif");\nelse Console.WriteLine("Negatif");'},
      {title: 'Moyenne', desc: 'Cree un tableau de notes et calcule la moyenne.', hint: 'Additionne avec une boucle, divise par la longueur.', correction: 'int[] notes = {12, 15, 18};\nint somme = 0;\nforeach (int n in notes) somme += n;\nConsole.WriteLine("Moyenne: " + (double)somme / notes.Length);'},
      {title: 'LINQ sur une liste d objets', desc: 'Cree une classe Etudiant avec Nom et Note. Cree une liste d etudiants et utilise LINQ pour filtrer ceux qui ont la moyenne, les trier par note et afficher le top 3.', hint: 'Utilise List<Etudiant>, Where(), OrderByDescending(), Take(). Ajoute using System.Linq;.', correction: 'using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Etudiant {\n  public string Nom { get; set; }\n  public int Note { get; set; }\n}\n\nclass Program {\n  static void Main() {\n    var etudiants = new List<Etudiant> {\n      new Etudiant { Nom = "Alice", Note = 15 },\n      new Etudiant { Nom = "Bob", Note = 8 },\n      new Etudiant { Nom = "Charlie", Note = 18 }\n    };\n    var top = etudiants.Where(e => e.Note >= 10)\n                      .OrderByDescending(e => e.Note)\n                      .Take(2);\n    foreach (var e in top) Console.WriteLine(e.Nom + " : " + e.Note);\n  }\n}'},
      {title: 'Calculatrice avec switch', desc: 'Deux nombres et un operateur, retourne le resultat.', hint: 'Utilise op switch avec patterns.', correction: 'static double Calculer(double a, double b, char op) {\n  return op switch {\n    \'+\' => a + b,\n    \'-\' => a - b,\n    \'*\' => a * b,\n    \'/\' => b != 0 ? a / b : 0,\n    _ => 0\n  };\n}\nConsole.WriteLine(Calculer(10, 5, \'+\'));'}
    ],
    project: {desc: 'Cree une application console de gestion de bibliotheque : ajoute, supprime et recherche des livres.', steps: ['Cree une classe Livre avec Titre, Auteur, Annee', 'Cree une classe Bibliotheque avec une liste de livres', 'Ajoute des methodes Ajouter, Supprimer, Rechercher', 'Cree un menu console', 'Teste toutes les fonctionnalites']},
    quiz: [
      {q: 'Comment inclus une bibliotheque en C ?', options: ['import','#include','using'], answer: 1},
      {q: 'Quel type est un caractere en C ?', options: ['string','char','str'], answer: 1},
      {q: 'Que retourne main() en C ?', options: ['void','int','bool'], answer: 1},
      {q: 'Quelle fonction affiche du texte ?', options: ['print','echo','printf'], answer: 2},
      {q: 'Quel operateur accede a un champ de structure ?', options: ['.','->','::'], answer: 0},
      {q: 'Quel type est 5 (entier) ?', options: ['float','int','char'], answer: 1},
      {q: 'Quelle fonction lit une entree clavier ?', options: ['scanf()','input()','read()'], answer: 0},
      {q: 'Quel symbole prend l\'adresse d\'une variable ?', options: ['*','&','@'], answer: 1},
      {q: 'Quel header pour les fonctions mathematiques ?', options: ['math.h','stdlib.h','stdio.h'], answer: 0},
      {q: 'Quel type retourne main() ?', options: ['void','int','bool'], answer: 1},
      {q: 'Quel header pour les entree/sorties ?', options: ['stdlib.h','stdio.h','io.h'], answer: 1},
      {q: 'Quel operateur compare deux valeurs ?', options: ['=','==','==='], answer: 1},
      {q: 'Quel type stocke un entier court ?', options: ['short','byte','int8'], answer: 0},
      {q: 'Quelle boucle s\'execute au moins une fois ?', options: ['while','do-while','for'], answer: 1},
      {q: 'Quel symbole est un pointeur ?', options: ['&','*','%'], answer: 1},
      {q: 'Quel mot-cle cree une constante ?', options: ['const','#define','les deux'], answer: 2},
      {q: 'Quelle fonction alloue de la memoire ?', options: ['malloc()','alloc()','new()'], answer: 0},
      {q: 'Quelle fonction libere la memoire ?', options: ['delete()','free()','release()'], answer: 1},
      {q: 'Quel type pour un nombre flottant ?', options: ['float','double','les deux'], answer: 2},
      {q: 'Quelle fonction calcule la taille ?', options: ['sizeof()','length()','size()'], answer: 0},
      {q: 'Quel operateur est ET bit a bit ?', options: ['&&','&','and'], answer: 1},
      {q: 'Quelle structure conditionnelle existe ?', options: ['if-else','switch','les deux'], answer: 2},
      {q: 'Quel header pour les fonctions mathematiques ?', options: ['math.h','cmath','stdlib.h'], answer: 0},
      {q: 'Quel type est un caractere non signe ?', options: ['char','unsigned char','uchar'], answer: 1},
      {q: 'Quelle fonction genere un nombre aleatoire ?', options: ['random()','rand()','rnd()'], answer: 1},
    ],
  },
  {
    name: 'PHP',
    category: 'Applications',
    accent: '#777bb3',
    level: 'Essentiel',
    intro: 'PHP est un langage serveur utilise par WordPress, Facebook et la majorite des sites web dynamiques.',
    why: 'Il se melange directement au HTML et est tres simple a deployer.',
    build: 'Tu peux creer un blog, un systeme de connexion, une API ou un CMS.',
    concepts: ['Variables', 'Fonctions', 'Formulaires', 'Sessions', 'MySQL'],
    code: '<?php\n$prenom = "Alice";\necho "Bonjour $prenom";\n?>',
    help: 'Installe PHP ou utilise un serveur local comme MAMP/XAMPP. Execute avec php -S localhost:8000.',
    run: 'Cree un fichier .php, lance le serveur avec php -S localhost:8000, puis ouvre http://localhost:8000 dans le navigateur.',
    basics: [
      {title: 'Les variables', text: 'Une variable commence par le symbole $.', code: '$prenom = "Alice";\necho $prenom;'},
      {title: 'Les fonctions', text: 'Une fonction se definit avec function.', code: 'function saluer($nom) {\n  return "Bonjour $nom";\n}'},
      {title: 'Les formulaires', text: 'PHP recupere les donnees d\'un formulaire avec GET ou POST.', code: 'echo $_GET[\'prenom\'];'}
    ],
    examples: [
      {title: 'Page personnalisee', desc: 'Cree un script qui affiche "Bonjour" suivi du prenom de l\'utilisateur.', code: '<?php\n$prenom = "Alice";\necho "Bonjour $prenom !";\n?>', explanation: ['$prenom declare une variable PHP (le $ est obligatoire)', 'Les guillemets doubles " " interpretent les variables a l interieur', 'Les guillemets simples \' \' n interpretent pas les variables', 'echo affiche du texte dans le navigateur', '<?php ... ?> est la balise d ouverture et fermeture PHP', 'PHP est execute sur le serveur avant d envoyer la page au navigateur']},
      {title: 'Calculatrice', desc: 'Cree un script qui additionne deux nombres.', code: '<?php\n$a = 5; $b = 3;\necho "$a + $b = " . ($a + $b);\n?>', explanation: ['Le point . concatene (assemble) les chaines de caracteres', 'Les parentheses ( ) priorisent le calcul avant la concatenation', '$a + $b = effectue l addition', 'Chaque instruction PHP se termine par un point-virgule', 'Les variables sont interpretees directement dans les doubles quotes', 'echo peut afficher des chaines assemblees avec .']},
      {title: 'Tableau associatif et foreach', desc: 'Cree un tableau associatif et affiche chaque paire.', code: '<?php\n$notes = [\n  "Alice" => 15,\n  "Bob" => 12,\n  "Charlie" => 18\n];\nforeach ($notes as $nom => $note) {\n  echo "$nom: $note/20\\n";\n}\n?>', explanation: ['Tableau associatif avec =>', '$nom = cle, $note = valeur', 'foreach parcourt chaque paire', 'Doubles quotes interpretent $nom', '\\n retour a la ligne HTML', 'Appeles dictionnaires ailleurs']}
    ],
    exercises: [
      {title: 'Message personnalise', desc: 'Cree un script PHP qui affiche "Bonjour" suivi d\'un prenom.', hint: 'Stocke le prenom dans une variable $prenom.', correction: '<?php\n$prenom = "Bob";\necho "Bonjour " . $prenom . " !";\n?>'},
      {title: 'Calcul simple', desc: 'Cree un script qui additionne deux nombres et affiche le resultat.', hint: 'Additionne avec l\'operateur +.', correction: '<?php\n$a = 10; $b = 5;\n$somme = $a + $b;\necho "$a + $b = $somme";\n?>'},
      {title: 'Page avec session utilisateur', desc: 'Cree une page PHP qui utilise les sessions pour stocker le prenom de l utilisateur et l afficher. Si le prenom n est pas defini, un formulaire le demande.', hint: 'Utilise session_start(), $_SESSION pour stocker, et un formulaire POST pour saisir le prenom.', correction: '<?php\nsession_start();\nif ($_POST[\"prenom\"]) {\n  $_SESSION[\"prenom\"] = $_POST[\"prenom\"];\n}\n?><form method=\"post\">\n  <input name=\"prenom\" placeholder=\"Ton prenom\">\n  <button type=\"submit\">Valider</button>\n</form>\n<p>Bonjour <?= $_SESSION[\"prenom\"] ?? "invite" ?> !</p>'},
      {title: 'Prix TTC', desc: 'Calcule le prix TTC avec TVA optionnelle (20% par defaut).', hint: 'function prixTTC($ht, $tva = 20).', correction: '<?php\nfunction prixTTC($ht, $tva = 20) {\n  return $ht * (1 + $tva / 100);\n}\necho "Prix TTC: " . prixTTC(100) . " EUR";\n?>'}
    ],
    project: {desc: 'Cree un petit systeme de blog : page d\'accueil avec liste d\'articles, page article et formulaire de contact.', steps: ['Cree une page d\'accueil avec des articles simules', 'Cree une page article individuelle', 'Ajoute un formulaire de contact traite par PHP', 'Utilise $_GET ou $_POST pour les donnees', 'Teste avec le serveur integre PHP']},
    quiz: [
      {q: 'Quel symbole precede une variable PHP ?', options: ['@','$','&'], answer: 1},
      {q: 'Comment afficher du texte en PHP ?', options: ['print()','echo','write()'], answer: 1},
      {q: 'Quelle superglobale contient les donnees POST ?', options: ['$_GET','$_POST','$_REQUEST'], answer: 1},
      {q: 'PHP est execute...', options: ['Dans le navigateur','Sur le serveur','Les deux'], answer: 1},
      {q: 'Quel symbole concatene des chaines ?', options: ['+','.','&'], answer: 1},
      {q: 'Quel tableau stocke des sessions ?', options: ['$_SESSION','$_COOKIE','$_SERVER'], answer: 0},
      {q: 'Quelle boucle parcourt un tableau ?', options: ['for','while','foreach'], answer: 2},
      {q: 'Quel symbole precede un nom de classe ?', options: ['$','::','->'], answer: 1},
      {q: 'Quelle fonction inclut un fichier ?', options: ['include','import','require_once'], answer: 2},
      {q: 'PHP est un langage cote ?', options: ['Client','Serveur','Les deux'], answer: 1},
      {q: 'Quelle superglobale contient $_GET ?', options: ['Variable GET','Tableau associatif','Fonction'], answer: 1},
      {q: 'Quelle fonction affiche un tableau ?', options: ['print_r()','echo()','var_dump()'], answer: 0},
      {q: 'Quel symbole accede a une propriete ?', options: ['->','::','.'], answer: 0},
      {q: 'Quelle fonction definit une session ?', options: ['session_start()','session_begin()','start_session()'], answer: 0},
      {q: 'Quel operateur concatene ?', options: ['+','.','&'], answer: 1},
      {q: 'Quelle fonction convertit en JSON ?', options: ['json_encode()','toJSON()','encode_json()'], answer: 0},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','struct','object'], answer: 0},
      {q: 'Quelle fonction inclut une fois ?', options: ['include_once()','require_once()','les deux'], answer: 2},
      {q: 'Quel type est un tableau indexe ?', options: ['indexed array','list','vector'], answer: 0},
      {q: 'Quelle fonction redirige ?', options: ['redirect()','header()','location()'], answer: 1},
      {q: 'Quel operateur compare valeur ET type ?', options: ['==','===','='], answer: 1},
      {q: 'Quelle fonction hash un mot de passe ?', options: ['hash()','password_hash()','encrypt()'], answer: 1},
      {q: 'Quel symbole est un commentaire ?', options: ['//','#','les deux'], answer: 2},
      {q: 'Quelle fonction lit un fichier ?', options: ['readfile()','file_get_contents()','les deux'], answer: 2},
      {q: 'Quelle extension pour PHP ?', options: ['.php','.phtml','.php3'], answer: 0},
    ],
  },
  {
    name: 'Ruby',
    category: 'Applications',
    accent: '#cc342d',
    level: 'Essentiel',
    intro: 'Ruby est un langage elegant et expressif, connu pour le framework web Ruby on Rails.',
    why: 'Sa philosophie est la liberte du developpeur avec une syntaxe tres naturelle.',
    build: 'Tu peux creer un site web, une API, un outil CLI ou un prototype rapide.',
    concepts: ['Variables', 'Methodes', 'Symboles', 'Blocs', 'Gems'],
    code: 'puts "Bonjour Ruby"',
    help: 'Installe Ruby avec rbenv ou ruby-install. Execute ruby fichier.rb dans le terminal. Utilise puts pour afficher.',
    run: 'Cree un fichier .rb et execute ruby fichier.rb dans le terminal. Les gems (bibliotheques) s\'installent avec gem install.',
    basics: [
      {title: 'Les variables', text: 'Les variables n\'ont pas de type declare.', code: 'prenom = "Alice"\nage = 17'},
      {title: 'Les methodes', text: 'Une methode se definit avec def et finit par end.', code: 'def saluer(nom)\n  puts "Bonjour #{nom}"\nend'},
      {title: 'Les tableaux', text: 'Un tableau se note avec des crochets.', code: 'fruits = ["Pomme", "Banane"]\nputs fruits[0]'}
    ],
    examples: [
      {title: 'Dire bonjour', desc: 'Cree une methode qui salue l\'utilisateur.', code: 'def saluer(nom)\n  puts "Bonjour #{nom}"\nend\n\nsaluer("Alice")', explanation: ['def est le mot-cle pour definir une methode en Ruby', '#{} insere le resultat d une expression dans une chaine', 'end termine la methode (pas d accolades en Ruby)', 'puts affiche du texte avec un retour a la ligne', 'Les parentheses sont optionnelles en Ruby : saluer "Alice" fonctionne aussi', 'Les parametres n ont pas de type declare en Ruby']},
      {title: 'Parcourir un tableau', desc: 'Utilise each pour parcourir un tableau.', code: 'nombres = [1, 2, 3]\nnombres.each do |n|\n  puts n * 2\nend', explanation: ['each est une methode qui parcourt chaque element du tableau', '|n| est la variable qui recoit la valeur courante entre barres verticales', 'do...end est le bloc de code execute pour chaque element', 'puts n * 2 affiche chaque valeur multipliee par 2', 'Les blocs peuvent aussi s\'ecrire avec des accolades { }', 'Les tableaux se declarent avec des crochets [ ]']},
      {title: 'Hash et iteration', desc: 'Cree un hash avec noms et ages, itere avec each.', code: 'personnes = {\n  "Alice" => 17,\n  "Bob" => 22,\n  "Charlie" => 19\n}\npersonnes.each do |nom, age|\n  puts "#{nom} a #{age} ans"\nend', explanation: ['{ } definit un hash', '=> associe cle a valeur', 'each parcourt chaque paire', '|nom, age| variables iteration', '#{} insere dans la chaine', 'Symboles aussi comme cles']}
    ],
    exercises: [
      {title: 'Message personnalise', desc: 'Ecris un programme qui demande un prenom et affiche "Bonjour" suivi du prenom.', hint: 'Utilise gets.chomp pour lire l\'entree.', correction: 'puts "Quel est ton prenom ?"\nprenom = gets.chomp\nputs "Bonjour #{prenom} !"'},
      {title: 'Somme', desc: 'Cree une methode qui additionne deux nombres.', hint: 'Definit une methode avec def et return.', correction: 'def addition(a, b)\n  a + b\nend\nputs addition(5, 3)'},
      {title: 'Classe Livre avec module', desc: 'Cree une classe Livre avec un titre et un auteur. Ajoute un module Recherchable qui permet de chercher un livre par titre dans un tableau. Utilise include pour ajouter le module a la classe.', hint: 'Utilise module, def self.included, et une methode de classe ou d instance selon ton choix.', correction: 'module Recherchable\n  def self.chercher(titre, livres)\n    livres.select { |l| l.titre.include?(titre) }\n  end\nend\n\nclass Livre\n  attr_accessor :titre, :auteur\n  def initialize(titre, auteur)\n    @titre = titre\n    @auteur = auteur\n  end\nend\n\ninclude Recherchable\nlivres = [Livre.new("Ruby Facile", "Alice"), Livre.new("POO Avancee", "Bob")]\nputs chercher("Ruby", livres).map(&:titre)'},
      {title: 'Compter les mots', desc: 'Compte les occurrences de chaque mot dans une phrase.', hint: 'Hash.new(0) pour valeur par defaut.', correction: 'phrase = "le chat et le chien et le lapin"\nmots = phrase.split\ncompteur = Hash.new(0)\nmots.each { |mot| compteur[mot] += 1 }\ncompteur.each { |mot, n| puts "#{mot}: #{n}" }'}
    ],
    project: {desc: 'Cree un petit annuaire en memoire : ajoute des contacts (nom, telephone), affiche la liste et permet de rechercher par nom.', steps: ['Cree une classe Contact', 'Ajoute des contacts dans un tableau', 'Affiche tous les contacts', 'Permet de rechercher par nom', 'Ajoute une interface simple dans le terminal']},
    quiz: [
      {q: 'Comment afficher en Ruby ?', options: ['print','echo','puts'], answer: 2},
      {q: 'Quel symbole termine une ligne en Ruby ?', options: [';','.','Rien (saut de ligne)'], answer: 2},
      {q: 'Quelle structure de donnee utilise des paires cle-valeur ?', options: ['Array','Hash','Set'], answer: 1},
      {q: 'Comment definit une methode ?', options: ['function','def','define'], answer: 1},
      {q: 'Quel framework web est celebre en Ruby ?', options: ['Django','Laravel','Ruby on Rails'], answer: 2},
      {q: 'Quel type est un symbole en Ruby ?', options: [':symbole','symbole','\'symbole\''], answer: 0},
      {q: 'Quelle structure est une condition ?', options: ['if/else','when','switch'], answer: 0},
      {q: 'Quel operateur concatene ?', options: ['+','.','<<'], answer: 1},
      {q: 'Quel framework web Ruby famous ?', options: ['Django','Rails','Sinatra'], answer: 1},
      {q: 'Quel mot-cle cree une classe ?', options: ['function','class','module'], answer: 1},
      {q: 'Quel symbole declare un symbole ?', options: [':','sym','$'], answer: 0},
      {q: 'Quelle methode affiche avec retour ?', options: ['print','puts','p'], answer: 1},
      {q: 'Quel type est un hash ?', options: ['{}','Hash.new','les deux'], answer: 2},
      {q: 'Quelle boucle parcourt un tableau ?', options: ['each','for','while'], answer: 0},
      {q: 'Quel mot-cle cree un module ?', options: ['module','class','package'], answer: 0},
      {q: 'Quel operateur est un intervalle ?', options: ['..','...','-'], answer: 0},
      {q: 'Quelle methode convertit en symbole ?', options: ['to_sym','intern','symbolize'], answer: 1},
      {q: 'Quel type est un tableau ?', options: ['Array','List','Vector'], answer: 0},
      {q: 'Quelle gem est populaire ?', options: ['Rails','Sinatra','les deux'], answer: 2},
      {q: 'Quel symbole est un commentaire ?', options: ['#','//','rem'], answer: 0},
      {q: 'Quelle methode joint un tableau ?', options: ['merge','join','concat'], answer: 1},
      {q: 'Quel mot-cle cree un accesseur ?', options: ['attr_accessor','getter','property'], answer: 0},
      {q: 'Quelle methode trie un tableau ?', options: ['sort','order','arrange'], answer: 0},
      {q: 'Quel type est un flottant ?', options: ['Float','Decimal','Number'], answer: 0},
      {q: 'Quelle boucle execute n fois ?', options: ['times','loop','repeat'], answer: 0},
    ],
  },
  {
    name: 'Go',
    category: 'Systeme',
    accent: '#00add8',
    level: 'Avance',
    intro: 'Go est un langage moderne et rapide cree par Google, ideal pour les serveurs et les outils CLI.',
    why: 'Sa simplicite et sa concurrence native le rendent parfait pour les microservices.',
    build: 'Tu peux creer une API REST, un outil en ligne de commande, un proxy ou un serveur web.',
    concepts: ['Goroutines', 'Channels', 'Interfaces', 'Pointeurs', 'Packages'],
    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Bonjour Go")\n}',
    help: 'Installe Go depuis go.dev. Execute go run fichier.go ou compile avec go build. Les packages sont geres automatiquement.',
    run: 'Cree un fichier .go, execute go run fichier.go. Le package main est obligatoire pour un executable. Utilise fmt.Println pour afficher.',
    basics: [
      {title: 'Structure d\'un programme', text: 'Un programme Go commence par package main et la fonction main.', code: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Bonjour")\n}'},
      {title: 'Les variables', text: 'On utilise := pour declarer une variable inferree.', code: 'prenom := "Alice"\nage := 17'},
      {title: 'Les fonctions', text: 'Une fonction se definit avec func.', code: 'func addition(a int, b int) int {\n  return a + b\n}'}
    ],
    examples: [
      {title: 'Conditions', desc: 'Utilise if pour verifier une condition.', code: 'age := 17\nif age >= 18 {\n  fmt.Println("Majeur")\n} else {\n  fmt.Println("Mineur")\n}', explanation: ['if ne necessite pas de parentheses autour de la condition en Go', 'Les accolades { } sont obligatoires meme pour une seule ligne', 'L else se place sur la meme ligne que l accolade fermante', ':= declare et assigne une variable en une seule operation', 'fmt.Println affiche du texte dans la console', 'age >= 18 est une expression booleenne (vrai ou faux)']},
      {title: 'Boucle for', desc: 'La seule boucle en Go est for.', code: 'for i := 1; i <= 5; i++ {\n  fmt.Println(i)\n}', explanation: ['for est la seule boucle en Go (elle remplace while et for)', ':= declare et assigne le compteur i directement dans la boucle', 'i <= 5 est la condition qui maintient la boucle active', 'i++ incremente le compteur de 1', 'fmt.Println(i) affiche chaque valeur', 'for peut aussi s utiliser avec range pour parcourir des tableaux']},
      {title: 'Slices et range', desc: 'Cree un slice et utilise range pour le parcourir.', code: 'package main\n\nimport "fmt"\n\nfunc main() {\n  notes := []int{12, 15, 18, 10}\n  somme := 0\n  for i, note := range notes {\n    fmt.Printf("Note %d: %d\\n", i+1, note)\n    somme += note\n  }\n  fmt.Println("Somme:", somme)\n}', explanation: ['[]int est un slice dynamique', 'range parcourt avec index', 'i = index, note = valeur', ':= declare et assigne', 'Printf formate avec %d', 'Slices plus flexibles que tableaux']}
    ],
    exercises: [
      {title: 'Nombre pair', desc: 'Ecris un programme qui verifie si un nombre est pair.', hint: 'Utilise % 2 == 0.', correction: 'package main\nimport "fmt"\n\nfunc main() {\n  n := 7\n  if n%2 == 0 {\n    fmt.Println("Pair")\n  } else {\n    fmt.Println("Impair")\n  }\n}'},
      {title: 'Table de multiplication', desc: 'Affiche la table de 5 avec une boucle for.', hint: 'Multiplie i * 5 a chaque iteration.', correction: 'package main\nimport "fmt"\n\nfunc main() {\n  for i := 1; i <= 10; i++ {\n    fmt.Printf("5 x %d = %d\\n", i, 5*i)\n  }\n}'},
      {title: 'Compteur concurrent avec goroutines', desc: 'Cree un programme qui lance 5 goroutines. Chaque goroutine incremente un compteur partage 10 fois. Utilise un mutex pour proteger l acces au compteur et eviter les conditions de course.', hint: 'Utilise sync.Mutex, Lock() et Unlock(). Les goroutines se lancent avec go. Utilise sync.WaitGroup pour attendre la fin.', correction: 'package main\n\nimport (\n  "fmt"\n  "sync"\n)\n\nfunc main() {\n  var mu sync.Mutex\n  var wg sync.WaitGroup\n  compteur := 0\n  for i := 0; i < 5; i++ {\n    wg.Add(1)\n    go func() {\n      defer wg.Done()\n      for j := 0; j < 10; j++ {\n        mu.Lock()\n        compteur++\n        mu.Unlock()\n      }\n    }()\n  }\n  wg.Wait()\n  fmt.Println("Compteur:", compteur)\n}'},
      {title: 'Map avec verification', desc: 'Verifie si un eleve existe dans une map avant d afficher sa note.', hint: 'note, existe := notes[nom].', correction: 'package main\nimport "fmt"\nfunc main() {\n  notes := map[string]int{"Alice": 15, "Bob": 12}\n  if note, existe := notes["Alice"]; existe {\n    fmt.Printf("Alice a %d/20\\n", note)\n  } else {\n    fmt.Println("Inconnu")\n  }\n}'}
    ],
    project: {desc: 'Cree un programme qui lit un fichier texte et compte le nombre de mots.', steps: ['Cree un fichier texte d\'exemple', 'Lis le fichier avec ioutil.ReadFile', 'Decoupe le texte en mots avec strings.Split', 'Compte les mots avec len', 'Affiche le resultat']},
    quiz: [
      {q: 'Quel mot-cle declare une variable en Go ?', options: ['var','let','const'], answer: 0},
      {q: 'Quel type est un entier 32 bits en Go ?', options: ['int','int32','integer'], answer: 1},
      {q: 'Comment importe un package ?', options: ['#include','using','import'], answer: 2},
      {q: 'Quelle fonction est le point d\'entree ?', options: ['start()','main()','run()'], answer: 1},
      {q: 'Quel outil telecharge des dependances Go ?', options: ['npm','pip','go mod'], answer: 2},
      {q: 'Quel type est un entier 64 bits ?', options: ['int','int64','long'], answer: 1},
      {q: 'Quelle boucle existe en Go ?', options: ['for','while','do'], answer: 0},
      {q: 'Quel mot-cle cree une interface ?', options: ['type','interface','impl'], answer: 1},
      {q: 'Quel outil formate le code ?', options: ['gofmt','format','go clean'], answer: 0},
      {q: 'Go a ete cree par ?', options: ['Google','Microsoft','Apple'], answer: 0},
      {q: 'Quel mot-cle cree une fonction ?', options: ['func','function','def'], answer: 0},
      {q: 'Quel type retourne une erreur ?', options: ['error','Error','err'], answer: 0},
      {q: 'Quelle boucle est universelle ?', options: ['for','while','loop'], answer: 0},
      {q: 'Quel mot-cle cree une goroutine ?', options: ['go','thread','async'], answer: 0},
      {q: 'Quelle fonction lit une entree ?', options: ['fmt.Scan()','input()','read()'], answer: 0},
      {q: 'Quel type est une interface vide ?', options: ['interface{}','empty','any'], answer: 0},
      {q: 'Quelle commande compile ?', options: ['go build','go compile','go make'], answer: 0},
      {q: 'Quel mot-cle cree une structure ?', options: ['struct','type struct','class'], answer: 0},
      {q: 'Quelle fonction formatte du texte ?', options: ['fmt.Sprintf()','format()','printf()'], answer: 0},
      {q: 'Quel type est un canal ?', options: ['chan','channel','pipe'], answer: 0},
      {q: 'Quelle fonction ferme un canal ?', options: ['close()','end()','stop()'], answer: 0},
      {q: 'Quel mot-cle differe l\'execution ?', options: ['defer','delay','later'], answer: 0},
      {q: 'Quel type est un booléen ?', options: ['bool','boolean','Boolean'], answer: 0},
      {q: 'Quel mot-cle cree une constante ?', options: ['const','final','static'], answer: 0},
      {q: 'Quel package contient fmt ?', options: ['fmt','format','io'], answer: 0},
    ],
  },
  {
    name: 'Rust',
    category: 'Systeme',
    accent: '#dea584',
    level: 'Avance',
    intro: 'Rust est un langage systeme moderne qui garantit la securite memoire sans garbage collector.',
    why: 'Il est parfait pour les outils critiques, les navigateurs et les systemes embarques.',
    build: 'Tu peux creer un outil CLI, un jeu, un navigateur ou un systeme de fichiers.',
    concepts: ['Ownership', 'Borrowing', 'Traits', 'Pattern matching', 'Macros'],
    code: 'fn main() {\n  println!("Bonjour Rust");\n}',
    help: 'Installe Rust avec rustup.rs. Execute rustc fichier.rs ou utilise cargo new pour un projet complet.',
    run: 'Cree un fichier .rs, compile avec rustc fichier.rs, execute ./fichier. Utilise cargo pour les projets plus grands.',
    basics: [
      {title: 'Structure de base', text: 'Un programme Rust commence par fn main().', code: 'fn main() {\n  println!("Bonjour");\n}'},
      {title: 'Les variables', text: 'let declare une variable immuable par defaut.', code: 'let prenom = "Alice";\nlet age = 17;'},
      {title: 'Les variables mutables', text: 'Ajoute mut pour pouvoir modifier la variable.', code: 'let mut compteur = 0;\ncompteur += 1;'}
    ],
    examples: [
      {title: 'Fonction avec retour', desc: 'Cree une fonction qui additionne deux nombres.', code: 'fn addition(a: i32, b: i32) -> i32 {\n  a + b\n}\n\nfn main() {\n  println!("{}", addition(3, 5));\n}', explanation: ['i32 est le type entier signe sur 32 bits', '-> i32 declare que la fonction retourne un entier', 'La derniere expression sans point-virgule est automatiquement retournee', 'fn main() est le point d entree du programme Rust', 'println!() est une macro (note le !) qui affiche du texte', '{} dans println! est remplace par la valeur passee']},
      {title: 'Boucle for', desc: 'Itere sur une plage de nombres.', code: 'fn main() {\n  for i in 1..=5 {\n    println!("{}", i);\n  }\n}', explanation: ['1..=5 est une plage inclusive qui va de 1 a 5', 'for parcourt automatiquement chaque element de la plage', 'i prend chaque valeur de la plage un tour apres l autre', 'println!("{}", i) affiche chaque nombre', 'Pour une plage exclusive (1 a 4), utilise 1..5 (sans le =)', 'Les boucles for sont idiomatiques en Rust pour iterer']},
      {title: 'Struct avec methode impl', desc: 'Cree une struct Rectangle avec une methode surface().', code: 'struct Rectangle {\n  largeur: u32,\n  hauteur: u32,\n}\n\nimpl Rectangle {\n  fn surface(&self) -> u32 {\n    self.largeur * self.hauteur\n  }\n}\n\nfn main() {\n  let rect = Rectangle { largeur: 10, hauteur: 5 };\n  println!("Surface: {}", rect.surface());\n}', explanation: ['struct definit un type', 'impl ajoute des methodes', '&self = reference a l instance', 'u32 = entier non signe', 'Methodes appelees avec .', 'Rust utilise les traits pas heritage']}
    ],
    exercises: [
      {title: 'Verification d\'age', desc: 'Ecris une fonction qui prend un age et retourne "Majeur" ou "Mineur".', hint: 'Utilise if/else et retourne une String.', correction: 'fn main() {\n  let age = 16;\n  if age >= 18 {\n    println!("Majeur");\n  } else {\n    println!("Mineur");\n  }\n}'},
      {title: 'Somme d\'un tableau', desc: 'Cree une fonction qui calcule la somme d\'un tableau d\'entiers.', hint: 'Utilise slice &[i32] et une boucle for.', correction: 'fn somme(notes: &[i32]) -> i32 {\n  let mut total = 0;\n  for n in notes {\n    total += n;\n  }\n  total\n}\n\nfn main() {\n  let notes = [12, 15, 18];\n  println!("{}", somme(&notes));\n}'},
      {title: 'Ownership et emprunt', desc: 'Cree une fonction qui prend une String en parametre, calcule sa longueur, et retourne la longueur sans prendre possession de la chaine. Dans main, affiche la chaine originale et sa longueur.', hint: 'Utilise une reference &String en parametre. La fonction retourne usize. La chaine originale reste accessible dans main.', correction: 'fn longueur(s: &String) -> usize {\n  s.len()\n}\n\nfn main() {\n  let mot = String::from("Bonjour Rust");\n  let len = longueur(&mot);\n  println!("\\"{}\\" fait {} caracteres", mot, len);\n}'},
      {title: 'Expression match', desc: 'Convertit un chiffre en toutes lettres avec match.', hint: 'match n { 1 => "un", _ => "inconnu" }.', correction: 'fn en_toutes_lettres(n: u32) -> &\'static str {\n  match n {\n    1 => "un", 2 => "deux", 3 => "trois",\n    4 => "quatre", 5 => "cinq",\n    _ => "inconnu"\n  }\n}\nfn main() {\n  println!("{}", en_toutes_lettres(3));\n}'}
    ],
    project: {desc: 'Cree un convertisseur temperature Celsius/Fahrenheit. Demande la valeur et l\'unite, puis affiche la conversion.', steps: ['Cree les fonctions de conversion', 'Demande la temperature a l\'utilisateur', 'Demande l\'unite de depart', 'Affiche le resultat converti', 'Teste avec differentes valeurs']},
    quiz: [
      {q: 'Quel mot-cle declare une variable immutable ?', options: ['let','mut','var'], answer: 0},
      {q: 'Quel type est un entier non-signe 32 bits ?', options: ['int','uint','u32'], answer: 2},
      {q: 'Qu\'est-ce que le borrow checker ?', options: ['Un outil de debug|Un verificateur d\'emprunts memoire|Une bibliotheque|Un compilateur'], answer: 1},
      {q: 'Quel trait affiche du texte ?', options: ['Show','Display','Debug'], answer: 1},
      {q: 'Comment cree une reference mutable ?', options: ['&','&mut','*'], answer: 1},
      {q: 'Quel type entier signe 32 bits ?', options: ['i32','u32','int'], answer: 0},
      {q: 'Quel mot-cle cree une structure ?', options: ['class','struct','type'], answer: 1},
      {q: 'Quelle macro affiche du texte ?', options: ['print!','println!','log!'], answer: 1},
      {q: 'Quel operateur donne une reference immuable ?', options: ['&mut','&','*'], answer: 1},
      {q: 'Rust est connu pour sa gestion ?', options: ['Memoire','Reseau','UI'], answer: 0},
      {q: 'Quel mot-cle cree une variable mutable ?', options: ['mut','var','let mut'], answer: 2},
      {q: 'Quel type est un entier non signe ?', options: ['u32','i32','int'], answer: 0},
      {q: 'Quelle macro affiche du texte ?', options: ['println!','print!','les deux'], answer: 2},
      {q: 'Quel mot-cle cree une fonction ?', options: ['fn','function','def'], answer: 0},
      {q: 'Quel type est une chaine ?', options: ['String','str','les deux'], answer: 2},
      {q: 'Quel mot-cle cree une structure ?', options: ['struct','class','type'], answer: 0},
      {q: 'Quel mot-cle cree une enumeration ?', options: ['enum','type','sum'], answer: 0},
      {q: 'Quelle macro cree un vecteur ?', options: ['vec!','array!','list!'], answer: 0},
      {q: 'Quel mot-cle cree un trait ?', options: ['trait','interface','protocol'], answer: 0},
      {q: 'Quelle fonction donne la longueur ?', options: ['len()','size()','count()'], answer: 0},
      {q: 'Quel mot-cle cree une reference ?', options: ['&','*','@'], answer: 0},
      {q: 'Quel type est un resultat ?', options: ['Result','Option','Either'], answer: 0},
      {q: 'Quel mot-cle cree un module ?', options: ['mod','module','package'], answer: 0},
      {q: 'Quelle commande compile Rust ?', options: ['rustc','cargo build','les deux'], answer: 2},
      {q: 'Quel fichier contient les dépendances ?', options: ['Cargo.toml','Cargo.lock','rust.toml'], answer: 0},
    ],
  },
  {
    name: 'Swift',
    category: 'Applications',
    accent: '#f05138',
    level: 'Essentiel',
    intro: 'Swift est le langage d\'Apple pour les apps iOS, macOS, watchOS et tvOS.',
    why: 'Sa syntaxe moderne et sure le rend agreable a ecrire et performant.',
    build: 'Tu peux creer une app iPhone, une app Mac, un jeu ou une app Apple Watch.',
    concepts: ['Optionals', 'Structs', 'Protocols', 'Closures', 'SwiftUI'],
    code: 'print("Bonjour Swift")',
    help: 'Installe Xcode depuis l\'App Store. Cree un nouveau projet Swift ou utilise Swift Playgrounds pour tester rapidement.',
    run: 'Cree un fichier .swift et execute swift fichier.swift dans le terminal. Ou utilise Xcode pour un projet complet.',
    basics: [
      {title: 'Les variables', text: 'let pour une constante, var si la valeur doit changer.', code: 'let prenom = "Alice"\nvar age = 17'},
      {title: 'Les fonctions', text: 'Une fonction se definit avec func.', code: 'func saluer(nom: String) {\n  print("Bonjour \\(nom)")\n}'},
      {title: 'Les optionals', text: 'Un optional peut contenir nil ou une valeur.', code: 'var age: Int? = nil\nif let a = age {\n  print(a)\n}'}
    ],
    examples: [
      {title: 'Afficher un message', desc: 'Affiche un message dans la console.', code: 'let message = "Bonjour Swift"\nprint(message)', explanation: ['let declare une constante dont la valeur ne change pas', 'print() affiche le resultat dans la console', 'var serait utilise pour une variable modifiable', 'Swift infere automatiquement le type String de la variable', 'Les guillemets droits introduisent une chaine de caracteres', 'Swift est un langage type mais l inference de type est automatique']},
      {title: 'Calculer une somme', desc: 'Cree une fonction qui additionne deux entiers.', code: 'func addition(a: Int, b: Int) -> Int {\n  return a + b\n}\nprint(addition(a: 3, b: 5))', explanation: ['-> Int declare le type de retour de la fonction', 'a: et b: sont les etiquettes des parametres (Swift les distingue)', 'Les parametres ont des types explicites (Int)', 'return renvoie le resultat de l addition', 'print(addition(a: 3, b: 5)) appelle la fonction avec ses etiquettes', 'Les etiquettes rendent le code plus lisible a l appel']},
      {title: 'Dictionnaire et optionals', desc: 'Cree un dictionnaire et utilise if let pour acceder.', code: 'let notes = [\n  "Alice": 15,\n  "Bob": 12,\n  "Charlie": 18\n]\nif let note = notes["Alice"] {\n  print("Alice a \\(note)")\n} else {\n  print("Eleve non trouve")\n}', explanation: ['let cree un dictionnaire constant', 'Paires cle-valeur', 'if let deboite un optional surement', 'Cle doit correspondre exactement', 'notes["Alice"] retourne Int?', 'Optionals = nil ou valeur']}
    ],
    exercises: [
      {title: 'Pair ou impair', desc: 'Ecris un programme qui verifie si un nombre est pair.', hint: 'Utilise l\'operateur % (modulo).', correction: 'let n = 7\nif n % 2 == 0 {\n  print("Pair")\n} else {\n  print("Impair")\n}'},
      {title: 'Moyenne', desc: 'Cree une fonction qui calcule la moyenne d\'un tableau de notes.', hint: 'Additionne avec une boucle, puis divise par le nombre d\'elements.', correction: 'func moyenne(notes: [Int]) -> Double {\n  let somme = notes.reduce(0, +)\n  return Double(somme) / Double(notes.count)\n}\nprint(moyenne(notes: [12, 15, 18]))'},
      {title: 'Closure et tri personnalise', desc: 'Cree un tableau de dictionnaires contenant des noms et ages. Utilise la methode sorted() avec une closure pour trier par age decroissant. Affiche le resultat.', hint: 'Utilise sorted(by: { $0.age > $1.age }). Les closures en Swift s ecrivent entre accolades.', correction: 'struct Personne {\n  let nom: String\n  let age: Int\n}\n\nlet gens = [\n  Personne(nom: "Alice", age: 17),\n  Personne(nom: "Bob", age: 22),\n  Personne(nom: "Charlie", age: 19)\n]\nlet tries = gens.sorted { $0.age > $1.age }\nfor p in tries {\n  print("\(p.nom) a \(p.age) ans")\n}'},
      {title: 'Guard let avec optionals', desc: 'Verifie la majorite avec un age optional.', hint: 'guard let age = age else { return }.', correction: 'func verifierAge(_ age: Int?) {\n  guard let age = age else { print("Invalide"); return }\n  if age >= 18 { print("Majeur") } else { print("Mineur") }\n}\nverifierAge(17)\nverifierAge(22)'}
    ],
    project: {desc: 'Cree une app SwiftUI simple qui affiche une liste de taches avec la possibilite d\'en ajouter et de les cocher.', steps: ['Cree un nouveau projet SwiftUI dans Xcode', 'Cree un modele Task avec un id et un titre', 'Affiche une liste avec ForEach', 'Ajoute un champ texte pour creer une tache', 'Ajoute la possibilite de cocher une tache terminee']},
    quiz: [
      {q: 'Comment declare une constante en Swift ?', options: ['var','const','let'], answer: 2},
      {q: 'Qu\'est-ce qu\'un Optional en Swift ?', options: ['Un type qui peut etre nil','Un parametre facultatif','Une valeur par defaut'], answer: 0},
      {q: 'Quelle structure de donnee est non-ordonnee ?', options: ['Array','Set','Dictionary'], answer: 1},
      {q: 'Quel mot-cle retire la valeur d\'un Optional ?', options: ['!','?','*'], answer: 0},
      {q: 'SwiftUI utilise quel paradigme ?', options: ['MVC','Declaratif','Imperatif'], answer: 1},
      {q: 'Quel type est un entier ?', options: ['Int','integer','num'], answer: 0},
      {q: 'Quelle boucle existe en Swift ?', options: ['for-in','foreach','each'], answer: 0},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','struct','type'], answer: 0},
      {q: 'Qu\'est-ce qu\'un closure ?', options: ['Une fonction anonyme','Une classe','Un type'], answer: 0},
      {q: 'Swift est utilise pour les apps ?', options: ['Android','Apple','Windows'], answer: 1},
      {q: 'Quel mot-cle cree une fonction ?', options: ['func','function','def'], answer: 0},
      {q: 'Quel type est optionnel ?', options: ['Optional','?','les deux'], answer: 2},
      {q: 'Quelle boucle parcourt un intervalle ?', options: ['for-in','for','each'], answer: 0},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','struct','les deux'], answer: 2},
      {q: 'Quel type est une chaine ?', options: ['String','string','NSString'], answer: 0},
      {q: 'Quelle collection est non ordonnee ?', options: ['Set','Array','Dictionary'], answer: 0},
      {q: 'Quel mot-cle cree une enumeration ?', options: ['enum','case','type'], answer: 0},
      {q: 'Quel operateur force le deballage ?', options: ['!','?','??'], answer: 0},
      {q: 'Quelle fonction convertit en Int ?', options: ['Int()','toInt()','as Int'], answer: 0},
      {q: 'Quel mot-cle cree un protocole ?', options: ['protocol','interface','trait'], answer: 0},
      {q: 'Quelle structure est une file ?', options: ['Queue','Array','Set'], answer: 0},
      {q: 'Quel modificateur est prive ?', options: ['private','fileprivate','internal'], answer: 0},
      {q: 'Quel type est un dictionnaire ?', options: ['Dictionary','Map','Hash'], answer: 0},
      {q: 'Quel mot-cle cree une extension ?', options: ['extension','extend','expand'], answer: 0},
      {q: 'Swift est open source depuis ?', options: ['2014','2015','2016'], answer: 1},
    ],
  },
  {
    name: 'Kotlin',
    category: 'Applications',
    accent: '#7f52ff',
    level: 'Essentiel',
    intro: 'Kotlin est le langage officiel pour Android, concis et interoperable avec Java.',
    why: 'Il est plus moderne et plus sur que Java, avec une null safety integree.',
    build: 'Tu peux creer une app Android, un backend avec Ktor ou une app multi-plateforme.',
    concepts: ['Null safety', 'Fonctions', 'Coroutines', 'Data classes', 'Extensions'],
    code: 'fun main() {\n  println("Bonjour Kotlin")\n}',
    help: 'Installe IntelliJ IDEA ou Android Studio. Cree un projet Kotlin et execute avec le bouton Run.',
    run: 'Cree un fichier .kt, compile avec kotlinc Main.kt -include-runtime -d main.jar, execute avec java -jar main.jar.',
    basics: [
      {title: 'Variables', text: 'val pour une constante, var pour une variable modifiable.', code: 'val prenom = "Alice"\nvar age = 17'},
      {title: 'Fonctions', text: 'Une fonction se definit avec fun.', code: 'fun saluer(nom: String) {\n  println("Bonjour $nom")\n}'},
      {title: 'Null safety', text: 'Le type? permet d\'eviter les erreurs de null.', code: 'var age: Int? = null\nif (age != null) {\n  println(age)\n}'}
    ],
    examples: [
      {title: 'Addition', desc: 'Cree une fonction qui additionne deux entiers.', code: 'fun addition(a: Int, b: Int): Int {\n  return a + b\n}\n\nfun main() {\n  println(addition(3, 5))\n}', explanation: ['fun est le mot-cle pour definir une fonction en Kotlin', ': Int apres les parentheses declare le type de retour', 'Les parametres sont declares avec nom: Type', 'return renvoie la valeur calculee', 'println() affiche le resultat dans la console', 'fun main() est le point d entree du programme Kotlin']},
      {title: 'Parcourir une liste', desc: 'Utilise forEach pour parcourir une liste.', code: 'val notes = listOf(12, 16, 18)\nnotes.forEach { println(it) }', explanation: ['listOf() cree une liste qui ne peut pas etre modifiee', 'it est le nom par defaut de l\'element courant dans un bloc lambda', 'forEach { } est une facon concise de parcourir une collection', 'Les accolades { } entourent le bloc de code a executer', 'mutableListOf() cree une liste modifiable si tu veux ajouter des elements', 'forEach evite d\'ecrire une boucle for explicite']},
      {title: 'Expression when et ranges', desc: 'Utilise when pour evaluer une note avec des ranges.', code: 'val note = 15\nval commentaire = when (note) {\n  in 0..9 -> "Insuffisant"\n  in 10..13 -> "Passable"\n  in 14..16 -> "Bien"\n  in 17..20 -> "Tres bien"\n  else -> "Note invalide"\n}\nprintln(commentaire)', explanation: ['when remplace switch', 'in 0..9 verifie dans la range', '.. cree un intervalle inclusif', 'else = cas par defaut', 'when peut retourner une valeur', 'Ranges evitent les conditions longues']}
    ],
    exercises: [
      {title: 'Verification', desc: 'Ecris un programme qui verifie si un nombre est positif ou negatif.', hint: 'Utilise if (nombre >= 0).', correction: 'fun main() {\n  val n = -3\n  if (n >= 0) println("Positif")\n  else println("Negatif")\n}'},
      {title: 'Somme d\'une liste', desc: 'Cree une fonction qui calcule la somme d\'une liste d\'entiers.', hint: 'Utilise une boucle ou la fonction sum().', correction: 'fun somme(notes: List<Int>): Int {\n  return notes.sum()\n}\n\nfun main() {\n  println(somme(listOf(12, 15, 18)))\n}'},
      {title: 'Data class avec filtrage', desc: 'Cree une data class Produit avec un nom, un prix et une categorie. Cree une liste de produits et utilise filter et map pour afficher les noms des produits de la categorie "alimentaire" a moins de 5 euros.', hint: 'Utilise data class, filter { } et map { }. La syntaxe Kotlin permet de chainer les operations sur les collections.', correction: 'data class Produit(val nom: String, val prix: Double, val categorie: String)\n\nfun main() {\n  val produits = listOf(\n    Produit("Pain", 1.2, "alimentaire"),\n    Produit("Stylo", 2.5, "fourniture"),\n    Produit("Lait", 3.8, "alimentaire")\n  )\n  val resultats = produits\n    .filter { it.categorie == "alimentaire" && it.prix < 5.0 }\n    .map { it.nom }\n  println(resultats)\n}'},
      {title: 'When avec conditions', desc: 'Appreciation selon une note avec when.', hint: 'note >= 17 -> Excellent', correction: 'fun apprecier(note: Int): String {\n  return when {\n    note >= 17 -> "Excellent"\n    note >= 14 -> "Tres bien"\n    note >= 10 -> "Passable"\n    else -> "Insuffisant"\n  }\n}\nfun main() {\n  println(apprecier(15))\n  println(apprecier(8))\n}'}
    ],
    project: {desc: 'Cree une application console qui permet de gerer une liste de taches (ToDo).', steps: ['Cree une data class Task', 'Cree une liste mutable de taches', 'Ajoute des fonctions ajouter, supprimer, afficher', 'Cree un menu interactif dans le terminal', 'Teste toutes les operations']},
    quiz: [
      {q: 'Comment declare une variable en Kotlin ?', options: ['var','let','const'], answer: 0},
      {q: 'Quel mot-cle utilise pour une fonction ?', options: ['function','func','fun'], answer: 2},
      {q: 'Qu\'est-ce que la null safety ?', options: ['Aucun null permis','Le compilateur empeche les nulls non intendus','Les nulls sont automatiques'], answer: 1},
      {q: 'Quelle fonction cree une liste immuable ?', options: ['listOf()','mutableListOf()','arrayListOf()'], answer: 0},
      {q: 'Kotlin est le langage officiel de...', options: ['iOS','Android','Windows'], answer: 1},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','object','data class'], answer: 0},
      {q: 'Quelle expression remplace switch ?', options: ['if','when','match'], answer: 1},
      {q: 'Quel type est null-safe ?', options: ['String','String?','String!'], answer: 1},
      {q: 'Quel mot-cle cree un singleton ?', options: ['static','object','companion'], answer: 1},
      {q: 'Kotlin est cree par ?', options: ['Google','JetBrains','Oracle'], answer: 1},
      {q: 'Quel mot-cle cree une fonction ?', options: ['fun','function','def'], answer: 0},
      {q: 'Quel type est null safe ?', options: ['String?','String!','Nullable<String>'], answer: 0},
      {q: 'Quelle collection est mutable ?', options: ['MutableList','ArrayList','les deux'], answer: 2},
      {q: 'Quel mot-cle cree un objet ?', options: ['object','new','create'], answer: 0},
      {q: 'Quel mot-cle cree un data class ?', options: ['data class','class','data'], answer: 0},
      {q: 'Quelle expression lance une erreur ?', options: ['throw','raise','error'], answer: 0},
      {q: 'Quel mot-cle cree un companion ?', options: ['companion object','static','companion'], answer: 0},
      {q: 'Quel type est un intervalle ?', options: ['IntRange','Range','les deux'], answer: 2},
      {q: 'Quelle fonction convertit en String ?', options: ['toString()','as String','String()'], answer: 0},
      {q: 'Quel mot-cle cree une enumeration ?', options: ['enum class','enum','const'], answer: 0},
      {q: 'Quel mot-cle cree un sealed class ?', options: ['sealed class','abstract','final'], answer: 0},
      {q: 'Quelle fonction filtre une liste ?', options: ['filter','where','select'], answer: 0},
      {q: 'Quel mot-cle cree une extension ?', options: ['fun String.ext()','extension','extend'], answer: 0},
      {q: 'Kotlin est cree par ?', options: ['JetBrains','Google','Oracle'], answer: 0},
      {q: 'Quelle annee est sorti Kotlin ?', options: ['2011','2016','2018'], answer: 0},
    ],
  },
  {
    name: 'SQL',
    category: 'Donnees',
    accent: '#e38c00',
    level: 'Essentiel',
    intro: 'SQL est le langage des bases de donnees relationnelles. Il permet de stocker, interroger et manipuler des donnees.',
    why: 'C\'est un langage indispensable pour tout developpeur, quel que soit le domaine.',
    build: 'Tu peux creer des requetes, des rapports, des analyses de donnees et gerer des utilisateurs.',
    concepts: ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'JOIN'],
    code: 'CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name TEXT,\n  age INT\n);',
    help: 'Utilise DB Browser for SQLite, MySQL Workbench, ou la ligne de commande. Cree une table avec CREATE TABLE.',
    run: 'Execute le fichier .sql dans ton outil de base de donnees prefere. Les resultats s\'affichent dans un tableau.',
    basics: [
      {title: 'SELECT', text: 'SELECT recupere des donnees depuis une table.', code: 'SELECT * FROM users;'},
      {title: 'INSERT', text: 'INSERT ajoute une nouvelle ligne dans une table.', code: 'INSERT INTO users (name, age) VALUES (\'Alice\', 17);'},
      {title: 'WHERE', text: 'WHERE filtre les resultats selon une condition.', code: 'SELECT * FROM users WHERE age >= 18;'}
    ],
    examples: [
      {title: 'Filtrer des donnees', desc: 'Utilise WHERE pour filtrer les utilisateurs majeurs.', code: 'SELECT * FROM users WHERE age >= 18;', explanation: ['WHERE filtre les lignes selon une condition donnee', '>= est un operateur de comparaison (superieur ou egal)', 'SELECT * selectionne toutes les colonnes de la table', 'FROM users specifie la table a interroger', 'Les mots-cles SQL sont insensibles a la casse (where = WHERE)', 'Le point-virgule termine la requete SQL']},
      {title: 'Trier des resultats', desc: 'Utilise ORDER BY pour trier par age.', code: 'SELECT * FROM users ORDER BY age DESC;', explanation: ['ORDER BY trie les resultats selon une colonne', 'DESC signifie descendant (du plus grand au plus petit)', 'ASC signifie ascendant (du plus petit au plus grand, par defaut)', 'ORDER BY se place apres WHERE dans une requete', 'Tu peux trier sur plusieurs colonnes : ORDER BY age, nom', 'Les requetes SQL peuvent combiner WHERE et ORDER BY']},
      {title: 'GROUP BY et fonctions agregation', desc: 'Cree une table ventes et calcule le total par produit.', code: 'CREATE TABLE ventes (\n  produit TEXT,\n  quantite INT,\n  prix_unitaire REAL\n);\n\nINSERT INTO ventes VALUES\n  ("Pomme", 10, 1.5),\n  ("Banane", 5, 2.0),\n  ("Pomme", 3, 1.5);\n\nSELECT produit, SUM(quantite * prix_unitaire) AS total\nFROM ventes\nGROUP BY produit;', explanation: ['GROUP BY regroupe par produit', 'SUM() calcule la somme', 'AS cree un alias', 'Fonctions: SUM, COUNT, AVG, MIN, MAX', 'Un resultat par groupe', 'HAVING filtre les groupes']}
    ],
    exercises: [
      {title: 'Requete simple', desc: 'Ecris une requete qui affiche tous les utilisateurs de plus de 18 ans.', hint: 'Utilise SELECT * FROM ... WHERE ...', correction: 'SELECT * FROM users WHERE age > 18;'},
      {title: 'Ajouter des donnees', desc: 'Ajoute un nouvel etudiant avec une note dans la table etudiants.', hint: 'Utilise INSERT INTO ... VALUES (...)', correction: 'INSERT INTO etudiants (nom, note) VALUES (\'Alice\', 15);'},
      {title: 'Jointure et sous-requete', desc: 'Cree deux tables : etudiants (id, nom, classe_id) et classes (id, nom). Ecris une requete qui affiche le nom de chaque etudiant avec sa classe, puis une sous-requete qui trouve les etudiants dont la classe a plus de 3 etudiants.', hint: 'Utilise SELECT avec JOIN, puis une sous-requete avec GROUP BY et HAVING COUNT(*) > 3.', correction: '-- Table etudiants\nCREATE TABLE etudiants (id INT, nom TEXT, classe_id INT);\n-- Table classes\nCREATE TABLE classes (id INT, nom TEXT);\n\n-- Jointure\nSELECT e.nom, c.nom AS classe\nFROM etudiants e\nJOIN classes c ON e.classe_id = c.id;\n\n-- Sous-requete\nSELECT * FROM etudiants\nWHERE classe_id IN (\n  SELECT classe_id FROM etudiants\n  GROUP BY classe_id\n  HAVING COUNT(*) > 3\n);'},
      {title: 'Mettre a jour des donnees', desc: 'Ajoute une colonne email et met a jour un enregistrement.', hint: 'ALTER TABLE puis UPDATE ... SET ... WHERE ...', correction: 'ALTER TABLE etudiants ADD COLUMN email TEXT;\nUPDATE etudiants SET email = \'alice@mail.com\' WHERE nom = \'Alice\';\nSELECT * FROM etudiants;'}
    ],
    project: {desc: 'Cree une base de donnees pour une bibliotheque avec des tables pour les livres, les membres et les emprunts. Ecris des requetes pour trouver les livres disponibles et les membres avec des retards.', steps: ['Cree la table livres (id, titre, auteur, disponible)', 'Cree la table membres (id, nom, email)', 'Cree la table emprunts (id, livre_id, membre_id, date)', 'Insere des donnees d\'exemple', 'Ecris des requetes SELECT avec JOIN', 'Trouve les livres actuellement empruntes']},
    quiz: [
      {q: 'Quel mot-cle recupere des donnees ?', options: ['GET','FETCH','SELECT'], answer: 2},
      {q: 'Quel mot-cle filtre les resultats ?', options: ['FILTER','WHERE','IF'], answer: 1},
      {q: 'Quel type de jointure garde toutes les lignes des deux tables ?', options: ['INNER JOIN','LEFT JOIN','FULL OUTER JOIN'], answer: 2},
      {q: 'Quelle fonction compte les lignes ?', options: ['SUM()','COUNT()','TOTAL()'], answer: 1},
      {q: 'Quel mot-cle supprime une table ?', options: ['REMOVE','DELETE','DROP'], answer: 2},
      {q: 'Quel mot-cle ajoute des donnees ?', options: ['INSERT','ADD','PUT'], answer: 0},
      {q: 'Quel mot-cle modifie des donnees ?', options: ['UPDATE','CHANGE','MODIFY'], answer: 0},
      {q: 'Quel mot-cle supprime des donnees ?', options: ['REMOVE','DELETE','DROP'], answer: 1},
      {q: 'Quelle fonction donne le max ?', options: ['MAX()','HIGH()','TOP()'], answer: 0},
      {q: 'Quel mot-cle trie les resultats ?', options: ['SORT','ORDER BY','GROUP BY'], answer: 1},
      {q: 'Quel mot-cle cree une table ?', options: ['CREATE TABLE','NEW TABLE','ADD TABLE'], answer: 0},
      {q: 'Quel mot-cle ajoute une colonne ?', options: ['ADD COLUMN','ALTER TABLE ADD','MODIFY'], answer: 1},
      {q: 'Quelle fonction donne la moyenne ?', options: ['AVG()','MEAN()','MEDIAN()'], answer: 0},
      {q: 'Quel mot-cle supprime une table ?', options: ['DELETE TABLE','DROP TABLE','REMOVE TABLE'], answer: 1},
      {q: 'Quel mot-cle cree un index ?', options: ['CREATE INDEX','INDEX','ADD INDEX'], answer: 0},
      {q: 'Quel mot-cle definit une cle primaire ?', options: ['PRIMARY KEY','UNIQUE','KEY'], answer: 0},
      {q: 'Quel mot-cle definit une cle etrangere ?', options: ['FOREIGN KEY','REFERENCES','les deux'], answer: 2},
      {q: 'Quelle fonction compte les lignes ?', options: ['COUNT(*)','COUNT(1)','les deux'], answer: 2},
      {q: 'Quel mot-cle cree une vue ?', options: ['CREATE VIEW','VIEW','CREATE TABLE AS'], answer: 0},
      {q: 'Quel mot-cle definit une contrainte ?', options: ['CHECK','CONSTRAINT','les deux'], answer: 2},
      {q: 'Quelle jointure garde toutes les lignes ?', options: ['INNER JOIN','LEFT JOIN','RIGHT JOIN'], answer: 1},
      {q: 'Quelle fonction donne la date ?', options: ['NOW()','DATE()','CURRENT_DATE'], answer: 0},
      {q: 'Quel mot-cle vide une table ?', options: ['DELETE FROM','TRUNCATE','les deux'], answer: 2},
      {q: 'Quel mot-cle groupe les resultats ?', options: ['GROUP BY','ORDER BY','HAVING'], answer: 0},
      {q: 'Quelle fonction donne le minimum ?', options: ['MIN()','LOW()','SMALLEST()'], answer: 0},
    ],
  },
  {
    name: 'R',
    category: 'Donnees',
    accent: '#276dc3',
    level: 'Essentiel',
    intro: 'R est le langage de reference pour les statistiques, l\'analyse de donnees et la visualisation.',
    why: 'Il permet de manipuler facilement des tableaux de donnees et de creer des graphiques.',
    build: 'Tu peux creer des graphiques, des analyses statistiques, des rapports automatises et des modeles predictifs.',
    concepts: ['Vecteurs', 'Data frames', 'Fonctions', 'Graphiques', 'Packages'],
    code: 'prenom <- "Alice"\nage <- 17\nnotes <- c(12, 15, 18)\nprint(mean(notes))',
    help: 'Installe R depuis r-project.org. Execute Rscript fichier.R dans le terminal. Utilise RStudio pour une interface plus agreable.',
    run: 'Cree un fichier .R et execute Rscript fichier.R. Les resultats s\'affichent dans le terminal. Les packages s\'installent avec install.packages().',
    basics: [
      {title: 'Les vecteurs', text: 'Un vecteur est une liste de valeurs du meme type.', code: 'notes <- c(12, 15, 18)'},
      {title: 'Les data frames', text: 'Un data frame est un tableau de donnees.', code: 'df <- data.frame(nom = c("Alice", "Bob"), note = c(15, 12))'},
      {title: 'Les fonctions', text: 'Une fonction se definit avec function().', code: 'moyenne <- function(x) {\n  mean(x)\n}'}
    ],
    examples: [
      {title: 'Calculer une moyenne', desc: 'Calcule la moyenne d\'un vecteur de notes.', code: 'notes <- c(12, 15, 18)\nmoyenne <- mean(notes)\nprint(moyenne)', explanation: ['c() combine des valeurs en un vecteur en R', 'mean() calcule la moyenne arithmetique des valeurs', '<- est l operateur d assignation en R (equivalent a =)', 'print() affiche le resultat dans la console', 'Tu peux aussi utiliser sum(), min(), max() sur le vecteur', 'R est concu pour les operations statistiques sur des vecteurs']},
      {title: 'Creer un graphique', desc: 'Utilise plot() pour afficher un nuage de points.', code: 'x <- c(1, 2, 3, 4, 5)\ny <- c(2, 4, 6, 8, 10)\nplot(x, y)', explanation: ['plot() cree un nuage de points (scatter plot)', 'x contient les coordonnees horizontales des points', 'y contient les coordonnees verticales des points', 'Chaque paire (x, y) forme un point sur le graphique', 'R affiche le graphique dans une fenetre separee', 'Tu peux ajouter des titres avec main= et des couleurs avec col=']},
      {title: 'Facteurs et tableaux de contingence', desc: 'Cree un facteur a partir d un vecteur de couleurs.', code: 'couleurs <- c("rouge", "bleu", "rouge", "vert", "bleu", "rouge")\nfactor_couleurs <- factor(couleurs)\nprint(factor_couleurs)\nprint(table(factor_couleurs))', explanation: ['factor() cree un facteur', 'Facteurs stockent des categories', 'table() = tableau de contingence', 'Niveaux = valeurs uniques', 'Pour donnees categoriques', 'Les niveaux sont affiches']}
    ],
    exercises: [
      {title: 'Analyse de notes', desc: 'Cree un vecteur de notes et calcule la moyenne, la note min et max.', hint: 'Utilise mean(), min() et max().', correction: 'notes <- c(12, 15, 8, 18, 14)\nprint(paste("Moyenne:", mean(notes)))\nprint(paste("Min:", min(notes)))\nprint(paste("Max:", max(notes)))'},
      {title: 'Table de multiplication', desc: 'Cree une fonction qui affiche la table de multiplication d\'un nombre.', hint: 'Utilise une boucle for de 1 a 10.', correction: 'table_multiplication <- function(n) {\n  for (i in 1:10) {\n    print(paste(n, "x", i, "=", n * i))\n  }\n}\ntable_multiplication(7)'},
      {title: 'Analyse statistique d un data frame', desc: 'Utilise le jeu de donnees iris integre. Calcule la moyenne, mediane et ecart-type de la longueur des petales par espece. Cree un boxplot pour visualiser la distribution.', hint: 'Utilise aggregate() ou group_by() avec summarise(). Pour le graphique, utilise boxplot(Petal.Length ~ Species, data = iris).', correction: 'data(iris)\n\nstats <- aggregate(Petal.Length ~ Species, data = iris,\n  FUN = function(x) c(moyenne = mean(x), mediane = median(x), sd = sd(x)))\nprint(stats)\n\nboxplot(Petal.Length ~ Species, data = iris,\n  main = "Longueur des petales par espece",\n  col = c("lightblue", "lightgreen", "lightpink"))'},
      {title: 'Fonction personnalisee', desc: 'Retourne moyenne, mediane et ecart-type d un vecteur.', hint: 'function(x) { return(list(...)) }', correction: 'statistiques <- function(x) {\n  return(list(\n    moyenne = mean(x),\n    mediane = median(x),\n    ecart_type = sd(x)\n  ))\n}\nv <- c(10, 12, 15, 18, 20)\nresultat <- statistiques(v)\nprint(resultat)'}
    ],
    project: {desc: 'Analyse un jeu de donnees integrer (iris, mtcars) et cree un rapport avec des graphiques et des statistiques descriptives.', steps: ['Charge le jeu de donnees iris', 'Affiche un resume avec summary()', 'Cree un histogramme avec hist()', 'Cree un nuage de points avec plot()', 'Calcule des correlations', 'Exporte les graphiques en PNG']},
    quiz: [
      {q: 'Comment cree un vecteur en R ?', options: ['c()','v()','list()'], answer: 0},
      {q: 'Quelle fonction lit un fichier CSV ?', options: ['read.csv()','open.csv()','load.csv()'], answer: 0},
      {q: 'Quel symbole assigne une valeur ?', options: ['=','< -','->'], answer: 1},
      {q: 'Quelle bibliotheque cree des graphiques ?', options: ['matplotlib','ggplot2','plotly'], answer: 1},
      {q: 'Quel type stocke des donnees categoriques ?', options: ['vector','factor','list'], answer: 1},
      {q: 'Quelle fonction cree un vecteur ?', options: ['vector()','c()','list()'], answer: 1},
      {q: 'Quel symbole commente ?', options: ['//','#','/*'], answer: 1},
      {q: 'Quelle fonction cree un graphique ?', options: ['plot()','chart()','graph()'], answer: 0},
      {q: 'Quel type stocke des categories ?', options: ['factor','vector','list'], answer: 0},
      {q: 'Quel symbole d\'acces aux colonnes ?', options: ['.','$','->'], answer: 1},
      {q: 'Quelle fonction lit un CSV ?', options: ['read.csv()','read_csv()','csv.read()'], answer: 0},
      {q: 'Quel type stocke un tableau ?', options: ['vector','matrix','les deux'], answer: 2},
      {q: 'Quel symbole assigne une valeur ?', options: ['<-','=','->'], answer: 0},
      {q: 'Quelle fonction calcule la moyenne ?', options: ['mean()','average()','median()'], answer: 0},
      {q: 'Quelle lib cree des graphiques ?', options: ['ggplot2','plotly','matplotlib'], answer: 0},
      {q: 'Quelle fonction affiche un message ?', options: ['print()','cat()','les deux'], answer: 2},
      {q: 'Quel type stocke des facteurs ?', options: ['factor','nominal','category'], answer: 0},
      {q: 'Quelle fonction cree un histogramme ?', options: ['hist()','barplot()','plot()'], answer: 0},
      {q: 'Quel symbole commente ?', options: ['#','//','/*'], answer: 0},
      {q: 'Quelle fonction calcule la somme ?', options: ['sum()','total()','add()'], answer: 0},
      {q: 'Quel type stocke des dates ?', options: ['Date','POSIXct','les deux'], answer: 2},
      {q: 'Quelle fonction cree un dataframe ?', options: ['data.frame()','DataFrame()','table()'], answer: 0},
      {q: 'Quelle fonction donne la longueur ?', options: ['length()','nrow()','size()'], answer: 0},
      {q: 'Quel package fait du tidy data ?', options: ['dplyr','tidyr','tidyverse'], answer: 2},
      {q: 'R est utilise pour ?', options: ['Stats','Data Science','les deux'], answer: 2},
    ],
  },
  {
    name: 'Dart',
    category: 'Applications',
    accent: '#0175c2',
    level: 'Essentiel',
    intro: 'Dart est le langage de Flutter pour creer des apps mobiles, web et desktop avec une seule base de code.',
    why: 'Il est optimise pour les UI reactives et compile en code natif performant.',
    build: 'Tu peux creer une app mobile, une app web, une app desktop ou un jeu.',
    concepts: ['Widgets', 'State', 'Async', 'Streams', 'Classes'],
    code: 'void main() {\n  print("Bonjour Dart");\n}',
    help: 'Installe Flutter (qui inclut Dart). Execute dart run fichier.dart. Pour les apps Flutter, utilise flutter run.',
    run: 'Cree un fichier .dart et execute dart run fichier.dart. Pour Flutter, cree un projet avec flutter create.',
    basics: [
      {title: 'Programme de base', text: 'Tout programme Dart commence par main().', code: 'void main() {\n  print("Bonjour");\n}'},
      {title: 'Les variables', text: 'final pour une constante, var pour une variable.', code: 'final prenom = "Alice";\nvar age = 17;'},
      {title: 'Les types', text: 'Dart est type, mais le type peut etre infere.', code: 'String nom = "Alice";\nint age = 17;'}
    ],
    examples: [
      {title: 'Fonction', desc: 'Cree une fonction typee.', code: 'int addition(int a, int b) {\n  return a + b;\n}\n\nvoid main() {\n  print(addition(3, 5));\n}', explanation: ['int est le type de retour de la fonction', 'Les parametres a et b sont de type int', 'void main() est le point d entree du programme Dart', 'print() affiche le resultat dans la console', 'Les accolades { } delimitent le corps de la fonction', 'Dart est un langage type mais le type peut etre infere avec var']},
      {title: 'Boucle for', desc: 'Parcourt une liste avec une boucle.', code: 'var notes = [12, 16, 18];\nfor (var note in notes) {\n  print(note);\n}', explanation: ['for-in parcourt chaque element de la liste un par un', 'var note recoit la valeur de l element courant', 'Les listes se declarent avec des crochets [ ]', 'Le bloc sous for est entre accolades { }', 'Dart est fortement type : var deduit automatiquement le type', 'Tu peux aussi utiliser forEach() pour parcourir une liste']},
      {title: 'Map avec listes', desc: 'Cree une map de noms vers listes de notes et affiche les moyennes.', code: 'void main() {\n  var notes = {\n    "Alice": [12, 15, 18],\n    "Bob": [8, 14, 11]\n  };\n  notes.forEach((nom, liste) {\n    double moyenne = liste.reduce((a, b) => a + b) / liste.length;\n    print("$nom: ${moyenne.toStringAsFixed(1)}");\n  });\n}', explanation: ['Map avec cles string vers listes', 'forEach parcourt chaque paire', 'reduce() additionne la liste', 'toStringAsFixed() formate', 'Cles uniques dans une map', 'Listes typees par inference']}
    ],
    exercises: [
      {title: 'Message', desc: 'Cree un programme qui stocke ton prenom dans une variable et l\'affiche.', hint: 'Utilise final et print().', correction: 'void main() {\n  final prenom = "Alice";\n  print(prenom);\n}'},
      {title: 'Somme', desc: 'Cree une fonction qui additionne deux nombres.', hint: 'Declare les parametres avec leurs types.', correction: 'int somme(int a, int b) {\n  return a + b;\n}\n\nvoid main() {\n  print(somme(5, 3));\n}'},
      {title: 'Classe avec async/await', desc: 'Cree une classe Utilisateur avec un nom et un email. Ajoute une methode asynchrone fetchDonnees() qui simule un appel API avec Future.delayed(). Dans main, cree un utilisateur, appelle la methode avec await et affiche les donnees.', hint: 'Utilise Future<void> et async/await. Future.delayed(Duration(seconds: 2), () { ... }) simule un delai.', correction: 'class Utilisateur {\n  String nom;\n  String email;\n  Utilisateur(this.nom, this.email);\n\n  Future<void> fetchDonnees() async {\n    print("Chargement des donnees de $nom...");\n    await Future.delayed(Duration(seconds: 2));\n    print("Donnees chargees pour $nom ($email)");\n  }\n}\n\nFuture<void> main() async {\n  var user = Utilisateur("Alice", "alice@mail.com");\n  await user.fetchDonnees();\n}'},
      {title: 'Convertir euros en dollars', desc: 'Convertit une liste de prix avec map().', hint: 'euros.map((e) => e * 1.10).toList().', correction: 'void main() {\n  var euros = [10.0, 25.0, 50.0];\n  var dollars = euros.map((e) => e * 1.10).toList();\n  print("EUR: $euros");\n  print("USD: $dollars");\n}'}
    ],
    project: {desc: 'Cree une calculatrice en console avec Dart : l\'utilisateur choisit une operation et entre deux nombres.', steps: ['Cree les fonctions de calcul', 'Affiche un menu a l\'utilisateur', 'Lit le choix et les nombres', 'Effectue le calcul et affiche le resultat', 'Boucle jusqu\'a ce que l\'utilisateur quitte']},
    quiz: [
      {q: 'Quel mot-cle declare une variable immutable ?', options: ['var','final','let'], answer: 1},
      {q: 'Quel type retourne une fonction asynchrone ?', options: ['async','Future','Promise'], answer: 1},
      {q: 'Quelle fonction affiche en console ?', options: ['print()','echo()','log()'], answer: 0},
      {q: 'Quel framework mobile utilise Dart ?', options: ['React Native','Flutter','Xamarin'], answer: 1},
      {q: 'Comment cree une liste en Dart ?', options: ['[]','{}','()'], answer: 0},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','type','object'], answer: 0},
      {q: 'Quel type accepte tout ?', options: ['any','dynamic','Object'], answer: 1},
      {q: 'Quelle fonction est le point d\'entree ?', options: ['start()','init()','main()'], answer: 2},
      {q: 'Quel framework mobile pour Dart ?', options: ['Flutter','React Native','Ionic'], answer: 0},
      {q: 'Quel operateur est null-safe ?', options: ['?.','??','!.'], answer: 0},
      {q: 'Quel mot-cle cree une fonction ?', options: ['void','Function','type nom()'], answer: 2},
      {q: 'Quel type accepte tout ?', options: ['dynamic','Object','les deux'], answer: 2},
      {q: 'Quelle collection est une liste ?', options: ['List','Array','les deux'], answer: 0},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','type','struct'], answer: 0},
      {q: 'Quel mot-cle cree un mixin ?', options: ['mixin','with','trait'], answer: 0},
      {q: 'Quel operateur est la cascade ?', options: ['..','.','->'], answer: 0},
      {q: 'Quel mot-cle cree un Future ?', options: ['Future','async','Promise'], answer: 0},
      {q: 'Quelle fonction convertit en String ?', options: ['toString()','as String','String()'], answer: 0},
      {q: 'Quel type est un entier ?', options: ['int','Int','integer'], answer: 0},
      {q: 'Quelle collection est une map ?', options: ['Map','Dictionary','HashMap'], answer: 0},
      {q: 'Quel mot-cle cree une enumeration ?', options: ['enum','const','type'], answer: 0},
      {q: 'Quelle fonction affiche en console ?', options: ['print()','log()','echo()'], answer: 0},
      {q: 'Quel mot-cle cree un constructeur ?', options: ['Class()','constructor','new'], answer: 0},
      {q: 'Quel fichier contient les dependances ?', options: ['pubspec.yaml','package.json','config.yaml'], answer: 0},
      {q: 'Dart est cree par ?', options: ['Google','Oracle','Facebook'], answer: 0},
    ],
  },
  {
    name: 'Bash',
    category: 'Systeme',
    accent: '#4eaa25',
    level: 'Debutant',
    intro: 'Bash est le langage du terminal Linux/Mac. Il automatise les taches, manipule les fichiers et lance des programmes.',
    why: 'C\'est indispensable pour tout developpeur qui travaille sur un serveur ou en ligne de commande.',
    build: 'Tu peux creer des scripts d\'installation, des sauvegardes automatiques, des renommages en lot.',
    concepts: ['Variables', 'Conditions', 'Boucles', 'Fonctions', 'Redirections'],
    code: '#!/usr/bin/env bash\necho "Bonjour Bash"',
    help: 'Cree un fichier .sh, rends-le executable avec chmod +x fichier.sh, execute avec ./fichier.sh.',
    run: 'Dans le terminal, execute bash fichier.sh ou rends le fichier executable avec chmod +x puis execute-le directement.',
    basics: [
      {title: 'Les variables', text: 'Les variables n\'ont pas de type et s\'utilisent avec $.', code: 'prenom="Alice"\necho "$prenom"'},
      {title: 'Les conditions', text: 'if se termine par fi et utilise crochets.', code: 'if [ "$age" -ge 18 ]; then\n  echo "Majeur"\nfi'},
      {title: 'Les boucles', text: 'for parcourt une liste de valeurs.', code: 'for i in 1 2 3; do\n  echo $i\ndone'}
    ],
    examples: [
      {title: 'Afficher un message', desc: 'Utilise echo pour afficher du texte.', code: 'echo "Bonjour Bash !"', explanation: ['echo affiche du texte dans le terminal', 'Les guillemets preservent les espaces dans le message', 'Le shebang #!/usr/bin/env bash indique l interpreteur', 'Rends le script executable avec chmod +x fichier.sh', 'Execute le script avec ./fichier.sh ou bash fichier.sh', 'echo ajoute automatiquement un retour a la ligne']},
      {title: 'Renommer des fichiers', desc: 'Boucle sur des fichiers .txt et les renomme en .bak.', code: 'for f in *.txt; do\n  mv "$f" "${f%.txt}.bak"\ndone', explanation: ['${f%.txt} enleve le suffixe .txt du nom de fichier', 'mv deplace ou renomme un fichier', 'for f in *.txt boucle sur tous les fichiers .txt du dossier', '\"$f\" est le nom original du fichier (entre guillemets pour la securite)', 'mv \"$f\" \"${f%.txt}.bak\" renomme .txt en .bak', 'Les guillemets autour de $f evite les problemes avec les espaces']},
      {title: 'Lire un fichier ligne par ligne', desc: 'Lit un fichier et affiche chaque ligne numerotee.', code: '#!/usr/bin/env bash\ncompteur=1\nwhile IFS= read -r ligne; do\n  echo "$compteur: $ligne"\n  ((compteur++))\ndone < "mon_fichier.txt"', explanation: ['while IFS= read -r lit chaque ligne', 'IFS= preserve les espaces', '-r empeche interpretation \\', '((compteur++)) incremente', '< redirige le fichier en entree', '$compteur: $ligne affiche le numero']}
    ],
    exercises: [
      {title: 'Afficher un fichier', desc: 'Ecris un script qui affiche le contenu d\'un fichier passe en argument.', hint: 'Utilise cat $1 pour lire le premier argument.', correction: '#!/usr/bin/env bash\ncat "$1"'},
      {title: 'Compteur', desc: 'Cree un script qui compte de 1 a 10.', hint: 'Utilise une boucle for avec seq 1 10.', correction: '#!/usr/bin/env bash\nfor i in $(seq 1 10); do\n  echo $i\ndone'},
      {title: 'Script de sauvegarde avec fonctions', desc: 'Cree un script qui prend un dossier en argument et cree une archive .tar.gz horodatee. Ajoute trois fonctions : usage() qui affiche l aide, verifier_dossier() qui verifie que le dossier existe, et sauvegarder() qui compresse.', hint: 'Utilise $1 pour l argument, [[ -d $1 ]] pour verifier, et tar -czf pour compresser. La date avec date +%Y%m%d_%H%M%S.', correction: '#!/usr/bin/env bash\n\nusage() {\n  echo "Usage: $0 <dossier>"\n  exit 1\n}\n\nverifier_dossier() {\n  if [[ ! -d "$1" ]]; then\n    echo "Erreur: $1 n existe pas"\n    exit 1\n  fi\n}\n\nsauvegarder() {\n  local nom="backup_$(date +%Y%m%d_%H%M%S).tar.gz"\n  tar -czf "$nom" "$1"\n  echo "Sauvegarde creee : $nom"\n}\n\n[[ $# -eq 0 ]] && usage\nverifier_dossier "$1"\nsauvegarder "$1"'},
      {title: 'Verifier si un fichier existe', desc: 'Verifie l existence d un fichier et affiche sa taille.', hint: '[[ -f "$1" ]] et stat.', correction: '#!/usr/bin/env bash\nif [[ -z "$1" ]]; then echo "Usage: $0 <fichier>"; exit 1; fi\nif [[ ! -f "$1" ]]; then echo "Inexistant"; exit 1; fi\ntaille=$(stat -f%z "$1" 2>/dev/null)\necho "Taille: $taille octets"'}
    ],
    project: {desc: 'Cree un script de sauvegarde qui compresse un dossier en .tar.gz avec un nom contenant la date du jour.', steps: ['Demande le dossier a sauvegarder', 'Cree un nom de fichier avec la date', 'Utilise tar pour compresser', 'Affiche un message de confirmation', 'Teste le script sur un dossier exemple']},
    quiz: [
      {q: 'Quel shebang pour un script Bash ?', options: ['#!/bin/bash','#!/usr/bin/python','#!bash'], answer: 0},
      {q: 'Quelle commande affiche du texte ?', options: ['print','echo','write'], answer: 1},
      {q: 'Comment commenter une ligne ?', options: ['//','/* */','#'], answer: 2},
      {q: 'Quel symbole accede a une variable ?', options: ['@','$','%'], answer: 1},
      {q: 'Quelle structure execute une boucle ?', options: ['for','if','case'], answer: 0},
      {q: 'Quelle commande liste les fichiers ?', options: ['dir','ls','list'], answer: 1},
      {q: 'Quelle commande change de dossier ?', options: ['cd','chdir','move'], answer: 0},
      {q: 'Quel symbole execute en fond ?', options: ['&','%','@'], answer: 0},
      {q: 'Quelle commande cherche un mot ?', options: ['find','grep','search'], answer: 1},
      {q: 'Quel fichier contient les alias ?', options: ['.bashrc','.profile','.env'], answer: 0},
      {q: 'Quelle commande cree un dossier ?', options: ['mkdir','md','create'], answer: 0},
      {q: 'Quelle commande copie un fichier ?', options: ['cp','copy','dup'], answer: 0},
      {q: 'Quelle commande deplace un fichier ?', options: ['mv','move','rename'], answer: 0},
      {q: 'Quelle commande supprime un fichier ?', options: ['rm','del','remove'], answer: 0},
      {q: 'Quelle commande cherche un fichier ?', options: ['find','search','locate'], answer: 0},
      {q: 'Quelle commande donne les permissions ?', options: ['chmod','perm','access'], answer: 0},
      {q: 'Quelle commande affiche le chemin ?', options: ['pwd','path','cwd'], answer: 0},
      {q: 'Quelle commande tue un processus ?', options: ['kill','stop','end'], answer: 0},
      {q: 'Quelle commande lit un fichier ?', options: ['cat','read','type'], answer: 0},
      {q: 'Quelle commande compte les lignes ?', options: ['wc -l','count','lines'], answer: 0},
      {q: 'Quelle commande cherche un mot ?', options: ['grep','find','search'], answer: 0},
      {q: 'Quelle variable contient le PATH ?', options: ['$PATH','$HOME','$USER'], answer: 0},
      {q: 'Quel symbole fait un pipe ?', options: ['|','>','<'], answer: 0},
      {q: 'Quelle commande archive des fichiers ?', options: ['tar','zip','gzip'], answer: 0},
      {q: 'Quelle commande montre les processus ?', options: ['ps','top','les deux'], answer: 2},
    ],
  },
  {
    name: 'Lua',
    category: 'Systeme',
    accent: '#000080',
    level: 'Essentiel',
    intro: 'Lua est un langage leger et rapide, utilise comme langage de script dans les jeux (Roblox, WoW), Redis et Nginx.',
    why: 'Il est petit, simple a integrer et tres performant.',
    build: 'Tu peux creer un script de jeu, une configuration, un plugin ou un outil integre.',
    concepts: ['Tables', 'Fonctions', 'Metatables', 'Coroutines', 'Modules'],
    code: 'local prenom = "Alice"\nprint("Bonjour " .. prenom)',
    help: 'Installe Lua depuis lua.org. Execute lua fichier.lua dans le terminal. Les bibliotheques sont minimes mais efficaces.',
    run: 'Cree un fichier .lua et execute lua fichier.lua dans le terminal.',
    basics: [
      {title: 'Les variables', text: 'local cree une variable locale.', code: 'local prenom = "Alice"\nprint(prenom)'},
      {title: 'Les tables', text: 'Les tables servent a la fois de listes et de dictionnaires.', code: 'local fruits = {"Pomme", "Banane"}\nprint(fruits[1])'},
      {title: 'Les fonctions', text: 'Une fonction se definit avec function.', code: 'local function saluer(nom)\n  print("Bonjour " .. nom)\nend'}
    ],
    examples: [
      {title: 'Afficher un message', desc: 'Utilise print() pour afficher un message.', code: 'print("Bonjour Lua !")', explanation: ['.. est l operateur de concatenation de chaines en Lua', 'print() affiche le resultat dans la console', 'Les guillemets droits entourent les chaines de caracteres', 'Le point-virgule est optionnel en Lua', 'Les variables sont globales par defaut, utilisez local pour les rendres locales', 'Lua a ete concu pour etre integre dans d autres applications']},
      {title: 'Parcourir une table', desc: 'Utilise ipairs pour parcourir une liste.', code: 'local notes = {12, 16, 18}\nfor i, note in ipairs(notes) do\n  print(note)\nend', explanation: ['ipairs parcourt les elements d\'un tableau de l\'index 1 a n', 'i recoit l\'index numerique de chaque element', 'note recoit la valeur a chaque position', 'ipairs s\'arrete au premier nil trouve', 'pairs() parcourt toutes les cles d\'une table (pas seulement les indices)', 'Les indices en Lua commencent a 1 (pas a 0 comme dans la plupart des langages)']},
      {title: 'Table comme dictionnaire', desc: 'Cree une table avec des notes et itere avec pairs().', code: 'local notes = {\n  Alice = 15,\n  Bob = 12,\n  Charlie = 18\n}\nfor nom, note in pairs(notes) do\n  print(nom .. " a " .. note .. " sur 20")\nend', explanation: ['{ } cree une table', 'Alice = 15 equivaut a ["Alice"]=15', 'pairs() parcourt les paires', '.. concatene les chaines', 'Ordre non garanti avec pairs()', 'Les cles sont des strings']}
    ],
    exercises: [
      {title: 'Message personnalise', desc: 'Cree un programme qui stocke ton prenom dans une variable et l\'affiche.', hint: 'Utilise local et print().', correction: 'local prenom = "Alice"\nprint("Bonjour " .. prenom)'},
      {title: 'Pair ou impair', desc: 'Verifie si un nombre est pair ou impair.', hint: 'Utilise % 2 == 0 pour tester.', correction: 'local n = 7\nif n % 2 == 0 then\n  print("Pair")\nelse\n  print("Impair")\nend'},
      {title: 'Metatables : operateurs personnalises', desc: 'Cree une table qui represente un vecteur 2D (x, y). Ajoute une metatable qui permet d additionner deux vecteurs avec l operateur + et de les afficher avec tostring().', hint: 'Utilise setmetatable(), __add pour l addition et __tostring pour l affichage. Chaque vecteur est une table {x = ..., y = ...}.', correction: 'local Vector = {}\nVector.__index = Vector\n\nfunction Vector:new(x, y)\n  return setmetatable({x = x, y = y}, self)\nend\n\nVector.__add = function(a, b)\n  return Vector:new(a.x + b.x, a.y + b.y)\nend\n\nVector.__tostring = function(v)\n  return "(" .. v.x .. ", " .. v.y .. ")"\nend\n\nlocal v1 = Vector:new(1, 2)\nlocal v2 = Vector:new(3, 4)\nlocal v3 = v1 + v2\nprint(v1 .. " + " .. v2 .. " = " .. v3)'},
      {title: 'Mots uniques', desc: 'Filtre les doublons d une liste.', hint: 'Table comme ensemble: vu[mot] = true.', correction: 'local function mots_uniques(liste)\n  local vu, res = {}, {}\n  for _, mot in ipairs(liste) do\n    if not vu[mot] then vu[mot] = true; table.insert(res, mot) end\n  end\n  return res\nend\nlocal mots = {"a", "b", "a", "c"}\nfor _, m in ipairs(mots_uniques(mots)) do print(m) end'}
    ],
    project: {desc: 'Cree un petit jeu de devinettes : l\'ordinateur choisit un nombre aleatoire entre 1 et 100 et l\'utilisateur doit le trouver.', steps: ['Utilise math.random pour generer un nombre', 'Boucle jusqu\'a ce que l\'utilisateur trouve', 'Compare la proposition et donne un indice', 'Compte le nombre de tentatives', 'Affiche un message de felicitation']},
    quiz: [
      {q: 'Quel mot-cle cree une variable locale ?', options: ['var','let','local'], answer: 2},
      {q: 'Quel operateur concatene des chaines ?', options: ['+','.','..'], answer: 2},
      {q: 'Quelle fonction affiche en console ?', options: ['print()','echo()','log()'], answer: 0},
      {q: 'Quel indice commence un tableau en Lua ?', options: ['0','1','-1'], answer: 1},
      {q: 'Quelle structure de donnee est universelle en Lua ?', options: ['Array','Table','List'], answer: 1},
      {q: 'Quel type est un nombre en Lua ?', options: ['int','number','float'], answer: 1},
      {q: 'Quel indice commence une table ?', options: ['0','1','-1'], answer: 1},
      {q: 'Quelle structure est conditionnelle ?', options: ['if','when','switch'], answer: 0},
      {q: 'Quel operateur concatene ?', options: ['+','..','.'], answer: 1},
      {q: 'Lua est souvent utilise dans ?', options: ['Les jeux','Le web','Les apps'], answer: 0},
      {q: 'Quel type est une table ?', options: ['table','array','object'], answer: 0},
      {q: 'Quelle boucle parcourt une table ?', options: ['for k,v in pairs()','for i=1,#t','les deux'], answer: 2},
      {q: 'Quel mot-cle cree une fonction ?', options: ['function','func','def'], answer: 0},
      {q: 'Quel type est un booléen ?', options: ['boolean','bool','Boolean'], answer: 0},
      {q: 'Quelle fonction donne la longueur ?', options: ['#','len()','length()'], answer: 0},
      {q: 'Quel mot-cle cree une condition ?', options: ['if','when','switch'], answer: 0},
      {q: 'Quel operateur concatene ?', options: ['..','+','&'], answer: 0},
      {q: 'Quelle valeur est \'rien\' ?', options: ['nil','null','none'], answer: 0},
      {q: 'Quel mot-cle cree une table ?', options: ['{}','table.new()','[]'], answer: 0},
      {q: 'Quelle boucle est conditionnelle ?', options: ['while','repeat','les deux'], answer: 2},
      {q: 'Quel operateur est ET logique ?', options: ['and','&&','et'], answer: 0},
      {q: 'Quelle fonction convertit en nombre ?', options: ['tonumber()','toint()','Number()'], answer: 0},
      {q: 'Quel mot-cle cree une classe ?', options: ['class','table + metatable','struct'], answer: 1},
      {q: 'Quelle fonction affiche ?', options: ['print()','echo()','log()'], answer: 0},
      {q: 'Lua est rapide car ?', options: ['Interprete leger','Compile en C','JIT'], answer: 0},
    ],
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
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function findLanguageFromHash() {
  const slug = location.hash.replace("#langage/", "");
  return languages.find(language => slugify(language.name) === slug);
}

const helpRunGuides = {
  html: {
    file: "index.html",
    command: "Ouvre le fichier dans un navigateur (double-clic)",
    tips: [
      "Tape ! puis Enter dans VS Code pour generer la structure de base HTML.",
      "Les balises HTML s'ecrivent entre < > et se ferment souvent avec </ >.",
      "Utilise <h1> a <h6> pour les titres, <p> pour les paragraphes.",
      "Pour une image, utilise <img src=\"photo.jpg\" alt=\"description\">.",
      "Tout le contenu visible doit etre entre <body> et </body>."
    ],
    starter: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ma page</title>
</head>
<body>
  <h1>Bonjour !</h1>
  <p>Ceci est ma premiere page HTML.</p>
  <img src="photo.jpg" alt="Ma photo">
</body>
</html>`
  },
  css: {
    file: "style.css",
    command: "Lie le fichier CSS à ton HTML avec <link> puis actualise le navigateur",
    tips: [
      "Un sélecteur cible les éléments HTML : h1 { color: blue; }",
      "Utilise class=\"nom\" en HTML et .nom en CSS pour cibler une classe.",
      "Flexbox aligne les éléments : display: flex; justify-content: center;",
      "Les media queries adaptent le style selon la taille de l'écran.",
      "Les transitions ajoutent des animations au survol : transition: 0.3s;"
    ],
    starter: `/* style.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
}

.carte {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.carte:hover {
  transform: scale(1.05);
}`
  },
  javascript: {
    file: "script.js",
    command: "Ajoute <script src=\"script.js\"></script> dans le HTML puis actualise la page",
    tips: [
      "Utilise let pour déclarer une variable qui peut changer.",
      "Les fonctions se définissent avec function nom() { ... }",
      "document.getElementById('id') sélectionne un élément HTML.",
      "addEventListener réagit aux clics, soumissions, etc.",
      "console.log() affiche dans la console du navigateur (F12)."
    ],
    starter: `// script.js
let compteur = 0;
const bouton = document.getElementById("monBouton");
const affichage = document.getElementById("compteur");

bouton.addEventListener("click", function() {
  compteur++;
  affichage.textContent = compteur;
});`
  },
  typescript: {
    file: "main.ts",
    command: "Compile avec tsc main.ts puis exécute le fichier .js généré",
    tips: [
      "Déclare le type des variables : let nom: string = \"Alice\";",
      "Les interfaces décrivent la forme d'un objet.",
      "Utilise : type pour les paramètres de fonction.",
      "Le compilateur tsc signale les erreurs de type avant l'exécution.",
      "npm install -g typescript installe le compilateur globalement."
    ],
    starter: `// main.ts
interface Personne {
  nom: string;
  age: number;
}

function saluer(p: Personne): string {
  return "Bonjour " + p.nom + ", tu as " + p.age + " ans";
}

const utilisateur: Personne = { nom: "Alice", age: 17 };
console.log(saluer(utilisateur));`
  },
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
      ${guide.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}
    </div>

    <pre><code>${escapeHtml(guide.starter)}</code></pre>
  </div>
</section>

<section class="lesson-block full">
  <h3>▶️ Comment lancer le programme ?</h3>

  <div class="info-card">
    <p>
      Enregistre ton fichier sous le nom <strong>${escapeHtml(guide.file)}</strong>.
    </p>

    <p>
      Dans le terminal de VS Code, exécute :
    </p>

    <pre><code>${escapeHtml(guide.command)}</code></pre>
  </div>
</section>
`;
}

// Theme toggle
const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
if (savedTheme === "dark") toggle.classList.add("dark");

toggle.addEventListener("click", () => {
  toggle.classList.add("pressed");
  const isDark = toggle.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  const overlay = document.getElementById("themeOverlay");
  overlay.classList.add("active");
  setTimeout(() => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggle.classList.toggle("dark");
    overlay.classList.remove("active");
    setTimeout(() => toggle.classList.remove("pressed"), 200);
  }, 450);
});

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

function shufflePick(arr, n) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function pickNewQuestions() {
  const pool = window._quizPool;
  if (!pool) return [];
  if (!window._quizUsed) window._quizUsed = [];
  // Filter out already used questions
  const available = pool.filter((_, idx) => !window._quizUsed.includes(idx));
  // If not enough available, reset the tracker
  const availablePool = available.length >= 5 ? available : pool;
  if (available.length < 5) window._quizUsed = [];
  // Pick 5 random from available pool
  const picked = shufflePick(availablePool, 5);
  // Mark picked indices as used
  picked.forEach(q => {
    const idx = pool.indexOf(q);
    if (idx !== -1 && !window._quizUsed.includes(idx)) {
      window._quizUsed.push(idx);
    }
  });
  window._quizQuestions = picked;
  return picked;
}

function renderLesson(language) {
  document.title = `${escapeHtml(language.name)} - CodeLab`;
  homePage.classList.add("is-hidden");
  lessonPage.classList.remove("is-hidden");
  window._quizPool = language.quiz;
  window._quizUsed = []; // reset tracker for new lesson
  window._quizQuestions = null;

  let html = `
    <div class="lesson-inner page-enter" style="--accent: ${escapeHtml(language.accent)}">
      <a class="back-link" href="#explorer">← Retour aux langages</a>

      <div class="lesson-hero">
        <div class="lesson-title">
          <span class="lesson-kicker">${escapeHtml(language.category)} - ${escapeHtml(language.level)}</span>
          <h2>${escapeHtml(language.name)}</h2>
          <p>${escapeHtml(language.intro)}</p>
        </div>

        <aside class="lesson-side">
          <div class="stat" style="--i: 0">
            <strong>${escapeHtml(language.concepts.length)}</strong>
            <span>notions cles</span>
          </div>
          <div class="stat" style="--i: 1">
            <strong>${escapeHtml(language.level)}</strong>
            <span>niveau conseille</span>
          </div>
          <div class="stat" style="--i: 2">
            <strong>${escapeHtml(language.category)}</strong>
            <span>domaine principal</span>
          </div>
        </aside>
      </div>

      <div class="lesson-content">
        <section class="lesson-block">
          <h3>Pourquoi apprendre ${escapeHtml(language.name)} ?</h3>
          <p>${escapeHtml(language.why)}</p>
        </section>

        <section class="lesson-block">
          <h3>Ce que tu peux creer</h3>
          <p>${escapeHtml(language.build)}</p>
        </section>

        <section class="lesson-block full">
          <h3>Notions importantes</h3>
          <ul class="pill-list">
            ${language.concepts.map(concept => `<li>${escapeHtml(concept)}</li>`).join("")}
          </ul>
        </section>

        <section class="lesson-block full">
          <h3>Premier exemple</h3>
          <pre><code>${escapeHtml(language.code)}</code></pre>
        </section>

        <section class="lesson-block full">
          <h3>Exemples</h3>
          <div class="example-grid">
            ${language.examples.map((ex, i) => `
            <div class="code-card">
              <h4>${escapeHtml(ex.title)}</h4>
              <p>${escapeHtml(ex.desc)}</p>
              <details>
                <summary>Voir le code</summary>
                <pre><code>${escapeHtml(ex.code)}</code></pre>
                <div class="pill-list">
                  ${(ex.explanation || []).map(expl => `<li>${escapeHtml(expl)}</li>`).join("")}
                </div>
              </details>
            </div>`).join("")}
          </div>
        </section>

        <section class="lesson-block full">
          <h3>Exercices</h3>
          ${language.exercises.map((ex, i) => `
          <div class="exercise-card">
            <h4>${i + 1}. ${escapeHtml(ex.title)}</h4>
            <p>${escapeHtml(ex.desc)}</p>
            ${ex.hint ? `<details><summary>💡 Indice</summary><p>${escapeHtml(ex.hint)}</p></details>` : ""}
            <button class="correction-btn" onclick="toggleCorrection(this)">Voir la correction</button>
            <div class="correction-content">
              <pre><code>${escapeHtml(ex.correction)}</code></pre>
            </div>
          </div>`).join("")}
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
${(() => {
  if (!language.quiz) return '';
  const quizQuestions = window._quizQuestions || pickNewQuestions();
  const total = quizQuestions.length;
  return `
<section class="lesson-block full">
  <h3>Quiz</h3>
  <div class="quiz-container" data-total="${total}">
    <div class="quiz-progress">
      <div class="quiz-progress-bar"></div>
      <span class="quiz-counter">Question 1/${total}</span>
    </div>
    ${quizQuestions.map((q, i) => `
    <div class="quiz-question ${i === 0 ? 'active' : ''}" data-index="${i}" data-answer="${q.answer}">
      <p class="quiz-question-text">${escapeHtml(q.q)}</p>
      <div class="quiz-options">
        ${q.options.map((opt, j) => {
          const letter = String.fromCharCode(65 + j);
          return `
        <label class="quiz-option" data-index="${j}">
          <input type="radio" name="q${i}" value="${j}">
          <span class="option-badge">${letter}</span>
          <span class="option-text">${escapeHtml(opt)}</span>
          <span class="option-check"></span>
        </label>`;
        }).join("")}
      </div>
      <div class="quiz-feedback">
        <span class="feedback-icon"></span>
        <span class="feedback-text"></span>
      </div>
    </div>`).join("")}
    <div class="quiz-nav">
      <button class="quiz-nav-btn prev" onclick="quizPrev()" disabled>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m7-7-7 7 7 7"/></svg>
        Precedent
      </button>
      <div class="quiz-dots">
        ${quizQuestions.map((_, i) => `<span class="quiz-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join("")}
      </div>
      <button class="quiz-nav-btn next" onclick="quizNext()">Suivant
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
      </button>
      <button class="quiz-nav-btn retry" onclick="quizRetry()" title="Recommencer le quiz">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6m16 0v-6h-6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
      </button>
    </div>
    <div class="quiz-result">
      <div class="result-stars"></div>
      <div class="result-score">
        <span class="result-score-num">0</span>
        <span class="result-score-sep">/</span>
        <span class="result-score-total">${total}</span>
      </div>
      <p class="result-message"></p>
      <div class="result-actions">
        <button class="result-btn retry" onclick="quizRetry()">Recommencer</button>
        <button class="result-btn review" onclick="quizReview()">Voir les reponses</button>
      </div>
    </div>
  </div>
</section>`;
})()}
  `;

  const helpRunHtml = renderHelpRunSection(language);
  if (helpRunHtml) {
    const marker = /<section class="lesson-block full">\s*<button class="correction-btn"/;
    const match = html.match(marker);
    if (match) {
      html = html.slice(0, match.index) + helpRunHtml + html.slice(match.index);
    } else {
      const quizMarker = /<section class="lesson-block full">\s*<h3>Quiz<\/h3>/;
      const quizMatch = html.match(quizMarker);
      if (quizMatch) {
        html = html.slice(0, quizMatch.index) + helpRunHtml + html.slice(quizMatch.index);
      } else {
        html += helpRunHtml;
      }
    }
  }

  lessonPage.innerHTML = html;
  quizInit();
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
let quizCurrent = 0;

function toggleCorrection(btn) {
  const content = btn.nextElementSibling;
  if (content && content.classList.contains("correction-content")) {
    content.classList.toggle("show");
    btn.textContent = content.classList.contains("show") ? "Masquer la correction" : "Voir la correction";
  }
}

function quizInit() {
  const container = document.querySelector('.quiz-container');
  if (!container) return;
  quizCurrent = 0;
  const questions = container.querySelectorAll('.quiz-question');
  questions.forEach((q, i) => {
    q.classList.toggle('active', i === 0);
    const inputs = q.querySelectorAll('input[type=radio]');
    inputs.forEach(inp => {
      inp.onchange = function() { quizSelect(this); };
    });
  });
  updateProgress();
  updateDots();
  updateNav();
}

function quizSelect(input) {
  const question = input.closest('.quiz-question');
  const idx = parseInt(input.value);
  const correct = parseInt(question.dataset.answer);
  const options = question.querySelectorAll('.quiz-option');
  const feedback = question.querySelector('.quiz-feedback');
  const feedbackIcon = feedback.querySelector('.feedback-icon');
  const feedbackText = feedback.querySelector('.feedback-text');

  options.forEach(o => o.classList.remove('selected', 'correct', 'wrong'));
  options[idx].classList.add('selected');

  if (idx === correct) {
    options[idx].classList.add('correct');
    feedbackIcon.textContent = '✓';
    feedbackText.textContent = 'Bonne reponse !';
    feedback.className = 'quiz-feedback show correct';
  } else {
    options[idx].classList.add('wrong');
    options[correct].classList.add('correct');
    const correctText = question.querySelectorAll('.option-text')[correct].textContent;
    feedbackIcon.textContent = '✗';
    feedbackText.textContent = 'Reponse : ' + correctText;
    feedback.className = 'quiz-feedback show wrong';
  }

  // Bloquer le changement de reponse
  question.querySelectorAll('input[type=radio]').forEach(inp => inp.disabled = true);

  const allAnswered = Array.from(document.querySelectorAll('.quiz-question')).every(q =>
    q.querySelector('input[type=radio]:checked')
  );
  if (allAnswered) showResults();
}

function quizNext() {
  const container = document.querySelector('.quiz-container');
  const total = parseInt(container.dataset.total);
  if (quizCurrent < total - 1) {
    quizCurrent++;
    showQuestion(quizCurrent);
  }
}

function quizPrev() {
  if (quizCurrent > 0) {
    quizCurrent--;
    showQuestion(quizCurrent);
  }
}

function showQuestion(index) {
  const container = document.querySelector('.quiz-container');
  container.querySelectorAll('.quiz-question').forEach((q, i) => {
    q.classList.toggle('active', i === index);
  });
  updateProgress();
  updateDots();
  updateNav();
}

function updateProgress() {
  const container = document.querySelector('.quiz-container');
  const total = parseInt(container.dataset.total);
  const answered = container.querySelectorAll('.quiz-question input[type=radio]:checked').length;
  const pct = (answered / total) * 100;
  const bar = container.querySelector('.quiz-progress-bar');
  bar.style.width = pct + '%';
  const counter = container.querySelector('.quiz-counter');
  counter.textContent = 'Question ' + (quizCurrent + 1) + '/' + total;
}

function updateDots() {
  const dots = document.querySelectorAll('.quiz-dot');
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === quizCurrent);
    const q = document.querySelectorAll('.quiz-question')[i];
    const checked = q && q.querySelector('input[type=radio]:checked');
    d.classList.toggle('done', !!checked);
  });
}

function updateNav() {
  const container = document.querySelector('.quiz-container');
  const total = parseInt(container.dataset.total);
  const prev = container.querySelector('.quiz-nav-btn.prev');
  const next = container.querySelector('.quiz-nav-btn.next');
  prev.disabled = quizCurrent === 0;
  const isLast = quizCurrent === total - 1;
  const answered = container.querySelectorAll('.quiz-question input[type=radio]:checked').length;
  const allDone = answered === total;
  if (isLast && allDone) {
    next.textContent = 'Voir les resultats';
    next.onclick = showResults;
  } else if (isLast) {
    next.innerHTML = 'Terminer <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>';
    next.onclick = null;
    next.disabled = !container.querySelectorAll('.quiz-question')[quizCurrent].querySelector('input[type=radio]:checked');
  } else {
    next.innerHTML = 'Suivant <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>';
    next.onclick = quizNext;
    next.disabled = false;
  }
}

function showResults() {
  const container = document.querySelector('.quiz-container');
  const questions = container.querySelectorAll('.quiz-question');
  let correctCount = 0;
  questions.forEach(q => {
    const checked = q.querySelector('input[type=radio]:checked');
    if (checked && parseInt(checked.value) === parseInt(q.dataset.answer)) correctCount++;
  });
  const total = questions.length;
  const pct = Math.round(correctCount / total * 100);

  container.querySelector('.quiz-progress').style.display = 'none';
  container.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));
  container.querySelector('.quiz-nav').style.display = 'none';
  const result = container.querySelector('.quiz-result');
  result.style.display = 'flex';

  const numEl = result.querySelector('.result-score-num');
  animateCounter(numEl, 0, correctCount, 800);

  const stars = result.querySelector('.result-stars');
  const starCount = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0;
  stars.textContent = '⭐'.repeat(starCount) + '☆'.repeat(3 - starCount);

  const msg = result.querySelector('.result-message');
  if (pct === 100) msg.textContent = 'Parfait ! Tu es un expert !';
  else if (pct >= 80) msg.textContent = 'Tres bien ! Continue comme ca.';
  else if (pct >= 60) msg.textContent = 'Pas mal ! Revois tes connaissances.';
  else if (pct >= 40) msg.textContent = 'Peut mieux faire. Entraine-toi encore.';
  else msg.textContent = 'Continue d apprendre, tu vas y arriver !';
}

function animateCounter(el, from, to, duration) {
  const start = performance.now();
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function quizRetry() {
  if (!window._quizPool) return;
  // Pick 5 new random questions (never seen before)
  const newQuestions = pickNewQuestions();
  // Find the quiz section and replace its content
  const section = document.querySelector('.lesson-block.full:has(.quiz-container)');
  if (!section) return;
  const total = newQuestions.length;
  let quizHTML = `
  <h3>Quiz</h3>
  <div class="quiz-container" data-total="${total}">
    <div class="quiz-progress">
      <div class="quiz-progress-bar"></div>
      <span class="quiz-counter">Question 1/${total}</span>
    </div>
    ${newQuestions.map((q, i) => `
    <div class="quiz-question ${i === 0 ? 'active' : ''}" data-index="${i}" data-answer="${q.answer}">
      <p class="quiz-question-text">${escapeHtml(q.q)}</p>
      <div class="quiz-options">
        ${q.options.map((opt, j) => {
          const letter = String.fromCharCode(65 + j);
          return `
        <label class="quiz-option" data-index="${j}">
          <input type="radio" name="q${i}" value="${j}">
          <span class="option-badge">${letter}</span>
          <span class="option-text">${escapeHtml(opt)}</span>
          <span class="option-check"></span>
        </label>`;
        }).join("")}
      </div>
      <div class="quiz-feedback">
        <span class="feedback-icon"></span>
        <span class="feedback-text"></span>
      </div>
    </div>`).join("")}
    <div class="quiz-nav">
      <button class="quiz-nav-btn prev" onclick="quizPrev()" disabled>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m7-7-7 7 7 7"/></svg>
        Precedent
      </button>
      <div class="quiz-dots">
        ${newQuestions.map((_, i) => `<span class="quiz-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join("")}
      </div>
      <button class="quiz-nav-btn next" onclick="quizNext()">Suivant
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
      </button>
      <button class="quiz-nav-btn retry" onclick="quizRetry()" title="Recommencer le quiz">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6m16 0v-6h-6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
      </button>
    </div>
    <div class="quiz-result">
      <div class="result-stars"></div>
      <div class="result-score">
        <span class="result-score-num">0</span>
        <span class="result-score-sep">/</span>
        <span class="result-score-total">${total}</span>
      </div>
      <p class="result-message"></p>
      <div class="result-actions">
        <button class="result-btn retry" onclick="quizRetry()">Recommencer</button>
        <button class="result-btn review" onclick="quizReview()">Voir les reponses</button>
      </div>
    </div>
  </div>`;
  section.innerHTML = quizHTML;
  quizInit();
}

function quizReview() {
  const container = document.querySelector('.quiz-container');
  container.querySelector('.quiz-result').style.display = 'none';
  container.querySelector('.quiz-progress').style.display = '';
  container.querySelector('.quiz-nav').style.display = '';
  quizCurrent = 0;
  showQuestion(0);
  // Already showing feedback on answered questions from quizSelect
}

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
  var consentMatch = document.cookie.match(/cookie_consent=([^;]+)/);
  if (!consentMatch || consentMatch[1] !== "accepted") return null;
  var match = document.cookie.match(/visitor_id=([^;]+)/);
  var id = match ? match[1] : null;
  if (!id) {
    id = "v_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    document.cookie = "visitor_id=" + id + "; path=/; max-age=31536000; SameSite=Lax";
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
    action: duration > 0 ? "page_exit" : "page_enter",
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
    action: "page_exit",
  };
  navigator.sendBeacon("/api/track", JSON.stringify(data));
}

window.addEventListener("hashchange", sendTrack);
window.addEventListener("beforeunload", sendFinalTrack);

setInterval(() => {
  const visitorId = getVisitorId();
  if (!visitorId) return;
  const duration = Math.round((Date.now() - trackingStart) / 1000);
  if (duration < 5) return;
  const data = {
    visitor_id: visitorId,
    page: trackingPage,
    page_name: getPageName(trackingPage),
    referrer: "",
    screen: `${window.innerWidth}x${window.innerHeight}`,
    duration_seconds: duration,
    action: "heartbeat",
  };
  navigator.sendBeacon("/api/track", JSON.stringify(data));
}, 5000);

/* ═══════════════════════════════════════════════════════════════
   PREMIUM EFFECTS
   ═══════════════════════════════════════════════════════════════ */

/* ── Page Load Animation ── */
function initPageLoad() {
  document.body.classList.remove("page-loading");
  document.body.classList.add("page-loaded");
}
if (document.readyState === "complete") {
  initPageLoad();
} else {
  window.addEventListener("load", initPageLoad);
}

/* ── Custom Cursor Glow ── */
function initCursorGlow() {
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);
  let timer;
  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    glow.classList.add("visible");
    clearTimeout(timer);
    timer = setTimeout(() => glow.classList.remove("visible"), 500);
  });
  document.querySelectorAll("a, button, .language-card, .filter, .quiz-option, .theme-toggle")
    .forEach(el => {
      el.addEventListener("mouseenter", () => glow.classList.add("hovering"));
      el.addEventListener("mouseleave", () => glow.classList.remove("hovering"));
    });
}
initCursorGlow();

/* ── Button Ripple Effect ── */
document.addEventListener("click", e => {
  const btn = e.target.closest(".button, .filter, .quiz-nav-btn, .result-btn, .correction-btn, .btn-logout, .auth-close");
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
  ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
});

/* ── Language Cards — 3D Tilt ── */
function initCardTilt() {
  const grid = document.getElementById("languageGrid");
  if (!grid) return;
  grid.addEventListener("mousemove", e => {
    const card = e.target.closest(".language-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotY = x * 12;
    const rotX = y * -8;
    card.style.transform =
      `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.03)`;
  });
  grid.addEventListener("mouseleave", () => {
    grid.querySelectorAll(".language-card").forEach(card => {
      card.style.transform = "";
    });
  });
}
initCardTilt();

/* ── Theme Toggle — Magnetic Hover ── */
function initMagneticToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  toggle.addEventListener("mousemove", e => {
    const rect = toggle.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    toggle.style.transform = `translate(${x * 6}px, ${y * 4}px)`;
  });
  toggle.addEventListener("mouseleave", () => {
    toggle.style.transform = "";
  });
}
initMagneticToggle();

/* ── Scroll Reveal — Enhanced with stagger ── */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("reveal-stagger")) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.add("visible");
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => observer.observe(el));
}
initScrollReveal();

/* ── Navigation Active Indicator ── */
function updateNavIndicator() {
  const hash = window.location.hash || "#accueil";
  document.querySelectorAll(".nav-actions a").forEach(a => {
    a.classList.toggle("is-current", a.getAttribute("href") === hash);
  });
}
window.addEventListener("hashchange", updateNavIndicator);
updateNavIndicator();

/* ── Confetti — Lightweight CSS Confetti ── */
function fireConfetti(count = 24) {
  const colors = ["var(--accent)", "var(--teal)", "var(--green)", "var(--yellow)", "var(--red)"];
  const container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (4 + Math.random() * 8) + "px";
    piece.style.height = (4 + Math.random() * 8) + "px";
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    piece.style.setProperty("--fall-duration", (1.5 + Math.random() * 1.5) + "s");
    piece.style.animationDelay = (Math.random() * 0.8) + "s";
    container.appendChild(piece);
  }
  setTimeout(() => container.remove(), 4000);
}
window.fireConfetti = fireConfetti;

/* ── Toast Notification ── */
function showToast(msg, duration = 3000) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove("show"), duration);
}
window.showToast = showToast;

/* ── Quiz — Slide direction ── */
function showQuestionWithDirection(index, direction) {
  const qs = document.querySelectorAll(".quiz-question");
  qs.forEach(q => q.classList.remove("active", "slide-in-right", "slide-in-left"));
  const q = qs[index];
  if (q) {
    q.classList.add("active", direction === "next" ? "slide-in-right" : "slide-in-left");
  }
}
window.showQuestionWithDirection = showQuestionWithDirection;

/* ── Modal — Premium animations ── */
function openAuth() {
  authOverlay.classList.remove("is-hidden");
  requestAnimationFrame(() => {
    authOverlay.classList.add("is-open");
  });
  document.body.style.overflow = "hidden";
}

function closeAuth() {
  authOverlay.classList.remove("is-open");
  setTimeout(() => {
    authOverlay.classList.add("is-hidden");
    document.body.style.overflow = "";
    loginError.classList.add("is-hidden");
    registerError.classList.add("is-hidden");
    loginForm.reset();
    registerForm.reset();
  }, 350);
}

/* ── Keyboard — Escape closes modals ── */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (authOverlay.classList.contains("is-open")) closeAuth();
  }
});

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
      sendTrack();
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
      sendTrack();
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
