// assets/js/main.js
(() => {
  // Année dynamique
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Fermer le menu mobile après clic
  const navToggle = document.getElementById('nav-toggle');
  document.querySelectorAll('nav.menu a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => { if (navToggle) navToggle.checked = false; });
  });
})();
