<template>
    <canvas id="game" width="1980px" height="1080px" @click="handleClick"></canvas>
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
        this.stage.render();
    },
    methods: {
        handleClick(event){
            //process input
            let canvas = document.querySelector("#game");
            let {x,y} = CanvasUtil.getCursorPosition(canvas, event);

            //update
            this.stage.getKnight().setPosition(x, y);

            //render
            this.stage.render();
        }
    }
};

</script>

<style>
canvas {
    border: 1px solid black;
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
}
</style>
