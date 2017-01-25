/**
 * Created by redeyed on 1/18/17.
 *
 * Holds the state of all the actors of the rendered scene
 */


import GridService from '../services/GridService';
import Knight from './Knight.js';
import config from '../Config';
import Labyrinth from '../models/Labyrinth'

let player = new Knight();

class Stage {
    constructor(){
        this.stage = new createjs.Stage("game");

        this.gridService = new GridService();
        this.gridService.drawGrid(this.stage);
        this.gridService.drawLabyrinth(this.stage, new Labyrinth());

        this.stage.addChild(player.animation);
        this.stage.update();
    }

    render (){
        this.stage.update();
    }

    updatePlayerPositionFromClick (mouseX, mouseY){
       let {x,y} = this.gridService.getCellCoords(mouseX,mouseY);
       let labSize = config.grid.nbCells * config.grid.cellSize;
       if (x <  labSize && y < labSize) {
           player.setPosition(x, y);
       }
    }
}

export default Stage;