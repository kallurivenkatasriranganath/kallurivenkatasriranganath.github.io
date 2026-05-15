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
    if (birthdayAudio) {

  birthdayAudio.pause();

  birthdayAudio.currentTime = 0;
}
  });
}
setTimeout(() => {
  birthdayBanner.style.display = 'none';
}, 4000);


/* =========================
   Birthday Music
========================= */

const birthdayAudio =
  document.getElementById('birthday-audio');

/* Set Low Volume */

if (birthdayAudio) {

  birthdayAudio.volume = 0.25;

  /* Attempt autoplay */

  birthdayAudio.play().catch(() => {

    /* Fallback:
       Play after first click */

    document.body.addEventListener(
      'click',
      () => {
        birthdayAudio.play();
      },
      { once: true }
    );
  });
}
