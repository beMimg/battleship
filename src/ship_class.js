class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.isItSunk = false;
  }

  beenHit() {
    this.hits += 1;
    this.isSunk(); // everytime ship gets hit checks if the hits matches its length
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.isItSunk = true;
    }
  }
}

module.exports = Ship;
