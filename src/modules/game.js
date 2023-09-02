import { World } from "../modules/world.js";
import { UI } from "../modules/UI.js";
import { Player } from "../modules/player.js";

export class Game {
    constructor() {
        this.ui = new UI();
        this.loginGame();
    }
    loginGame() {
        this.ui.displayInstructions();
        if (this.ui.displayGame()) {
            this.startGame();
        }
    }
    startGame() {
        const world = new World();
        world.generateWorld();
        this.resetGame(world);
        this.ui.createInventory();
        this.ui.displayInventory();
        const player = new Player();
        player.removeTileByToolType();
        player.addTileByType();
    }
    resetGame(world) {
        this.ui.resetBtn.addEventListener("click", () => {
            world.gameWorld.innerHTML = "";
            world.generateWorld();
            const counts = document.querySelectorAll('.count');
            counts.forEach(count => count.innerText = 0);
            world.gameWorld.style.cursor = 'default';
        });
    }
}
