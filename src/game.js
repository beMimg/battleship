/* eslint-disable */
import displayGrid from './grid';
import { gameStage, displayUnplacedShip } from './utils';

// Function created to assign a value to an exported variable. form.addEvent
let lobbyPlayers;
function setHumanName(name) {
  lobbyPlayers = name;
}

const game = (stage) => {
  if (stage === 'stage1') {
    const playerContainer = document.querySelector('.player-container');
    const computerContainer = document.querySelector('.computer-container');
    displayGrid(playerContainer, lobbyPlayers.playerOne);
    displayGrid(computerContainer, lobbyPlayers.computer);
    gameStage('carrier');
    displayUnplacedShip(5);
    while (lobbyPlayers.computer.game.howManyShips() !== 17) {
      const randomIndex = Math.floor(Math.random() * 100);
      const diretion = ['y', 'x'];
      const randomDiretion = Math.floor(Math.random() * 2);

      lobbyPlayers.computer.game.placeShip(
        randomIndex,
        diretion[randomDiretion],
      );
    }
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

      // Get the e.targetId and parseInt to num
      const targetId = parseInt(e.target.dataset.i);

      // If the coords of the attack is already attacked, return.
      if (lobbyPlayers.computer.game.iStatus[targetId].isAttacked === null) {
        lobbyPlayers.playerOneAttacks(targetId);
        displayGrid(computerContainer, lobbyPlayers.computer);
      } else {
        return;
      }

      /* If the computer has a ship on index(targetId),
      set message 'You hit a ship!', two seconds after(If computer still has ships),
      message that computer will attack, and two seconds after that message will display that random attack */
      if (lobbyPlayers.computer.game.hasShip(targetId)) {
        gameStage('attackedShip');
        if (
          lobbyPlayers.computer.game.iStatus[targetId].ship.isItSunk === true
        ) {
          gameStage('shipDown');
        }

        if (lobbyPlayers.computer.game.isAllSunk() === false) {
          setTimeout(() => {
            gameStage('computerAttacks');
          }, 2000);
          setTimeout(() => {
            lobbyPlayers.computerAttacks();
            displayGrid(playerContainer, lobbyPlayers.playerOne);
          }, 4000);
        }

        /* Else => the computer doesn't have a ship on index(targetId),
        set message that player missed the computers ship, after two seconds, 
        will do the same as when computer has ship */
      } else {
        gameStage('missedShip');
        if (lobbyPlayers.computer.game.isAllSunk() === false) {
          setTimeout(() => {
            gameStage('computerAttacks');
          }, 2000);
          setTimeout(() => {
            lobbyPlayers.computerAttacks();
            displayGrid(playerContainer, lobbyPlayers.playerOne);
          }, 4000);
        }
      }

      // If all sunk, message that game is over and call stage='gameOver'
      if (
        lobbyPlayers.playerOne.game.isAllSunk() ||
        lobbyPlayers.computer.game.isAllSunk()
      ) {
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
