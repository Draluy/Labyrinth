/**
 * Created by redeyed on 1/22/17.
 * Contains the information for a tile
 */

class Room {

    /**
     * Position of the cell in the grid
     * @param x The nth cell from the left
     * @param y The nth cell from the top
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isStart = false;
        this.isEnd = false;
    }
}

export default Room;