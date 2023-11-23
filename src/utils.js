/* eslint-disable no-import-assign */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */

import { game, setHumanName } from './game';
import Player from './player';

const error = (type) => {
  let errorMessage = '';
  if (type === 'placement') {
    errorMessage += 'This placement is not allowed.';
  }
  return errorMessage;
};

// DOM querying inside functions to not interfere with JEST
const handleBtns = () => {
  const form = document.querySelector('form');
  const soldierNameElement = document.getElementById('soldierName');
  const landingPage = document.querySelector('.landing-page');
  const gamePage = document.querySelector('.game-page');
  const playerName = document.querySelector('.player-name');
  const rotateBtn = document.querySelector('.rotate-btn');
  const shipsContainer = document.querySelector('.ships-container');
  const restartBtn = document.querySelector('.restart-game');

  /* This event listener will start the game by calling initialize function with the value of the input text as the name of the player,
   landing page will hide, game page will display and player-name as a new name */

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const soldierName = soldierNameElement.value;
    landingPage.classList = 'landing-page hide';
    gamePage.classList.add('display');
    rotateBtn.classList.add('display');
    playerName.textContent = soldierName;
    setHumanName(Player(soldierName));
    game('stage1');
  });

  /* Will change the class name of ship-container-default-x and all of his childs class name from 'x' to 'y';
  In the if statement is checked the LAST element of the nodeList, only when the LAST
  element has changed class name means that ALL elements before have changed too. */
  rotateBtn.addEventListener('click', () => {
    if (shipsContainer.classList.contains('x')) {
      shipsContainer.classList = 'ships-container y';
    } else {
      shipsContainer.classList = 'ships-container x';
    }
  });

  restartBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals, no-undef
    location.reload();
  });

  shipsContainer.addEventListener('dragstart', dragstartHandler);
};

// Will be called during game-loop to change the message(dom) while game goes on.
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
  } else if (message === 'allShipsPlaced') {
    gameStatus.textContent =
      'Good job placing your ships, have you done this before?';
  } else if (message === 'attack') {
    gameStatus.textContent = 'Now! Attack your opponent!';
  } else if (message === 'computerAttacks') {
    gameStatus.textContent = 'Enemy attacked, get ready for impact!';
  } else if (message === 'attackedShip') {
    gameStatus.textContent = 'You hit a ship!';
  } else if (message === 'missedShip') {
    gameStatus.textContent = 'You hit ! The water...';
  } else if (message === 'gameOver') {
    gameStatus.textContent = 'War finally came to an end...';
  } else if (message === 'shipAlreadyHit') {
    gameStatus.textContent = 'You have already hit this coordenate';
  } else if (message === 'shipDown') {
    gameStatus.textContent =
      'BOOOOOOM!!! You have exploded one of your enemy ships';
  }
};

/* Creates a ship thro dom manipulation, length as the parameter, so it creates different sized ships */
const displayUnplacedShip = (length) => {
  const shipsContainer = document.querySelector('.ships-container');
  const rotateBtn = document.querySelector('.rotate-btn');
  const footer = document.querySelector('footer');
  if (length === 'completed') {
    // Removes the unplaced ships and the rotate button
    footer.style.visibility = 'hidden';
    shipsContainer.innerHTML = '';
    rotateBtn.classList = 'rotate-btn';
  }
  /* This will make that everytime we call this function, the prior content inside this div will vanish.
   Avoiding ships overflow, because the last one was already placed. */
  shipsContainer.innerHTML = '';
  for (let i = 0; i < length; i += 1) {
    const unplacedShip = document.createElement('div');
    // The meaning of x will be that ship is displayed horizontally as default.
    unplacedShip.classList = `unplaced-ship`;
    shipsContainer.appendChild(unplacedShip);
  }
};

const dragstartHandler = (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.effectAllowed = 'move';
};

const dragoverHandler = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
};

const dropHandler = (container, player) =>
  function (e) {
    e.preventDefault();
    /* Get the right direction through the displayUnplacedShip, 
    if the unplaced ship is horizontal, classList contains 'x',
    other way arround for vertical 'y' */
    let direction;
    const shipsContainer = document.querySelector('.ships-container');
    if (shipsContainer.classList.contains('x')) {
      direction = 'x';
    } else {
      direction = 'y';
    }
    // Index of the gridItem where unplaced ship was dropped.
    const index = parseInt(e.target.dataset.i);
    // Only place a ship if the grid container target is the player, not the computer
    if (container.classList.value.includes('player-container')) {
      player.game.placeShip(index, direction);
    }
    game('stage2');
  };

export {
  error,
  handleBtns,
  gameStage,
  displayUnplacedShip,
  dragoverHandler,
  dropHandler,
};
