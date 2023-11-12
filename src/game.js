/* eslint-disable */

const displayGrid = require('./grid');
const Player = require('./player');

const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');

const initializeGame = () => {
  // clicking the start game button, both grids will apear in the future

  // clicking the start game button, both grids will apear in the future

  const players = Player('WILL GET NAME AFTER');
  console.log(players);

  // This will be choice of the players in future
  players.playerOne.game.placeShip([0, 0], 5, 'x');
  players.playerOne.game.placeShip([0, 9], 4, 'y');
  players.playerOne.game.placeShip([3, 2], 3, 'x');
  players.playerOne.game.placeShip([6, 2], 3, 'x');
  players.playerOne.game.placeShip([8, 2], 1, 'x');

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
};

module.exports = initializeGame;
// playerContainer.addEventListener('click', (e) => {
//   const x = e.target.dataset.x;
//   const y = e.target.dataset.y;
//   const coords = [x, y];
//   return coords;
// });
