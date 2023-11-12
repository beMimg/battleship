/* eslint-disable no-console */
const initialize = require('./game');

const form = document.querySelector('form');
const soldierNameElement = document.getElementById('soldierName');
const landingPage = document.querySelector('.landing-page');
const gamePage = document.querySelector('.game-page');
const playerName = document.querySelector('.player-name');

const error = (type) => {
  let errorMessage = '';
  if (type === 'placement') {
    errorMessage += 'This placement is not allowed.';
  }
  console.error(errorMessage);
};

const handleBtns = () => {
  /* This event listener will start the game by calling initialize function with the value of the input text as the name of the player,
   landing page will hide, game page will display and player-name as a new name */

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const soldierName = soldierNameElement.value;
    landingPage.classList = 'landing-page hide';
    gamePage.classList.add('display');
    playerName.textContent = soldierName;
    initialize(soldierName);
  });
};

module.exports = { error, handleBtns };
