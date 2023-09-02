import { InventoryItems } from "../models/constants.js";
export class UI {
    constructor() {
        this.instructionsBtn = document.querySelector("#instructions-btn");
        this.instructionsDiv = document.querySelector(".instructions");
        this.closeBtn = document.querySelector(".close-btn");
        this.startBtn = document.querySelector("#start-btn");
        this.loadingPage = document.querySelector("#loading-page");
        this.gamePage = document.querySelector(".game-page");
        this.backBtn = document.querySelector(".main-menu-btn");
        this.resetBtn = document.querySelector(".reset-btn");
        this.inventoryBtn = document.querySelector(".inventory-btn");
        this.inventory = document.querySelector("#inventory-items");
    }
    displayInstructions() {
        this.instructionsBtn.addEventListener("click", () => {
            this.instructionsDiv.classList.remove("hide");
        });
        this.closeBtn.addEventListener("click", () => {
            this.instructionsDiv.classList.add("hide");
        });
    }

    displayGame() {
        this.startBtn.addEventListener("click", () => {
            this.loadingPage.classList.add("hide");
            this.gamePage.classList.remove("hide");
        });
        this.backBtn.addEventListener('click', () => {
            this.loadingPage.classList.remove("hide");
            this.gamePage.classList.add("hide");
        })
        return true;
    }
    createInventory() {
        InventoryItems.forEach(item => {
            let count = 0;
            const itemType = document.createElement('div');
            const countDiv = document.createElement('div');
            countDiv.classList.add('count');
            countDiv.innerText = count;
            itemType.classList.add(`${item}`);
            itemType.classList.add(`inventory-item`);
            itemType.setAttribute("id", `${item}`);
            itemType.setAttribute("draggable", `true`);
            itemType.appendChild(countDiv);
            this.inventory.appendChild(itemType);
        })
    }
    displayInventory() {
        this.inventoryBtn.addEventListener("click", () => {
            this.inventory.classList.toggle('hide');
        });
    }
}
