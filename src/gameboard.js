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

  // const isPlacementAvailable = (coords, length) => {
  //   const index = board.findIndex(
  //     (element) => element[0] === coords[0] && element[1] === coords[1],
  //   );
  //   let allNull = true;
  //   for (let i = 0; i < length; i += 1) {
  //     if (iStatus[index + i].ship !== null) {
  //       allNull = false;
  //       break;
  //     }
  //   }
  //   if (allNull) return true;
  // };

  const placeShip = (coords, length, direction) => {
    const newShip = createShip(length);
    const index = board.findIndex(
      (element) => element[0] === coords[0] && element[1] === coords[1],
    );

    // do nothing if any there's a ship in coords
    for (let k = 0; k < length; k += 1) {
      for (let n = 0; n < length * 10; n += 10) {
        if (
          iStatus[index].ship !== null ||
          iStatus[index + k].ship !== null ||
          iStatus[index + n].ship !== null
        ) {
          return null;
        }
      }
    }

    if (direction === 'x') {
      for (let i = 0; i < length; i += 1) {
        iStatus[index].ship = newShip;
        iStatus[index + i].ship = newShip;
      }
    }
    if (direction === 'y') {
      iStatus[index].ship = newShip;
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

  const recieveAttack = (coords) => {
    const index = board.findIndex(
      (element) => element[0] === coords[0] && element[1] === coords[1],
    );
    iStatus[index].isAttacked = true;
    if (iStatus[index].ship !== null) {
      iStatus[index].ship.beenHit();
      return true;
    }
    return false;
  };

  const isAllSunk = () => {
    const ocuppiedWithShip = iStatus.filter((index) => index.ship != null);
    const allSunked = ocuppiedWithShip.every(
      (index) => index.ship.isItSunk === true,
    );
    if (allSunked) {
      return true;
    }
    return false;
  };

  return {
    board,
    iStatus,
    placeShip,
    hasShip,
    recieveAttack,
    isAllSunk,
  };
};

module.exports = Gameboard;
