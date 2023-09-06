import { Axe, Pickaxe, Shovel } from "../modules/tool.js";
import { sky, axe, pickaxe, shovel, axeIcon, pickaxeIcon, shovelIcon } from "../models/constants.js";
export class Player {
    constructor() {
        this.inventoryItems = document.querySelectorAll('.inventory-item');
        this.gameWorld = document.querySelector(".game-grid");
        this.gameWorldTile = document.querySelectorAll(".game-grid div");

    }
    removeTileByToolType() {
        const tools = document.querySelectorAll(".tool-select div");
        let currentTool = null;
        tools.forEach((tool) => {
            tool.addEventListener("click", () => {
                if (tool.className === axe) {
                    currentTool = new Axe();
                } else if (tool.className === pickaxe) {
                    currentTool = new Pickaxe();
                } else if (tool.className === shovel) {
                    currentTool = new Shovel();
                }
                const iconType = tool.className === axe ? axeIcon : tool.className === pickaxe ? pickaxeIcon : shovelIcon;
                this.gameWorld.style.cursor = `url(${iconType}),auto`;
            });
        });

        this.gameWorld.addEventListener("click", (e) => {
            if (currentTool.validTiles.includes(e.target.className)) {
                this.inventoryItems.forEach(item => {
                    if (item.classList.contains(e.target.className)) {
                        const itemCount = item.querySelector('.count');
                        itemCount.innerText = `${parseInt(itemCount.innerText) + 1}`;
                    }
                })
                e.target.className = sky;
            }
        });
    }
    addTileByType() {
        this.inventoryItems.forEach(item => {
            item.addEventListener('dragstart', this.startDrug)
        })
        this.gameWorldTile.forEach(tile => {
            tile.addEventListener("dragenter", this.dragEnter);
            tile.addEventListener("dragleave", this.dragLeave);
            tile.addEventListener("dragover", this.dragOver);
            tile.addEventListener("drop", this.dropFunc);
        })

    }
    startDrug(event) {
        const itemCount = event.target.querySelector('.count');
        if (parseInt(itemCount.innerText) > 0) {
            event.dataTransfer.setData("text", event.target.id);
            event.dataTransfer.dropEffect = "copy";
        }
    }
    dragEnter(event) {
        if (event.target.className === sky) {
            event.preventDefault();
            event.target.classList.add('hover');
        }
    }
    dragLeave(event) {
        event.preventDefault();
        event.target.classList.remove('hover');
    }
    dragOver(event) {
        if (event.target.classList.contains(sky)) {
            event.preventDefault();
        }
    }
    dropFunc(event) {
        if (event.target.classList.contains(sky)) {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            const original = document.getElementById(data);
            const itemCount = original.querySelector('.count');
            itemCount.innerText = `${parseInt(itemCount.innerText) - 1}`;
            event.currentTarget.className = data;

        }
    }
}
