document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('theme-toggle');
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  toggle.setAttribute('aria-pressed', t === 'dark');
  toggle.textContent = t === 'dark' ? '☀️' : '🌙';
}
toggle.addEventListener('click', () => {
  let cur = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
});

const text = "Desenvolvedor Full Stack";
const textElement = document.querySelector(".lead");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    textElement.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 70);
  }
}
window.addEventListener("load", typeEffect);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.section, .project-card, .hero-text, .hero-card').forEach((el) => observer.observe(el));