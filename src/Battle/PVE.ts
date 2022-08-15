import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private environment: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    let battleEnded = 0;
    this.environment.forEach((monster) => {
      battleEnded = 0;
      while (battleEnded === 0) {
        this.player.attack(monster);
        if (monster.lifePoints < 1) {
          battleEnded = 1;
        }
        monster.attack(this.player);
        if (this.player.lifePoints < 1) {
          battleEnded = -1;
        }
      }
    });
    return battleEnded;
  }
}