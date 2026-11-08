const nav = document.getElementById('nav');
document.getElementById('menuBtn').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formStatus').textContent = 'Teşekkürler! Mesajınız alındı.';
  e.target.reset();
});
