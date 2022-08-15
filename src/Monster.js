"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this.lifePoints;
        if (damage > 0) {
            this._lifePoints -= damage;
        }
        if (this.lifePoints < 1) {
            this._lifePoints = -1;
        }
        return this.lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this.strength);
    }
}
exports.default = Monster;
