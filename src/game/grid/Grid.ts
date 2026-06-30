export default class Grid {
    public readonly cellSize: number;
    private occupied = new Map<string, boolean>();

    constructor(cellSize: number = 64) {
        this.cellSize = cellSize;
    }

    worldToGrid(x: number, y: number) {
        return {
            col: Math.floor(x / this.cellSize),
            row: Math.floor(y / this.cellSize),
        };
    }

    gridToWorld(col: number, row: number) {
        return {
            x: col * this.cellSize + this.cellSize / 2,
            y: row * this.cellSize + this.cellSize / 2,
        };
    }

    private key(col: number, row: number): string {
        return `${col},${row}`;
    }

    public isOccupied(col: number, row: number): boolean {
        return this.occupied.has(this.key(col, row));
    }

    public occupy(col: number, row: number) {
        this.occupied.set(this.key(col, row), true);
    }

    public clear(col: number, row: number) {
        this.occupied.delete(this.key(col, row));
    }
}