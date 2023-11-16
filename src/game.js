/* eslint-disable */
import Player from './player';
import displayGrid from './grid';
import { gameStage, displayUnplacedShip } from './utils';

const initialize = (name) => {
  const playerContainer = document.querySelector('.player-container');
  const computerContainer = document.querySelector('.computer-container');

  // This function is called when the form is submitted, with name being inp.value
  const players = Player(name);
  displayGrid(playerContainer, players.playerOne);
  displayGrid(computerContainer, players.computer);

  if (players.playerOne.game.howManyShips() === 0) {
    gameStage('carrier');
    displayUnplacedShip(5, 'y');
  }
  if (players.playerOne.game.howManyShips() === 5) {
    gameStage('battleship');
    displayUnplacedShip(4);
  }
  if (players.playerOne.game.howManyShips() === 9) {
    gameStage('cruiser');
    displayUnplacedShip(3);
  }
  if (players.playerOne.game.howManyShips() === 12) {
    gameStage('submarine');
    displayUnplacedShip(3);
  }
  if (players.playerOne.game.howManyShips() === 15) {
    gameStage('destroyer');
    displayUnplacedShip(2);
  }

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

  console.log(players);
};

export default initialize;
