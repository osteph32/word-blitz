import Phaser from "phaser";
import LetterTile from "../tiles/LetterTile";

export default class Board {
    private scene: Phaser.Scene;
    private tiles: LetterTile[] = [];

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public addTile(letter: string, x: number, y: number) {
        const tile = new LetterTile(this.scene, x, y, letter);
        this.tiles.push(tile);
    }

    public getTiles() {
        return this.tiles;
    }
}