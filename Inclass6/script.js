const filterButtons = document.querySelectorAll('.gallery-nav button');
const photoCards = document.querySelectorAll('.photo-card');

filterButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const filterValue = event.target.textContent.toLowerCase();
    filterPhotos(filterValue);
    setActiveButton(button);
  });
});

function filterPhotos(category) {
  photoCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function setActiveButton(activeButton) {
  filterButtons.forEach(btn => btn.classList.remove('active'));
  activeButton.classList.add('active');
}
