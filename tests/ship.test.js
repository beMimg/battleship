/* eslint-disable */
let createShip = require('../src/ship');

describe('ship object', () => {
  const ship = createShip(3);

  it('should return an object', () => {
    expect(ship).toMatchObject({
      length: 3,
      hits: 0,
      isItSunk: false,
    });
  });

  it('should increase numbers of hits when been hit', () => {
    ship.beenHit();
    expect(ship).toMatchObject({
      length: 3,
      hits: 1,
      isItSunk: false,
    });
  });

  it('isSunk should return true when hits match length', () => {
    ship.beenHit();
    ship.beenHit();
    expect(ship.isItSunk).toBe(true);
  });

  it('isSunk should return false when hits are less than length', () => {
    const ship1 = createShip(4);
    ship1.beenHit();
    expect(ship1.isItSunk).toBe(false);
  });
});
