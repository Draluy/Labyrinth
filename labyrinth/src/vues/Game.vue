<template>
    <canvas id="game" width="800" height="600" @click="handleClick"></canvas>
</template>

<script>
    import {Stage} from './Stage.js';
    import config from '../Config';
    import CanvasUtil from '../utils/CanvasUtil'
    import {PlayerPositionService} from "../services/PlayerPositionService"
    import GridService from "../services/GridService";
    import {FloodPathingService} from "../services/pathfinding/FloodPathingService"

    /**
     * process input, update, render
     */

    export  default {
        name: 'game',
        mounted: function () {
            this.stage = new Stage();
            this.playerPositionService = new PlayerPositionService();

            createjs.Ticker.addEventListener("tick", handleTick.bind(this));
        },
        methods: {
            handleClick(event){
                let canvas = document.querySelector("#game");
                this.point = CanvasUtil.getCorrectedCursorPosition(canvas, event);
                let gridService = new GridService();
                let cellCoords = gridService.getCellCoords(this.point.x, this.point.y);

                let pathingService = new FloodPathingService(this.stage.labyrinth);
                let start = gridService.getCellCoords(this.stage.player.position.x, this.stage.player.position.y);
                let path = pathingService.findPath(start, cellCoords);
                if (path) {
                    //move the player, a path has been found
                    this.playerPositionService.startJourney(path);
                }
            }
        }
    };

    function handleTick(event) {
        // Actions carried out each tick (aka frame)
        if (!event.paused && this.point) {
            //process input
            let point = this.point;

            //update
            let newPos = this.playerPositionService.getInterpolatedPixel();

            if (newPos) {
                this.stage.player.position = newPos;
                //render
                this.stage.render();
            } else {
                this.point = null;
            }
        }
    }

</script>

<style>
    canvas {
        border: 1px solid black;
        width: 80vw;
        image-rendering: optimizeSpeed;
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: optimize-contrast;
        -ms-interpolation-mode: nearest-neighbor;
    }
</style>
