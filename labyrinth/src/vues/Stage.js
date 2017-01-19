/**
 * Created by redeyed on 1/18/17.
 *
 * Holds the state of all the actors of the rendered scene
 */


import config from '../Config';
import Knight from './Knight.js';

let player = new Knight();

class Stage {
    constructor(){
        this.stage = new createjs.Stage("game");
        this.stage.regX=0.5; this.stage.regY=0.5;

        this.initGrid();
        this.stage.addChild(player.animation);
    }

    initGrid () {
        let nbCells = config.grid.nbCells;
        let cellSize = config.grid.cellSize;
        let gridColor = config.grid.gridColor;

        createjs.Shape.prototype.snapToPixel = true;
        var container = new createjs.Container();

        for (let  i=0; i<nbCells +1; i++){
            let line = new createjs.Shape();
            line.graphics.setStrokeStyle(1);
            line.graphics.beginStroke(gridColor);
            line.graphics.moveTo(i * cellSize, 0);
            line.graphics.lineTo(i * cellSize, nbCells * cellSize);
            line.graphics.endStroke();
            container.addChild(line);

            line = new createjs.Shape();
            line.graphics.setStrokeStyle(1);
            line.graphics.beginStroke(gridColor);
            line.graphics.moveTo( 0, i * cellSize);
            line.graphics.lineTo( nbCells * cellSize, i * cellSize);
            line.graphics.endStroke();
            container.addChild(line);
        }
        this.stage.addChild(container);
    }

    render (){
        this.stage.update();
    }

    getKnight (){
       return player;
    }
}

export default Stage;