/* eslint-disable */

// const gameboard = () => {
//   const buildBoard = () => {
//     const board = [];

//     for (let i = 0; i < 10; i++) {
//       for (let j = 0; j < 10; j++) {
//         board.push([i], [j]);
//       }
//     }
//     return board;
//   };

//   return { buildBoard };
// };

class Gameboard {
  constructor() {}

  buildBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push([i], [j]);
      }
    }
    console.log(board);
  }
}
const gameBoard = new Gameboard();
gameBoard.buildBoard();
console.log(gameBoard);
