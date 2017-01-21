<template>
    <canvas id="game" width="800" height="600" @click="handleClick"></canvas>
</template>

<script>
import Stage from './Stage.js';
import config from '../Config';
import CanvasUtil from '../utils/CanvasUtil'

/**
 * process input, update, render
 */

export  default {
    name: 'game',
    mounted: function () {
        this.stage = new Stage();
    },
    methods: {
        handleClick(event){
            //process input
            let canvas = document.querySelector("#game");
            let {x,y} = CanvasUtil.getCorrectedCursorPosition(canvas, event);

            //update
            this.stage.updatePlayerPositionFromClick(x, y);

            //render
            this.stage.render();
        }
    }
};

</script>

<style>
canvas {
    border: 1px solid black;
    width:80vw;
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
}
</style>
