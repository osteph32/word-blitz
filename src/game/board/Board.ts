import Phaser from "phaser";
import LetterTile from "../tiles/LetterTile";
import Grid from "../grid/Grid";

export default class Board {
    private scene: Phaser.Scene;
    private tiles: LetterTile[] = [];
    private grid = new Grid();

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public addTile(letter: string, x: number, y: number) {
        const tile = new LetterTile(
            this.scene,
            x,
            y,
            letter,
            (tile) => this.snapTile(tile)
        );
        this.tiles.push(tile);
    }

    public getTiles() {
        return this.tiles;
    }

    public snapTile(tile: LetterTile) {
        const { col, row } = this.grid.worldToGrid(tile.x, tile.y);
        const pos = this.grid.gridToWorld(col, row);

        tile.snapTo(pos.x, pos.y);
    }
}