document.addEventListener("DOMContentLoaded", function () {
    const kasaProject = document.getElementById("kasa-project");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeButton = document.getElementById("close-button");
  
    kasaProject.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien
      modal.style.display = "block";
      modalImage.src = "./images/Kasa.webp"; // Assurez-vous que le chemin d'accès à votre image Kasa est correct
    });
  
    closeButton.addEventListener("click", function () {
        event.preventDefault();
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
        event.preventDefault();
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  