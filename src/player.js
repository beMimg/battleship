const Gameboard = require('./gameboard');

const Player = (name) => {
  const playerOne = {
    username: name,
    game: Gameboard(),
  };
  const playerTwo = {
    username: 'Anonymous',
    game: Gameboard(),
  };

  let currentPlayer = playerOne;

  const playerControl = () => {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  };

  return { playerOne, playerTwo };
};
const jeff = Player('Jeff');
console.log(jeff);
