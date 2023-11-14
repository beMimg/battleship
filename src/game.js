/* eslint-disable */
import Player from './player';
import displayGrid from './grid';
import { gameStage, howManyShips, displayUnplacedShip } from './utils';

const initialize = (name) => {
  const playerContainer = document.querySelector('.player-container');
  const computerContainer = document.querySelector('.computer-container');

  // This function is called when the form is submitted, with name being inp.value
  const players = Player(name);

  if (howManyShips(players.playerOne) === 0) {
    gameStage('carrier');
    displayUnplacedShip(5);
    players.playerOne.game.placeShip([0, 0], 5, 'y');
  }
  if (howManyShips(players.playerOne) === 5) {
    gameStage('battleship');
    displayUnplacedShip(4);
    // players.playerOne.game.placeShip([0, 1], 4, 'y');
  }
  // if (howManyShips(players.playerOne) === 9) {
  //   gameStage('cruiser');
  //   players.playerOne.game.placeShip([0, 6], 3, 'x');
  // }
  // if (howManyShips(players.playerOne) === 12) {
  //   gameStage('submarine');
  //   players.playerOne.game.placeShip([6, 2], 3, 'x');
  // }
  // if (howManyShips(players.playerOne) === 15) {
  //   gameStage('destroyer');
  //   players.playerOne.game.placeShip([8, 8], 2, 'x');
  // }
  // // players.playerOne.game.placeShip([3, 2], 3, 'x');
  // players.playerOne.game.placeShip([6, 2], 3, 'x');
  // players.playerOne.game.placeShip([8, 2], 1, 'x');

  // This will be random
  // players.computer.game.placeShip([0, 0], 5, 'y');
  // players.computer.game.placeShip([2, 5], 4, 'x');
  // players.computer.game.placeShip([3, 2], 3, 'x');
  // players.computer.game.placeShip([6, 2], 3, 'x');
  // players.computer.game.placeShip([8, 2], 1, 'x');

  // players.playerOneAttacks([0, 0]);
  // players.playerOneAttacks([1, 0]);
  // players.playerOneAttacks([2, 0]);
  // players.playerOneAttacks([3, 0]);
  // players.playerOneAttacks([4, 0]);
  // players.playerOneAttacks([3, 2]);

  displayGrid(playerContainer, players.playerOne);
  displayGrid(computerContainer, players.computer);
  console.log(players);
};

// playerContainer.addEventListener('click', (e) => {
//   const x = e.target.dataset.x;
//   const y = e.target.dataset.y;
//   const coords = [x, y];
//   return coords;
// });

export default initialize;
