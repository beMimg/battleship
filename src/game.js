/* eslint-disable */
import displayGrid from './grid';
import { gameStage, displayUnplacedShip } from './utils';

// Function created to assign a value to an exported variable. form.addEvent
let lobbyPlayers;
function setHumanName(name) {
  lobbyPlayers = name;
}

const game = (stage) => {
  console.log(lobbyPlayers);

  if (stage === 'stage1') {
    const playerContainer = document.querySelector('.player-container');
    const computerContainer = document.querySelector('.computer-container');
    displayGrid(playerContainer, lobbyPlayers.playerOne);
    displayGrid(computerContainer, lobbyPlayers.computer);
    gameStage('carrier');
    displayUnplacedShip(5);
  }

  if (stage === 'stage2') {
    const playerContainer = document.querySelector('.player-container');
    const computerContainer = document.querySelector('.computer-container');
    displayGrid(playerContainer, lobbyPlayers.playerOne);
    if (lobbyPlayers.playerOne.game.howManyShips() === 5) {
      gameStage('battleship');
      displayUnplacedShip(4);
    } else if (lobbyPlayers.playerOne.game.howManyShips() === 9) {
      gameStage('cruiser');
      displayUnplacedShip(3);
    } else if (lobbyPlayers.playerOne.game.howManyShips() === 12) {
      gameStage('submarine');
      displayUnplacedShip(3);
    } else if (lobbyPlayers.playerOne.game.howManyShips() === 15) {
      gameStage('destroyer');
      displayUnplacedShip(2);
    } else if (lobbyPlayers.playerOne.game.howManyShips() === 17) {
      gameStage('allShipsPlaced');
      displayUnplacedShip('completed');
    }
  }
};

export { game, lobbyPlayers, setHumanName };
