import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private fighter: Fighter, private _fighter: Fighter) {
    super(fighter);
  }

  fight(): number {
    let battleEnded = 0;
    while (battleEnded === 0) {
      this.fighter.attack(this._fighter);
      if (this._fighter.lifePoints < 1) {
        battleEnded = 1;
      }
      this._fighter.attack(this.fighter);
      if (this.fighter.lifePoints < 1) {
        battleEnded = -1;
      }
    }
    return battleEnded;
  }
}