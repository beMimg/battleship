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
  console.log(player.playerOne.game);
  player.playerOne.game.placeShip([1, 8], 2, 'x');
  player.playerOne.game.placeShip([9, 0], 2, 'y');
  // player.playerOne.game.placeShip([0, 2], 1, 'x');
  // data-x + data-y makes coords
};

module.exports = initializeGame;
