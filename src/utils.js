/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import initialize from './game';
import displayGrid from './grid';

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
  const shipsContainerDRAG = document.querySelector(
    '.ships-container-default-x',
  );

  /* This event listener will start the game by calling initialize function with the value of the input text as the name of the player,
   landing page will hide, game page will display and player-name as a new name */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const soldierName = soldierNameElement.value;
    landingPage.classList = 'landing-page hide';
    gamePage.classList.add('display');
    rotateBtn.classList.add('display');
    playerName.textContent = soldierName;
    initialize(soldierName);
  });

  /* Will change the class name of ship-container-default-x and all of his childs class name from 'x' to 'y';
  In the if statement is checked the LAST element of the nodeList, only when the LAST
  element has changed class name means that ALL elements before have changed too. */
  rotateBtn.addEventListener('click', (e) => {
    const shipsContainer = e.currentTarget.previousElementSibling;
    // get all childs of shipsContainer
    const shipContainerChilds = shipsContainer.children;
    const lastIndex = shipContainerChilds.length - 1;
    for (let i = 0; i < shipContainerChilds.length; i += 1) {
      if (shipContainerChilds[lastIndex].classList.contains('x')) {
        shipsContainer.classList = 'ships-container y';
        shipContainerChilds[i].classList = 'unplaced-ship y';
      } else {
        shipsContainer.classList = 'ships-container-default-x';
        shipContainerChilds[i].classList = 'unplaced-ship x';
      }
    }
  });

  shipsContainerDRAG.addEventListener('dragstart', dragstartHandler);
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

/* Creates a ship thro dom manipulation, length as the parameter, so it creates different sized ships */
const displayUnplacedShip = (length) => {
  const shipsContainer = document.querySelector('.ships-container-default-x');
  /* This will make that everytime we call this function, the prior content inside this div will vanish.
   Avoiding ships overflow, because the last one was already placed. */
  shipsContainer.innerHTML = '';
  for (let i = 0; i < length; i += 1) {
    const unplacedShip = document.createElement('div');
    // The meaning of x will be that ship is displayed horizontally as default.
    unplacedShip.classList = `unplaced-ship x`;
    shipsContainer.appendChild(unplacedShip);
  }
};

const dragstartHandler = (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.effectAllowed = 'move';
  console.log(e.dataTransfer);
};

const dragoverHandler = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  console.log('dragging');
};

const dropHandler = (container, player) =>
  function (e) {
    e.preventDefault();
    const index = parseInt(e.target.dataset.i);
    const target = e.target;
    target.classList.add('target');
    player.game.placeShip(index, 5, 'y'); // length and y and x to be handled
    displayGrid(container, player);
  };

export {
  error,
  handleBtns,
  gameStage,
  howManyShips,
  displayUnplacedShip,
  dragoverHandler,
  dropHandler,
};
