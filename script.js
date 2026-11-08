const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formStatus').textContent = 'Teşekkürler! Mesajınız alındı.';
    e.target.reset();
  });
}
