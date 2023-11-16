/* eslint-disable */
import Gameboard from '../src/gameboard';
import { error } from '../src/utils';

describe('the right square checking', () => {
  it('should return true if there`s a ship in a the right coordinate', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'x');
    expect(game.hasShip([0, 0])).toBe(true);
  });

  it('should return true, checking if ships length go from 5,4,3,3,2 (horizontal)', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'x');
    game.placeShip([1, 0], 'x');
    game.placeShip([2, 0], 'x');
    game.placeShip([3, 0], 'x');
    game.placeShip([4, 0], 'x');
    expect(game.howManyShips()).toEqual(17);
  });

  it('should return true, checking if ships length go from 5,4,3,3,2 (vertical)', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'y');
    game.placeShip([0, 1], 'y');
    game.placeShip([0, 2], 'y');
    game.placeShip([0, 3], 'y');
    game.placeShip([0, 4], 'y');
    expect(game.howManyShips()).toEqual(17);
  });

  it('should return true when check if there`s a ship in a the right coordinate giving the index as coords', () => {
    const game = Gameboard();
    game.placeShip(0, 'x');
    expect(game.hasShip([0, 0])).toBe(true);
  });

  it('should return false if there`s a ship in the wrong cooordinate', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'x');
    expect(game.hasShip([1, 2])).toBe(false);
  });
});

describe('horizontal checking', () => {
  it('should return true if hasShip checks a different coordinate because ship has more than one length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'x');
    expect(game.hasShip([0, 1])).toBe(true);
  });

  it('should return true if hasShip checks a different coordinate because ship has more than one length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'x');
    expect(game.hasShip([0, 2])).toBe(true);
  });

  it('should return false because length of the ship ended before', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 3, 'x');
    expect(game.hasShip([0, 3])).toBe(false);
  });
});

describe('vertical checking', () => {
  it('should return true when checking the next index in a vertical ship', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'y');
    expect(game.hasShip([0, 0])).toBe(true);
    expect(game.hasShip([1, 0])).toBe(true);
    expect(game.hasShip([2, 0])).toBe(true);
  });

  it('should return false if hasShip(is bigger than ship.lenght', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'x');
    expect(game.hasShip([6, 0])).toBe(false);
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
    game.placeShip([0, 0], 'y');
    expect(game.recieveAttack([0, 0])).toBe(true);
  });

  it('isAttacked should be set to true and ship  when recieveAttack hit', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'y');
    let index = 0;
    game.recieveAttack([0, 0]);
    expect(game.iStatus[index].isAttacked).toBe(true);
    expect(game.iStatus[index].ship.hits).toBe(1);
  });

  it('isItSunk should return false if hits < length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'y');
    let index = 0;
    game.recieveAttack([0, 0]);
    expect(game.iStatus[index].isAttacked).toBe(true);
    expect(game.iStatus[index].ship.hits).toBe(1);
    expect(game.iStatus[index].ship.isItSunk).toBe(false);
  });

  it('isItSunk should return true if hits >= length', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'y');
    let index = 0;
    game.recieveAttack([0, 0]);
    game.recieveAttack([1, 0]);
    game.recieveAttack([2, 0]);
    game.recieveAttack([3, 0]);
    game.recieveAttack([4, 0]);
    expect(game.iStatus[index].isAttacked).toBe(true);
    expect(game.iStatus[index].ship.hits).toBe(5);
    expect(game.iStatus[index].ship.isItSunk).toBe(true);
  });
});

describe('checks whether or not all of the ships have been sunk', () => {
  it('should return true if all ships are sunk', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'y');
    game.recieveAttack([0, 0]);
    game.recieveAttack([1, 0]);
    game.recieveAttack([2, 0]);
    game.recieveAttack([3, 0]);
    game.recieveAttack([4, 0]);

    expect(game.isAllSunk()).toBe(true);
  });

  it('should return false if not all ships are sunk', () => {
    const game = Gameboard();
    game.placeShip([0, 0], 'y');
    game.recieveAttack([0, 0]);
    game.recieveAttack([1, 0]);
    game.recieveAttack([2, 0]);
    game.recieveAttack([3, 0]);

    expect(game.isAllSunk()).toBe(false);
  });
});

describe('check if the placement of the ship is available', () => {
  const game = Gameboard();
  it('should return  because the length reaches another ship (horizontal)', () => {
    game.placeShip([0, 2], 'x');
    expect(game.placeShip([0, 0], 'x')).toEqual(error('placement'));
    expect(game.placeShip([0, 1], 'x')).toEqual(error('placement'));
    expect(game.placeShip([0, 2], 'x')).toEqual(error('placement'));
  });

  it('should return null because the length reaches another ship (vertical)', () => {
    game.placeShip([3, 0], 'y');
    expect(game.placeShip([1, 0], 'y')).toEqual(error('placement'));
    expect(game.placeShip([2, 0], 'y')).toEqual(error('placement'));
    expect(game.placeShip([3, 0], 'y')).toEqual(error('placement'));
  });

  it('should not placeShip if the lenght go past the end of the row', () => {
    const game = Gameboard();
    expect(game.placeShip([0, 9], 'x')).toEqual(error('placement'));
    expect(game.placeShip([0, 8], 'x')).toEqual(error('placement'));
    expect(game.placeShip([0, 7], 'x')).toEqual(error('placement'));
    expect(game.placeShip([0, 6], 'x')).toEqual(error('placement'));
  });

  it('should not placeShip if the lenght and coords go past the end of the column', () => {
    expect(game.placeShip([9, 0], 'y')).toEqual(error('placement'));
    expect(game.placeShip([8, 0], 'y')).toEqual(error('placement'));
    expect(game.placeShip([8, 2], 'y')).toEqual(error('placement'));
    expect(game.placeShip([8, 1], 'y')).toEqual(error('placement'));
  });
});
