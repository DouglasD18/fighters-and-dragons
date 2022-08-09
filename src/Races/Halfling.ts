import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}