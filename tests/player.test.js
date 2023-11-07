/* eslint-disable */
const Player = require('../src/player');

describe('players can take turns playing the gameby attacking the enemy Gameboard', () => {
  it('expect playerOne.turn to return false when playerOne attacks', () => {
    const player = Player('John');
    player.playerOneAttacks([0, 0]);
    expect(player.playerOne.turn).toBeFalsy();
  });
});
