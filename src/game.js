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
  console.log(player);
  player.playerOne.game.placeShip([0, 0], 2, 'x');
  // player.playerOne.game.placeShip([0, 0], 2, 'x');
  // player.playerOne.game.placeShip([0, 0], 2, 'x');
  // player.playerOne.game.placeShip([0, 0], 2, 'x');
  // player.playerOne.game.placeShip([0, 0], 2, 'x');
};

module.exports = initializeGame;