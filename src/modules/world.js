import { worldDisplay, soil, gold, diamond } from "../models/constants.js";

export class World {
  constructor() {
    this.gameWorld = document.querySelector(".game-grid");
  }

  generateWorld() {
    worldDisplay.forEach((row) => {
      row.forEach((tile) => {
        const tileType = document.createElement("div");
        this.gameWorld.appendChild(tileType);
        if (tile === soil) {
          this.randomTile(tileType);
        } else {
          tileType.className = `${tile}`;
        }
      });
    });
  }

  randomTile(tile) {
    const rand = Math.random();
    if (rand < 0.15) {
      tile.className = `${gold}`;
    } else if (rand > 0.95) {
      tile.className = `${diamond}`;
    } else {
      tile.className = `${soil}`;
    }
  }
}
