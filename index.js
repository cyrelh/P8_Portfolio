const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}


const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)


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

