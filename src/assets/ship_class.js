class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.isSunk = false;
  }

  beenHit() {
    this.hits++;
  }
}

// const ship1 = new Ship(3);
// console.log(ship1);
module.exports = Ship;
