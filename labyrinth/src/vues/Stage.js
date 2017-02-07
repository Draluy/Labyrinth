/**
 * Created by redeyed on 1/18/17.
 *
 * Holds the state of all the actors of the rendered scene
 */
import GridService from "../services/GridService";
import Knight from "./Knight.js";
import config from "../Config";
import Labyrinth from "../models/Labyrinth";
import {Point} from "../models/Point";

let player = new Knight();
let labyrinth = new Labyrinth();

export class Stage {
    constructor() {
        this.stage = new createjs.Stage("game");

        this.gridService = new GridService();
        this.gridService.drawGrid(this.stage);

        this.gridService.drawLabyrinth(this.stage, labyrinth);

        this.stage.addChild(player.animation);
        this.stage.update();
    }

    render() {
        this.stage.update();
    }

    get player() {
        return player;
    }

    get labyrinth() {
        return labyrinth;
    }

    updatePlayerPositionFromClick(point) {
        player.position = new Point(point.x * config.grid.cellSize, point.y * config.grid.cellSize);
    }
}





























