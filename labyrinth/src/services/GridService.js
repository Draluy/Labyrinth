/**
 * Created by redeyed on 1/21/17.
 */

import config from '../Config'

let nbCells = config.grid.nbCells;
let cellSize = config.grid.cellSize;
let gridColor = config.grid.gridColor;

class GridService{

    constructor(){}

    getCellCoords (x,y){
        return {"x" : Math.floor(x/cellSize) * cellSize, "y" : Math.floor(y/cellSize) *cellSize};
    }

    drawGrid (stage) {
        let container = new createjs.Container();

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
        stage.addChild(container);
    }
}

export default GridService;