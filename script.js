document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => links.classList.remove('open')));


/* =========================
   Birthday Banner + Music
========================= */

const birthdayBanner =
  document.getElementById('birthday-banner');

const closeBanner =
  document.getElementById('close-banner');

const birthdayAudio =
  document.getElementById('birthday-audio');

/* Play Music */

function playBirthdayMusic() {

  if (!birthdayAudio) return;

  birthdayAudio.volume = 0.25;

  const playPromise =
    birthdayAudio.play();

  if (playPromise !== undefined) {

    playPromise.catch(() => {

      /* Browser blocked autoplay */

      document.body.addEventListener(
        'click',
        () => {
          birthdayAudio.play();
        },
        { once: true }
      );

    });
  }
}

/* Start Music When Page Loads */

window.addEventListener('load', () => {

  setTimeout(() => {

    playBirthdayMusic();

  }, 800);
});

/* Close Banner */

if (closeBanner && birthdayBanner) {

  closeBanner.addEventListener('click', () => {

    birthdayBanner.style.opacity = '0';

    setTimeout(() => {

      birthdayBanner.style.display = 'none';

    }, 500);

    /* Stop Music */

    if (birthdayAudio) {

      birthdayAudio.pause();

      birthdayAudio.currentTime = 0;
    }

  });
}
