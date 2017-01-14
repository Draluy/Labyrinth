<template>
    <canvas id="game" width="800" height="600"></canvas>
</template>

<script>
export  default {
    name: 'stage',
    mounted: function () {
        initGrid();
    }
};

var initGrid = function (){
    let nbCells = 9;
    let cellSize = 40;
    let gridColor = "rgba(0,0,0,1)";
    let stage = new createjs.Stage("game");
    stage.regX=0.5; stage.regY=0.5;

    createjs.Shape.prototype.snapToPixel = true;
     var container = new createjs.Container();

    for (let  i=0; i<nbCells +1; i++){
        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1);
        line.graphics.beginStroke(gridColor);
        //line.snapToPixel = true;
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
    stage.update();
}
</script>

<style>
canvas {
    border: 1px solid black;
    width: 1200px;
    height: auto;
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
}
</style>
