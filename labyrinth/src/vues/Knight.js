import Point from "../models/Point"

class Knight {
    constructor() {
        this.spriteSheet = new createjs.SpriteSheet(spriteSheetDefinition);
        this.animation = new createjs.Sprite(this.spriteSheet, "run");
    }

    /**
     * Coordinates in pixels of the position
     * @param x
     * @param y
     */
    set position(coords) {
        this.animation.x = coords.x;
        this.animation.y = coords.y;
    }

    get position() {
        return new Point(this.animation.x, this.animation.y);
    }
}
;

let spriteSheetDefinition = {
    images: [require("../assets/knight/GHKnight.png")],
    frames: {width: 36, height: 50},
    animations: {
        stand: 0,
        run: [1, 5],
        jump: [6, 8, "run"]
    }
};

export default Knight;