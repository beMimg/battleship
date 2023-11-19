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
    lobbyPlayers.computer.game.placeShip([0, 0], 'y');
    // lobbyPlayers.computer.game.placeShip([0, 9], 'y');
    // lobbyPlayers.computer.game.placeShip([5, 0], 'y');
    // lobbyPlayers.computer.game.placeShip([8, 2], 'x');
    // lobbyPlayers.computer.game.placeShip([9, 8], 'x');
  }

  if (stage === 'stage2') {
    const playerContainer = document.querySelector('.player-container');
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
      setTimeout(() => {
        game('stage3');
      }, 2000);
    }
  }

  if (stage === 'stage3') {
    const computerContainer = document.querySelector('.computer-container');
    const playerContainer = document.querySelector('.player-container');
    gameStage('attack');
    computerContainer.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = parseInt(e.target.dataset.i);
      console.log(targetId);
      lobbyPlayers.playerOneAttacks(targetId);
      displayGrid(computerContainer, lobbyPlayers.computer);
      if (lobbyPlayers.computer.game.hasShip(targetId)) {
        gameStage('attackedShip');
        setTimeout(() => {
          gameStage('computerAttacks');
        }, 2000);
        setTimeout(() => {
          lobbyPlayers.computerAttacks();
          displayGrid(playerContainer, lobbyPlayers.playerOne);
        }, 4000);
      } else {
        gameStage('missedShip');
        setTimeout(() => {
          gameStage('computerAttacks');
        }, 2000);
        setTimeout(() => {
          lobbyPlayers.computerAttacks();
          displayGrid(playerContainer, lobbyPlayers.playerOne);
        }, 4000);
      }
      if (
        lobbyPlayers.playerOne.game.isAllSunk() ||
        lobbyPlayers.computer.game.isAllSunk()
      ) {
        console.log('gameOver');
        gameStage('gameOver');
        game('gameOver');
      }
    });
  }

  if (stage === 'gameOver') {
    const gameOverHTML = document.querySelector('.game-over');
    const winner = document.querySelector('.winner');
    gameOverHTML.classList.add('display');
    if (lobbyPlayers.playerOne.game.isAllSunk()) {
      winner.textContent = 'You lost the war';
    }
    if (lobbyPlayers.computer.game.isAllSunk()) {
      winner.textContent = 'You won the war';
    }
  }
};

export { game, lobbyPlayers, setHumanName };
