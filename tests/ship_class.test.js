let Ship = require('../src/assets/ship_class');

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
});
