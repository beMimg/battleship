const Gameboard = () => {
  const buildBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        board.push([i], [j]);
      }
    }
    return board;
  };

  return { buildBoard };
};

const gameboard = Gameboard();
