/* eslint-disable */

const createGrid = require('./grid');
const Player = require('./player');

const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');

const initializeGame = () => {
  // clicking the start game button, both grids will apear in the future
  createGrid(playerContainer);
  createGrid(computerContainer);
  // clicking the start game button, both grids will apear in the future

  const player = Player('WILL GET NAME AFTER');
  console.log(player.playerOne.game.iStatus);

  // player.playerOne.game.placeShip([0, 0], 1, 'x');
  // player.playerOne.game.placeShip([0, 0], 2, 'x');

  // player.playerOne.game.placeShip([0, 3], 1, 'x');
  // player.playerOne.game.placeShip([0, 0], 4, 'x');
  // player.playerOne.game.placeShip([1, 3], 2, 'y');
  // player.playerOne.game.placeShip([0, 3], 5, 'y');
  player.playerOne.game.placeShip([0, 0], 2, 'y');
  player.playerOne.game.placeShip([1, 0], 3, 'y');

  // playerContainer.addEventListener('click', (e) => {
  //   const gridIndex = parseInt(e.target.dataset.i);
  //   const coords = player.playerOne.game.board[gridIndex];
  //   console.log(gridIndex, coords);
  //   player.playerOne.game.placeShip(coords, 5, 'x'); // Place carrier
  // });
};

module.exports = initializeGame;
