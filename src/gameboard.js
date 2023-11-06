const createShip = require('./ship');

const Gameboard = () => {
  const buildBoard = () => {
    const board = [];
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        board.push([x, y]);
      }
    }
    return board;
  };

  const boardStatus = (arr) => {
    const iStatus = [];
    for (let i = 0; i < arr.length; i += 1) {
      iStatus[i] = {
        isAttacked: null,
        ship: null,
      };
    }
    return iStatus;
  };

  const board = buildBoard();
  const iStatus = boardStatus(board);

  const placeShip = (coords, length, direction) => {
    const newShip = createShip(length);
    const index = board.findIndex(
      (element) => element[0] === coords[0] && element[1] === coords[1],
    );
    iStatus[index].ship = newShip;

    if (direction === 'y') {
      for (let i = 0; i < length; i += 1) {
        iStatus[index + i].ship = newShip;
      }
    }
    if (direction === 'x') {
      for (let j = 10; j < length * 10; j += 10) {
        iStatus[index + j].ship = newShip;
      }
    }
  };

  const hasShip = (coords) => {
    const index = board.findIndex(
      (element) => element[0] === coords[0] && element[1] === coords[1],
    );
    if (iStatus[index].ship != null) {
      return true;
    }
    return false;
  };

  return { board, iStatus, placeShip, hasShip };
};

module.exports = Gameboard;
