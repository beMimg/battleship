/* eslint-disable no-console */
import initialize from './game';

const error = (type) => {
  let errorMessage = '';
  if (type === 'placement') {
    errorMessage += 'This placement is not allowed.';
  }
  return errorMessage;
};

const handleBtns = () => {
  const form = document.querySelector('form');
  const soldierNameElement = document.getElementById('soldierName');
  const landingPage = document.querySelector('.landing-page');
  const gamePage = document.querySelector('.game-page');
  const playerName = document.querySelector('.player-name');
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

// Will be called during game-loop to change the message while game goes on.
const gameStage = (message) => {
  const gameStatus = document.querySelector('.game-status');
  if (message === 'carrier') {
    gameStatus.textContent = 'Choose where to place your carrier...';
  } else if (message === 'battleship') {
    gameStatus.textContent = 'Choose where to place your battleship...';
  } else if (message === 'cruiser') {
    gameStatus.textContent = 'Choose where to place your cruiser...';
  } else if (message === 'submarine') {
    gameStatus.textContent = 'Choose where to place your submarine...';
  } else if (message === 'destroyer') {
    gameStatus.textContent = 'Choose where to place your destroyer...';
  }
};

/* This will return how many ships are in player gameboard.
It will be usefull to check if there's only 5 ship indexes, 
that means only the carrier was placed and we can continue to the next placement. */
const howManyShips = (player) => {
  const ocuppiedWithShip = player.game.iStatus.filter(
    (index) => index.ship != null,
  );
  const howManyShipIndexes = ocuppiedWithShip.length;
  return howManyShipIndexes;
};

export { error, handleBtns, gameStage, howManyShips };
