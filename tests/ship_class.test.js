let Ship = require('../src/assets/ship_class');

describe('ship object', () => {
  it('should return an object', () => {
    const ship1 = new Ship(3);
    expect(ship1).toEqual({
      length: 3,
      hits: 0,
      isSunk: false,
    });
  });
});
