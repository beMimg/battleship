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

  // gameLoop(players);
  // if (players.playerOne.game.howManyShips() === 0) {
  gameStage('carrier');
  displayUnplacedShip(5);
  // } else if (players.playerOne.game.howManyShips() === 5) {
  //   gameStage('battleship');
  //   displayUnplacedShip(4);
  //   console.log(players.playerOne.game.howManyShips());
  // } else if (players.playerOne.game.howManyShips() === 9) {
  //   gameStage('cruiser');
  //   displayUnplacedShip(3);
  // } else if (players.playerOne.game.howManyShips() === 12) {
  //   gameStage('submarine');
  //   displayUnplacedShip(3);
  // } else if (players.playerOne.game.howManyShips() === 15) {
  //   gameStage('destroyer');
  //   displayUnplacedShip(2);
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
};

const refreshGame = (container, player) => {
  displayGrid(container, player);
  if (player.game.howManyShips() === 5) {
    gameStage('battleship');
    displayUnplacedShip(4);
  } else if (player.game.howManyShips() === 9) {
    gameStage('cruiser');
    displayUnplacedShip(3);
  } else if (player.game.howManyShips() === 12) {
    gameStage('submarine');
    displayUnplacedShip(3);
  } else if (player.game.howManyShips() === 15) {
    gameStage('destroyer');
    displayUnplacedShip(2);
  } else if (player.game.howManyShips() === 17) {
    gameStage('allShipsPlaced');
    displayUnplacedShip('completed');
  }
};

export { initialize, refreshGame };
