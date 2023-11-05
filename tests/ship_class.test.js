let Ship = require('../src/ship_class');

describe('ship object', () => {
  const ship1 = new Ship(3);

  it('should return an object', () => {
    expect(ship1).toEqual({
      length: 3,
      hits: 0,
      isItSunk: false,
    });
  });

  it('should increase numbers of hits when been hit', () => {
    ship1.beenHit();
    expect(ship1).toEqual({
      length: 3,
      hits: 1,
      isItSunk: false,
    });
  });

  it('isSunk should return true when hits match length', () => {
    const ship = new Ship(3);
    ship.beenHit();
    ship.beenHit();
    ship.beenHit();
    expect(ship.isItSunk).toBe(true);
  });

  it('isSunk should return false when hits are less than length', () => {
    const ship = new Ship(3);
    ship.beenHit();
    expect(ship.isItSunk).toBe(false);
  });
});
