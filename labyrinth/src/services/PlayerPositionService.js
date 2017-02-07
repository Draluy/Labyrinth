/**
 * Created by redeyed on 2/5/17.
 */
import config from "../Config";
import {Point} from "../models/Point";

let cellSize = config.grid.cellSize;

export class PlayerPositionService {

    constructor() {
    }

    startJourney(path) {
        this.path = path;
        this.tick = 0;
        this.previousNodeIndex = 0;
        this.currentPosition = null;
    }

    getInterpolatedPixel() {
        console.log()

        if (!this.path || this.previousNodeIndex === (this.path.length -1 )) {
            return null; //no data, or we arrived
        }

        this.previousNode = this.path[this.previousNodeIndex];
        if (this.previousNodeIndex + 1 < this.path.length) { //normal case
            this.nextNode = this.path[this.previousNodeIndex + 1];
        } else { //arriving at last node
            this.nextNode = this.path[this.previousNodeIndex + 1];
        }


        if (this.currentPosition) {
            if (this.currentPosition.x === this.nextNode.x * cellSize
                && this.currentPosition.y === this.nextNode.y * cellSize) {

                this.previousNodeIndex = this.previousNodeIndex + 1;
                return this.currentPosition;
            }
        } else {  //first call
            let {x, y} = this.path[this.previousNodeIndex];
            this.currentPosition = new Point(x * cellSize, y * cellSize);
            return this.currentPosition;
        }


        let deltaX = this.nextNode.x - this.previousNode.x;
        let deltaY = this.nextNode.y - this.previousNode.y;

        this.currentPosition.x = this.currentPosition.x + deltaX; //here 1 is the horizontal speed
        this.currentPosition.y = this.currentPosition.y + deltaY;

        return this.currentPosition;
    }

}
