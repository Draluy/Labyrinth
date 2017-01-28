/**
 * Created by redeyed on 1/27/17.
 * THIS CLASS IS NOT READY
 * Iḿ keeping the code just in case, but don´t plan to use it.
 */

class AStarService {

    constructor(labyrinth){
        this.labyrinth = labyrinth;
    }

    static getPath(start, goal) {

        let openSet = new Set(); // The set of tentative nodes to be evaluated, initially containing the start node
        let closedSet = new Set();  // The set of nodes already evaluated.
        let cameFrom = new Map();    // The map of navigated nodes.

        openSet.add(start);
        let gScore = new Map(); // with default value of Infinity
        gScore.set(start, 0);    // Cost from start along best known path.

        // Estimated total cost from start to goal through y.
        let fScore = new Map(); // with default value of Infinity
        fScore.set(start, gScore.get(start) + this.heuristicCostEstimate(start, goal));

        while (openSet.length > 0) {
            let current = this.getLowestScoreNode(openSet, fScore);//the node in OpenSet having the lowest f_score[] value
            if (current === goal) {
                return this.reconstructPath(cameFrom, goal);
            }

            openSet.delete(current);
            closedSet.add(current);
            for (let neighbour of this.getNeighbours(current)) {
                if (closedSet.has(neighbour)) {
                    continue;        // Ignore the neighbor which is already evaluated.
                }

                fScore.set(neighbour, gScore.get(neighbour) + this.heuristicCostEstimate(neighbour, goal));

                if (!openSet.has(neighbour)) { //neighbor not in OpenSet    // Discover a new node
                    openSet.add(neighbour);
                } else if (fScore.get(neighbour) >= gScore.get(neighbour)) {
                    continue;        // This is not a better path.
                }
                // This path is the best until now. Record it!
                cameFrom.set(neighbour, current);
                gScore.set(neighbour, tentativeGSscore);
                fScore.set(neighbour, gScore.get(neighbour) + this.heuristicCostEstimate(neighbour, goal));
            }
        }
        return null;
    }


    static heuristicCostEstimate(start, goal) {
        return this.distance(start.getCell().getX(), start.getCell().getY(), goal.getCell().getX(), goal.getCell().getY());
    }


    static getLowestScoreNode(openSet, fScore) {
        let minNode = null;
        let minScore = Number.MAX_SAFE_INTEGER;
        for (let node of openSet) {
            if (fScore.get(node) < minScore) {
                minNode = node;
                minScore = fScore.get(node);
            }
        }
        return minNode;
    }

    static reconstructPath(cameFrom, current) {
        let totalPath = new Array();
        totalPath.push(current);
        while (cameFrom.keys().find(o => o === current)) {// current in Came_From.Keys:
            current = cameFrom.get(current);
            totalPath.add(current);
        }
        return totalPath.reverse();
    }

    static getNeighbours(node) {
        let neighbours = new Set();

        if (node.up != null) {
            neighbours.add(node.up)
        }
        if (node.right != null) {
            neighbours.add(node.right)
        }
        if (node.down != null) {
            neighbours.add(node.down)
        }
        if (node.left != null) {
            neighbours.add(node.left)
        }

        return neighbours;
    }
}