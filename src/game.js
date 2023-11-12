/* eslint-disable */

const displayGrid = require('./grid');
const Player = require('./player');

const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');
const gameStatus = document.querySelector('.game-status');

const initialize = (name) => {
  // This function is called when the form is submitted, with name being inp.value
  const players = Player(name);

  if (howManyShips(players.playerOne) === 0) {
    gameStage('carrier');
    players.playerOne.game.placeShip([0, 0], 5, 'y');
  }
  if (howManyShips(players.playerOne) === 5) {
    gameStage('battleship');
    players.playerOne.game.placeShip([0, 1], 4, 'y');
  }
  if (howManyShips(players.playerOne) === 9) {
    gameStage('cruiser');
    players.playerOne.game.placeShip([0, 6], 3, 'x');
  }
  if (howManyShips(players.playerOne) === 12) {
    gameStage('submarine');
    players.playerOne.game.placeShip([6, 2], 3, 'x');
  }
  if (howManyShips(players.playerOne) === 15) {
    gameStage('destroyer');
    players.playerOne.game.placeShip([8, 8], 2, 'x');
  }
  // players.playerOne.game.placeShip([3, 2], 3, 'x');
  // players.playerOne.game.placeShip([6, 2], 3, 'x');
  // players.playerOne.game.placeShip([8, 2], 1, 'x');

  // This will be random
  players.computer.game.placeShip([0, 0], 5, 'y');
  players.computer.game.placeShip([2, 5], 4, 'x');
  players.computer.game.placeShip([3, 2], 3, 'x');
  players.computer.game.placeShip([6, 2], 3, 'x');
  players.computer.game.placeShip([8, 2], 1, 'x');

  players.playerOneAttacks([0, 0]);
  players.playerOneAttacks([1, 0]);
  players.playerOneAttacks([2, 0]);
  players.playerOneAttacks([3, 0]);
  players.playerOneAttacks([4, 0]);
  players.playerOneAttacks([3, 2]);

  displayGrid(playerContainer, players.playerOne);
  displayGrid(computerContainer, players.computer);
  console.log(players);
};

module.exports = initialize;

// Will be called during game-loop to change the message while game goes on.
const gameStage = (message) => {
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

// playerContainer.addEventListener('click', (e) => {
//   const x = e.target.dataset.x;
//   const y = e.target.dataset.y;
//   const coords = [x, y];
//   return coords;
// });
