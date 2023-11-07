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

  // const randomNum = () => {
  //   playerOne.game.board;
  // };

  const newArr = [...playerOne.game.board];

  const computerAttacks = () => {
    if (playerOne.turn === false) {
      const randomIndex = Math.floor(Math.random() * newArr.length);
      const coords = newArr[randomIndex];
      playerOne.game.recieveAttack(coords);
      newArr.splice(randomIndex, 1);
      playerOne.turn = true;
    }
  };

  const playerOneAttacks = (coords) => {
    if (playerOne.turn === true) {
      playerTwo.game.recieveAttack(coords);
      playerOne.turn = false;
      computerAttacks();
    } else if (playerOne.turn === false) {
      throw new Error('Not your turn to play');
    }
  };

  return { playerOne, playerTwo, playerOneAttacks, computerAttacks };
};

module.exports = Player;
