/* eslint-disable no-console */
const form = document.querySelector('form');
const soldierNameElement = document.getElementById('soldierName');
const landingPage = document.querySelector('.landing-page');
const gamePage = document.querySelector('.game-page');

const error = (type) => {
  let errorMessage = '';
  if (type === 'placement') {
    errorMessage += 'This placement is not allowed.';
  }
  console.error(errorMessage);
};

const handleBtns = () => {
  // Get the soldier name;
  // Add hide name to landing-page;
  // Display gameContainer (parent of playerOne and computer containers)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const soldierName = soldierNameElement.value;
    landingPage.classList = 'landing-page hide';
    gamePage.classList.add('display');
  });
};

module.exports = {
  error,
  handleBtns,
};
