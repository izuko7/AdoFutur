const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");
const navClose = document.getElementById("navClose");

// Gère la visibilité du hamburger selon la taille d'écran
function updateHamburger() {
  if (window.innerWidth <= 768) {
    hamburger.style.display = "block";
  } else {
    hamburger.style.display = "none";
  }
}

function openMenu() {
  navLinks.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  hamburger.style.display = "none";
}

function closeMenu() {
  navLinks.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  updateHamburger(); // remet le bon état selon la taille
}

hamburger.addEventListener("click", openMenu);
navClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Au chargement de la page, applique le bon état
updateHamburger();

// Si on redimensionne la fenêtre
window.addEventListener("resize", updateHamburger);


const btnTop = document.getElementById('btnTop');

// Affiche le bouton après 300px de scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.classList.add('visible');
  } else {
    btnTop.classList.remove('visible');
  }
});

// Remonte en haut au clic
btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});