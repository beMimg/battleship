/* eslint-disable */
import Player from '../src/player';

describe('players can take turns playing the game by attacking the enemy Gameboard', () => {
  it('expect inicial playerOne.turn to return true', () => {
    const player = Player('John');
    expect(player.playerOne.turn).toBe(true);
  });
});
