import Phaser from "phaser";
import Board from "../board/Board";

export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        const board = new Board(this);

        board.addTile("A", 300, 250);

    }
}