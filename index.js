// Sélection de l'élément body du document HTML
const body = document.body;

// Sélection de l'icône du thème sombre
const btnTheme = document.querySelector('.fa-moon');

// Fonction pour ajouter les classes de thème
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass); // Ajout de la classe au body
  btnTheme.classList.add(btnClass); // Ajout de la classe à l'icône de thème
};

// Récupération du thème actuel depuis le stockage local
const getBodyTheme = localStorage.getItem('portfolio-theme');

// Récupération de l'icône de thème actuelle depuis le stockage local
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

// Application des classes de thème au chargement de la page
addThemeClass(getBodyTheme, getBtnTheme);

// Fonction pour vérifier si le thème sombre est appliqué
const isDark = () => body.classList.contains('dark');

// Fonction pour définir le thème
const setTheme = (bodyClass, btnClass) => {
  // Suppression des anciennes classes de thème
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));
  // Ajout des nouvelles classes de thème
  addThemeClass(bodyClass, btnClass);
  // Enregistrement du thème dans le stockage local
  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

// Fonction pour basculer entre les thèmes clair et sombre
const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

// Ajout d'un écouteur d'événements de clic sur le bouton de thème
btnTheme.addEventListener('click', toggleTheme);



// // Récupérer tous les liens de navigation
// const navLinks = document.querySelectorAll('.nav_link');

// // Fonction pour gérer le clic sur un lien de navigation
// const handleNavLinkClick = (event) => {
//     // Empêcher le comportement par défaut du lien (redirection)
//     event.preventDefault();

//     // Retirer la classe active de tous les liens de navigation
//     navLinks.forEach(link => link.classList.remove('active'));

//     // Ajouter la classe active à l'élément cliqué
//     event.target.classList.add('active');
// };

// // Ajouter un gestionnaire d'événement de clic à chaque lien de navigation
// navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

