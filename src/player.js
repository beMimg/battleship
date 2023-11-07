const Gameboard = require('./gameboard');

const Player = (player) => {
  const playerOne = {
    username: player,
    game: Gameboard(),
    turn: true,
  };

  const playerTwo = {
    username: 'Anonymous',
    game: Gameboard(),
  };

  const playerOneAttacks = (coords) => {
    playerTwo.game.recieveAttack(coords);
    playerOne.turn = false;
  };

  return { playerOne, playerTwo, playerOneAttacks };
};

// const startPlayers = Player('Jeff');
// // startPlayers.playerOneAttacks([0, 0]);
// console.log(startPlayers);

module.exports = Player;
