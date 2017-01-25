/**
 * Created by redeyed on 1/22/17.
 * Contains the information for a tile
 */

class Room {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.up = null;
        this.left = null;
        this.top = null;
        this.bottom = null;

        this.isStart = false;
        this.isEnd = false;
    }
}

export default Room;