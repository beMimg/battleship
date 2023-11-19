/* eslint-disable */
import Player from '../src/player';

describe('players can take turns playing the game by attacking the enemy Gameboard', () => {
  it('expect inicial playerOne.turn to return true', () => {
    const player = Player('John');
    expect(player.playerOne.turn).toBe(true);
  });

  it('expect playerOne.turn to return true when playerTwo attacks', async () => {
    const player = Player('John');
    player.playerOneAttacks([0, 2]);
    player.computerAttacks();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(player.playerOne.turn).toBeTruthy();
  });
});
