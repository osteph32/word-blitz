import Phaser from "phaser";
import Board from "../board/Board";
import TileBag from "../TileBag";
import Hand from "../hand/Hand";

export default class GameScene extends Phaser.Scene {
    private board!: Board;

    constructor() {
        super("GameScene");
    }

    create() {

        this.board = new Board(this);

        const tileBag = new TileBag();

        const hand = new Hand(this.board, tileBag);

        hand.drawStartingHand();

    }
}