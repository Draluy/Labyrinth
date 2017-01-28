/**
 * Created by redeyed on 1/27/17.
 * Based on //https://en.wikipedia.org/wiki/Breadth-first_search
 */


class FloodPathingService {
    constructor(labyrinth) {
        this.labyrinth = labyrinth;
    }

    findPath(start, end) {
        let S = new Set();
        let Q = [];

        start.parent = null;
        Q.push(start);
        S.add(start);
        while (Q.length > 0 ) {
            let current = Q.pop();
            if (Object.is(current, end)) {
                return current;
            }
            for (let n of getAdjacentCells(current, this.labyrinth)){
                if (!S.has(n)) {
                    S.add(n);
                    Q.push(n);
                    n.parent = current;
                }
            }

        }
        return null;
    }
}

function getAdjacentCells(tile, labyrinth) {
    let cells = [];
    for (let cell of labyrinth.rooms) {
        if ((Math.abs(cell.x - tile.x) === 1 && cell.y === tile.y)
            || (Math.abs(cell.y - tile.y) === 1 && cell.x === tile.x)) {
            cells.push(cell);
        }
    }
    return cells;
}


export default FloodPathingService;