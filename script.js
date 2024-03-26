const body = document.body;
const btnTheme = document.querySelector('.fa-moon');

// Fonction pour ajouter ou supprimer les classes de thème
const toggleTheme = () => {
    // Vérifier si le thème actuel est "dark"
    const isDarkTheme = body.classList.contains('dark');

    // Inverser le thème en ajoutant ou supprimant les classes appropriées
    if (isDarkTheme) {
        body.classList.remove('dark');
        body.classList.add('light');
        btnTheme.classList.remove('fa-sun');
        btnTheme.classList.add('fa-moon');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        btnTheme.classList.remove('fa-moon');
        btnTheme.classList.add('fa-sun');
    }

    // Sauvegarder le thème sélectionné dans le stockage local
    localStorage.setItem('portfolio-theme', body.classList.value);
};

// Ajouter un écouteur d'événement pour basculer le thème lorsque le bouton est cliqué
btnTheme.addEventListener('click', toggleTheme);

// Récupérer le thème enregistré dans le stockage local et appliquer si présent
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
    body.classList.value = savedTheme;
}
