"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(fighter, _fighter) {
        super(fighter);
        this.fighter = fighter;
        this._fighter = _fighter;
    }
    fight() {
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
exports.default = PVP;
