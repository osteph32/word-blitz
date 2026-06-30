import Phaser from "phaser";
import Board from "../board/Board";
import TileBag from "../TileBag";
import Hand from "../hand/Hand";
import BoardBackground from "../board/BoardBackground";

export default class GameScene extends Phaser.Scene {
    private board!: Board;

    constructor() {
        super("GameScene");
    }

    create() {
        new BoardBackground(this);

        this.board = new Board(this);

        const tileBag = new TileBag();

        this.add.text(20, 20, "WORD BLITZ", {
            fontSize: "40px",
            color: "#ffffff",
            fontStyle: "bold",
        });

        this.add.text(20, 70, `Tiles Left: ${tileBag.remaining()}`, {
            fontSize: "24px",
            color: "#ffffff",
        });

        const hand = new Hand(this.board, tileBag);

        hand.drawStartingHand();

    }
}