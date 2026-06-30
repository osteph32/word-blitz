export default class Grid {
    public readonly cellSize: number;

    constructor(cellSize: number = 64) {
        this.cellSize = cellSize;
    }

    worldToGrid(x: number, y: number) {
        return {
            col: Math.round(x / this.cellSize),
            row: Math.round(y / this.cellSize),
        };
    }

    gridToWorld(col: number, row: number) {
        return {
            x: col * this.cellSize,
            y: row * this.cellSize,
        };
    }
}