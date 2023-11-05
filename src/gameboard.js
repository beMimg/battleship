const Gameboard = () => {
  const buildBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        board.push([i, j]);
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

  return { board, iStatus };
};

// const game = Gameboard();
// game.iStatus[0].isAttacked = true;
// console.log(game);
module.exports = Gameboard;
