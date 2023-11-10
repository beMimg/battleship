/* eslint-disable */
const Gameboard = require('../src/gameboard');

describe('the right square checking', () => {
  it('should return true when check if theres a ship in a the right coordinate', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 1, 'x');
    expect(game.hasShip([0, 0])).toBe(true);
  });

  it('should return false when check if theres a ship in the wrong cooordinate', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 1, 'x');
    expect(game.hasShip([0, 2])).toBe(false);
  });
});

describe('vertical checking', () => {
  it('should return true if hasShip checks a different coordinate because ship has more than one length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'x');
    expect(game.hasShip([0, 1])).toBe(true);
  });

  it('should return true if hasShip checks a different coordinate because ship has more than one length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'x');
    expect(game.hasShip([0, 2])).toBe(true);
  });

  it('should return false because length of the ship ended before', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'x');
    expect(game.hasShip([0, 3])).toBe(false);
  });
});

describe('vertical checking', () => {
  it('should return true when checking the next index in a horizontal ship', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'y');
    expect(game.hasShip([0, 0])).toBe(true);
    expect(game.hasShip([1, 0])).toBe(true);
    expect(game.hasShip([2, 0])).toBe(true);
  });

  it('should return false if hasShip(is bigger than ship.lenght', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'x');
    expect(game.hasShip([3, 0])).toBe(false);
  });
});

describe('recieveAttack', () => {
  it('should return false because recieveAttack missed', () => {
    const game = Gameboard();
    let index = [0, 0];
    expect(game.recieveAttack([0, 0])).toBe(false);
  });

  it('isAttacked should be set to true and ship to null when recieveAttack missed', () => {
    const game = Gameboard();
    let index = 0;
    game.recieveAttack([0, 0]);
    expect(game.iStatus[index].isAttacked).toBe(true);
    expect(game.iStatus[index].ship).toBe(null);
  });

  it('should return true because recieveAttack hit the ship', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'y');
    expect(game.recieveAttack([0, 0])).toBe(true);
  });

  it('isAttacked should be set to true and ship  when recieveAttack hit', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 2, 'y');
    let index = 0;
    game.recieveAttack([0, 0]);
    expect(game.iStatus[index].isAttacked).toBe(true);
    expect(game.iStatus[index].ship.hits).toBe(1);
  });

  it('isItSunk should return true if hits >= length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 1, 'y');
    let index = 0;
    game.recieveAttack([0, 0]);
    expect(game.iStatus[index].isAttacked).toBe(true);
    expect(game.iStatus[index].ship.hits).toBe(1);
    expect(game.iStatus[index].ship.isItSunk).toBe(true);
  });

  it('isItSunk should return true if hits >= length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 2, 'y');
    let index = 0;
    game.recieveAttack([0, 0]);
    expect(game.iStatus[index].isAttacked).toBe(true);
    expect(game.iStatus[index].ship.hits).toBe(1);
    expect(game.iStatus[index].ship.isItSunk).toBe(false);
  });
});

describe('checks whether or not all of the ships have been sunk', () => {
  it('should return true if all ships are sunk', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 1, 'y');
    game.recieveAttack([0, 0]);
    expect(game.isAllSunk()).toBe(true);
  });

  it('should return false if not all ships are sunk', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 2, 'y');
    game.recieveAttack([0, 0]);
    expect(game.isAllSunk()).toBe(false);
  });
});

// write tests for allowed placement of ships

describe('check if the placement of the ship is available', () => {
  const game = Gameboard();
  it('should return null because the length reaches another ship (horizontal)', () => {
    game.placeShip([0, 2], 1, 'x');
    expect(game.placeShip([0, 0], 3, 'x')).toBeNull;
    expect(game.placeShip([0, 1], 3, 'x')).toBeNull;
    expect(game.placeShip([0, 2], 3, 'x')).toBeNull;
  });

  it('should return null because the length reaches another ship (vertical)', () => {
    game.placeShip([0, 2], 5, 'y');
    expect(game.placeShip([1, 2], 3, 'y')).toBeNull;
    expect(game.placeShip([2, 2], 3, 'y')).toBeNull;
    expect(game.placeShip([3, 2], 3, 'y')).toBeNull;
    expect(game.placeShip([4, 2], 3, 'y')).toBeNull;
  });

  it('should not placeShip if the lenght go past the end of the row', () => {
    expect(game.placeShip([0, 9], 2, 'x')).toBeNull;
    expect(game.placeShip([0, 8], 3, 'x')).toBeNull;
    expect(game.placeShip([0, 7], 4, 'x')).toBeNull;
    expect(game.placeShip([0, 6], 5, 'x')).toBeNull;
  });

  it('should not placeShip if the lenght and coords go past the end of the column', () => {
    expect(game.placeShip([9, 0], 2, 'y')).toBeNull;
    expect(game.placeShip([8, 0], 3, 'y')).toBeNull;
    expect(game.placeShip([7, 0], 4, 'y')).toBeNull;
    expect(game.placeShip([6, 0], 5, 'y')).toBeNull;
  });
});
