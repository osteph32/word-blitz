import Phaser from "phaser";
import Board from "../board/Board";

export default class GameScene extends Phaser.Scene {
    private board!: Board;

    constructor() {
        super("GameScene");
    }

    create() {

        this.board = new Board(this);

        this.board.addTile("A", 300, 250);

    }
}