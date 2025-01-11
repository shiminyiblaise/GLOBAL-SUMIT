const mobileCapstone = document.getElementById('mobile_capstone');
mobileCapstone.addEventListener('click', () => {
  const desktopCapstone = document.getElementById('desktop_capstone');
  desktopCapstone.classList.toggle('active');
  mobileCapstone.classList.toggle('active');
});

const more = document.getElementById('more');
const button = document.querySelector('.speaker_hover');

button.addEventListener('click', () => {
  more.classList.add('open_more');

  // Check if all cards are displayed
  const allCards = document.querySelectorAll('.speakers_card');

  if (Array.from(allCards).every((card) => card.style.display !== 'none')) {
    button.style.display = 'none'; // Hide the button if all cards are shown
  }
});
