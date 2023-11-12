/* eslint-disable */
const Player = require('../src/player');

describe('players can take turns playing the game by attacking the enemy Gameboard', () => {
  it('expect inicial playerOne.turn to return true', () => {
    const player = Player('John');
    expect(player.playerOne.turn).toBe(true);
  });

  //   it('expect playerOne.turn to return true when playerTwo attacks', () => {
  //     const player = Player('John');
  //     player.playerOneAttacks([0, 2]);
  //     player.computerAttacks();
  //     expect(player.playerOne.turn).toBeTruthy();
  //   });

  //   it('expects playerOne to have one hit and playerOne.turn to be true after playerTwo attacks', () => {
  //     const player = Player('John');
  //     player.playerOneAttacks([0, 2]);
  //     player.computerAttacks();
  //     expect(player.playerOne.turn).toBeTruthy();
  //     expect(player.playerOne.game.iStatus).toEqual(
  //       expect.arrayContaining([{ isAttacked: true, ship: null }]),
  //     );
  //   });
});
