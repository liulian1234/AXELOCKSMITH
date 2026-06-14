const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const dropdowns = document.querySelectorAll('.nav-dropdown');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector('button');
  button.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 1180px)').matches) {
      dropdown.classList.toggle('open');
    }
  });
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
