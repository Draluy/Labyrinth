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
        return {"x" : Math.floor(x/cellSize) , "y" : Math.floor(y/cellSize)};
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

    drawLabyrinth (stage, labyrinth){
        let cells = labyrinth.generateLabyrinth();

        for (var i = 0; i < cells.length; i++) {
            let cell = cells[i];
            var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(cell.x * config.grid.cellSize, cell.y * config.grid.cellSize, config.grid.cellSize, config.grid.cellSize);
            stage.addChild(new createjs.Shape(graphics));
        }
        stage.update();
    }

    cellIsNeighbouring(position, coords) {
        return Math.abs(position.x - coords.x) <= cellSize    && Math.abs(position.y - coords.y) <= cellSize ;
    }

    findCellFromCoords(coords, labyrinth) {
        for(let cell of labyrinth.rooms){
            if (cell.x === coords.x && cell.y === coords.y){
                return cell;
            }
        }
        return null;
    }
}

export default GridService;