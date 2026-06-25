function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => document.getElementById('nav').classList.remove('open'));
});
