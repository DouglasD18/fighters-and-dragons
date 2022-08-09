"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 60;
        Halfling.instances += 1;
    }
    get maxLifePoints() {
        return this.maxLifePoints;
    }
    static createdRacesInstances() {
        return this.instances;
    }
}
exports.default = Halfling;
