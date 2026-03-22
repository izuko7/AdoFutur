const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");
const navClose = document.getElementById("navClose");

function openMenu() {
  navLinks.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // bloque le scroll
}

function closeMenu() {
  navLinks.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function openMenu() {
  navLinks.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  hamburger.style.display = 'none'; // ← ajoute
}

function closeMenu() {
  navLinks.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  hamburger.style.display = 'block'; // ← ajoute
}

hamburger.addEventListener("click", openMenu);
navClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Ferme aussi si on clique sur un lien
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
