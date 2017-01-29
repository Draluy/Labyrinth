/**
 * Created by redeyed on 1/18/17.
 *
 * Holds the state of all the actors of the rendered scene
 */
import GridService from "../services/GridService";
import Knight from "./Knight.js";
import config from "../Config";
import Labyrinth from "../models/Labyrinth";
import Point from "../models/Point";

let player = new Knight();

class Stage {
    constructor() {
        this.stage = new createjs.Stage("game");

        this.gridService = new GridService();
        this.gridService.drawGrid(this.stage);
        this.labyrinth = new Labyrinth();
        this.gridService.drawLabyrinth(this.stage, this.labyrinth);

        this.stage.addChild(player.animation);
        this.stage.update();
    }

    render() {
        this.stage.update();
    }

    updatePlayerPositionFromClick(mouseX, mouseY) {
        let cellCoords = this.gridService.getCellCoords(mouseX, mouseY);
        let coords = new Point(cellCoords.x * config.grid.cellSize, cellCoords.y * config.grid.cellSize);
        let labSize = config.grid.nbCells * config.grid.cellSize;

        if (coords.x < labSize && coords.y < labSize) { //check grid boundaries
            if (this.gridService.cellIsNeighbouring(player.position, coords) && this.labyrinth.hasCell(coords)) {
                player.position = new Point(coords.x, coords.y);
            }
        }

    }
}

export default Stage;