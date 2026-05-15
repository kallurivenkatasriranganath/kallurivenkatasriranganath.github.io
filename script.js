document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => links.classList.remove('open')));


const closeBanner =
  document.getElementById('close-banner');

const birthdayBanner =
  document.getElementById('birthday-banner');

if (closeBanner && birthdayBanner) {

  closeBanner.addEventListener('click', () => {

    birthdayBanner.style.display = 'none';
  });
}
