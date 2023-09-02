import {
  grass,
  leaves,
  trunk,
  rock,
  soil,
  gold,
  diamond,
} from "../models/constants.js";

class Tool {
  constructor(validTiles) {
    this.validTiles = validTiles;
  }
}
export class Axe extends Tool {
  constructor() {
    super([leaves, trunk]);
  }
}
export class Pickaxe extends Tool {
  constructor() {
    super([rock, gold, diamond]);
  }
}
export class Shovel extends Tool {
  constructor() {
    super([grass, soil]);
  }
}
