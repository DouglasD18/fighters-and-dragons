"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player, environment) {
        super(player);
        this.environment = environment;
    }
    fight() {
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
exports.default = PVE;
