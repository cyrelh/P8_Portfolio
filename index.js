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




// Récupérer tous les éléments qui ouvrent les modales
const modalTriggers = document.querySelectorAll(".open-modal");

// Pour chaque élément, ajouter un gestionnaire d'événement au clic
modalTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
        // Récupérer l'ID de la modal spécifique
        const modalId = trigger.getAttribute("data-modal-id");
        // Récupérer la modal correspondante
        const modal = document.getElementById(modalId);
        // Afficher la modal
        modal.style.display = "block";

        // Récupérer l'élément de fermeture (la croix)
        const closeModal = modal.querySelector(".close-modal");

        // Quand l'utilisateur clique sur la croix, fermer la modal
        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        // Quand l'utilisateur clique en dehors de la modal, fermer la modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
});




/*PARTIE MODALE*/
// Sélectionnez la fenêtre modale et les boutons de contrôle
const modal1 = document.getElementById("project-modal-1");
const modalText = modal1.querySelector("#modal-text");
const prevBtn = modal1.querySelector(".modal-btn-prev");
const nextBtn = modal1.querySelector(".modal-btn-next");
const imageContainer = modal1.querySelector(".image-container");

// Tableau des chemins d'accès des images
const images = [
  "/images/Booki/Booki-1.png",
  "/images/Booki/Booki-2.png",
  "/images/Booki/Booki-3.png"
];

// Index de l'image actuellement affichée
let currentIndex = 0;
let showingText = true; // Variable pour indiquer si le texte est affiché

// Fonction pour afficher l'image suivante
function showNextImage() {
  // Si nous montrons actuellement du texte, passer à l'image suivante
  if (showingText) {
    // Masquer le texte
    modalText.style.display = "none";
    // Afficher le conteneur d'image
    imageContainer.style.display = "block";
    currentIndex++; // Incrémenter l'index pour afficher la première image
    showImage();
    showingText = false; // Mettre à jour l'état pour indiquer que nous affichons maintenant une image
    prevBtn.style.display = "inline-block"; // Afficher le bouton précédent
  } else {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }
}

// Fonction pour afficher l'image précédente
function showPrevImage() {
  if (currentIndex === 0) {
    // Si nous sommes sur la première image et que le texte est masqué, afficher le texte
    if (!showingText) {
      modalText.style.display = "block";
      imageContainer.style.display = "none";
      showingText = true; // Mettre à jour l'état pour indiquer que nous affichons maintenant du texte
      prevBtn.style.display = "none"; // Cacher le bouton précédent
    }
  } else {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }
}

// Fonction pour afficher l'image correspondante
function showImage() {
  imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Image du projet Booki" class="modal-image">`;
}

// Écouteurs d'événements pour les boutons "Next" et "Back"
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);


// Sélectionnez la fenêtre modale et les boutons de contrôle
const modal2 = document.getElementById("project-modal-2");
const modalTextSophieBluel = modal2.querySelector("#modal-text");
const prevBtnSophieBluel = modal2.querySelector(".modal-btn-prev");
const nextBtnSophieBluel = modal2.querySelector(".modal-btn-next");
const imageContainerSophieBluel = modal2.querySelector(".image-container");

// Tableau des chemins d'accès des images
const imagesSophieBluel = [
  "/images/Sophie/Sophie-1.png",
  "/images/Sophie/Sophie-2.png",
  "/images/Sophie/Sophie-3.png"
];

// Index de l'image actuellement affichée
let currentIndexSophieBluel = 0;
let showingTextSophieBluel = true; // Variable pour indiquer si le texte est affiché

// Fonction pour afficher l'image suivante
function showNextImageSophieBluel() {
  // Si nous montrons actuellement du texte, passer à l'image suivante
  if (showingTextSophieBluel) {
    // Masquer le texte
    modalTextSophieBluel.style.display = "none";
    // Afficher le conteneur d'image
    imageContainerSophieBluel.style.display = "block";
    currentIndexSophieBluel++; // Incrémenter l'index pour afficher la première image
    showImageSophieBluel();
    showingTextSophieBluel = false; // Mettre à jour l'état pour indiquer que nous affichons maintenant une image
    prevBtnSophieBluel.style.display = "inline-block"; // Afficher le bouton précédent
  } else {
    currentIndexSophieBluel = (currentIndexSophieBluel + 1) % imagesSophieBluel.length;
    showImageSophieBluel();
  }
}

// Fonction pour afficher l'image précédente
function showPrevImageSophieBluel() {
  if (currentIndexSophieBluel === 0) {
    // Si nous sommes sur la première image et que le texte est masqué, afficher le texte
    if (!showingTextSophieBluel) {
      modalTextSophieBluel.style.display = "block";
      imageContainerSophieBluel.style.display = "none";
      showingTextSophieBluel = true; // Mettre à jour l'état pour indiquer que nous affichons maintenant du texte
      prevBtnSophieBluel.style.display = "none"; // Cacher le bouton précédent
    }
  } else {
    currentIndexSophieBluel = (currentIndexSophieBluel - 1 + imagesSophieBluel.length) % imagesSophieBluel.length;
    showImageSophieBluel();
  }
}

// Fonction pour afficher l'image correspondante
function showImageSophieBluel() {
  imageContainerSophieBluel.innerHTML = `<img src="${imagesSophieBluel[currentIndexSophieBluel]}" alt="Image du projet Sophie Bluel - Archiwebos" class="modal-image">`;
}

// Écouteurs d'événements pour les boutons "Next" et "Back"
nextBtnSophieBluel.addEventListener("click", showNextImageSophieBluel);
prevBtnSophieBluel.addEventListener("click", showPrevImageSophieBluel);































// Sélectionnez la fenêtre modale 3 et les boutons de contrôle
const modal3 = document.getElementById("project-modal-3");
const modalImage3 = modal3.querySelector(".modal-image");
const prevBtn3 = modal3.querySelector(".modal-btn-prev");
const nextBtn3 = modal3.querySelector(".modal-btn-next");

// Tableau des chemins d'accès des images pour le projet "Sophie Bluel - Archiwebos"
const imagesNinaCarducci = [
  "/images/Booki/Booki-m-1.png",
  "/images/Booki/Booki-m-2.png",
  "/images/Booki/Booki-m-3.png"
];

// Index de l'image actuellement affichée
let currentIndexNinaCarducci = 0;

// Fonction pour afficher l'image suivante du projet "Sophie Bluel - Archiwebos"
function showNextImageNinaCarducci() {
	currentIndexNinaCarducci = (currentIndexNinaCarducci + 1) % imagesNinaCarducci.length;
  modalImage3.src = imagesNinaCarducci[currentIndexNinaCarducci];
}

// Fonction pour afficher l'image précédente du projet "Sophie Bluel - Archiwebos"
function showPrevImageNinaCarducci() {
	currentIndexNinaCarducci = (currentIndexNinaCarducci - 1 + imagesNinaCarducci.length) % imagesNinaCarducci.length;
  modalImage3.src = imagesNinaCarducci[currentIndexNinaCarducci];
}

// Écouteurs d'événements pour les boutons "Next" et "Back" du projet "Sophie Bluel - Archiwebos"
nextBtn3.addEventListener("click", showNextImageNinaCarducci);
prevBtn3.addEventListener("click", showPrevImageNinaCarducci);

// Sélectionnez la fenêtre modale 4 et les boutons de contrôle
const modal4 = document.getElementById("project-modal-4");
const modalImage4 = modal4.querySelector(".modal-image");
const prevBtn4 = modal4.querySelector(".modal-btn-prev");
const nextBtn4 = modal4.querySelector(".modal-btn-next");

// Tableau des chemins d'accès des images pour le projet "Sophie Bluel - Archiwebos"
const imagesKasa = [
  "/images/Booki/Booki-m-1.png",
  "/images/Booki/Booki-m-2.png",
  "/images/Booki/Booki-m-3.png"
];

// Index de l'image actuellement affichée
let currentIndexKasa = 0;

// Fonction pour afficher l'image suivante du projet "Sophie Bluel - Archiwebos"
function showNextImageKasa() {
	currentIndexKasa = (currentIndexKasa + 1) % imagesKasa.length;
  modalImage4.src = imagesKasa[currentIndexKasa];
}

// Fonction pour afficher l'image précédente du projet "Sophie Bluel - Archiwebos"
function showPrevImageKasa() {
	currentIndexKasa = (currentIndexKasa - 1 + imagesKasa.length) % imagesKasa.length;
  modalImage4.src = imagesKasa[currentIndexKasa];
}

// Écouteurs d'événements pour les boutons "Next" et "Back" du projet "Sophie Bluel - Archiwebos"
nextBtn4.addEventListener("click", showNextImageKasa);
prevBtn4.addEventListener("click", showPrevImageKasa);

// Sélectionnez la fenêtre modale 5 et les boutons de contrôle
const modal5 = document.getElementById("project-modal-5");
const modalImage5 = modal5.querySelector(".modal-image");
const prevBtn5 = modal5.querySelector(".modal-btn-prev"); // Correction du nom de la variable
const nextBtn5 = modal5.querySelector(".modal-btn-next");

// Tableau des chemins d'accès des images pour le projet "Sophie Bluel - Archiwebos"
const imagesGrimoire = [
  "/images/Booki/Booki-m-1.png",
  "/images/Booki/Booki-m-2.png",
  "/images/Booki/Booki-m-3.png"
];

// Index de l'image actuellement affichée
let currentIndexGrimoire = 0;

// Fonction pour afficher l'image suivante du projet "Sophie Bluel - Archiwebos"
function showNextImageGrimoire() {
  currentIndexGrimoire = (currentIndexGrimoire + 1) % imagesGrimoire.length;
  modalImage5.src = imagesGrimoire[currentIndexGrimoire];
}

// Fonction pour afficher l'image précédente du projet "Sophie Bluel - Archiwebos"
function showPrevImageGrimoire() {
  currentIndexGrimoire = (currentIndexGrimoire - 1 + imagesGrimoire.length) % imagesGrimoire.length;
  modalImage5.src = imagesGrimoire[currentIndexGrimoire];
}

// Écouteurs d'événements pour les boutons "Next" et "Back" du projet "Sophie Bluel - Archiwebos"
nextBtn5.addEventListener("click", showNextImageGrimoire);
prevBtn5.addEventListener("click", showPrevImageGrimoire);

