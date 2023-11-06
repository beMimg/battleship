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
    game.placeShip([0, 0], 3, 'y');
    expect(game.hasShip([0, 1])).toBe(true);
  });

  it('should return true if hasShip checks a different coordinate because ship has more than one length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'y');
    expect(game.hasShip([0, 2])).toBe(true);
  });

  it('should return false because length of the ship ended before', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'y');
    expect(game.hasShip([0, 3])).toBe(false);
  });
});

describe('vertical checking', () => {
  it('should return true when checking the next index in a horizontal ship', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'x');
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
    expect(game.recieveAttack([0, 0])).toBe(false);
  });
  it('should return true because recieveAttack hit the ship', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'y');
    expect(game.recieveAttack([0, 0])).toBe(true);
  });
});
