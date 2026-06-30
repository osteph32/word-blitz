import Phaser from "phaser";
import Board from "../board/Board";
import TileBag from "../TileBag";

export default class Hand {
    private board: Board;
    private tileBag: TileBag;

    private readonly startX = 120;
    private readonly startY = 650;
    private readonly spacing = 70;

    constructor(board: Board, tileBag: TileBag) {
        this.board = board;
        this.tileBag = tileBag;
    }

    public drawStartingHand() {
        for (let i = 0; i < 21; i++) {
            const letter = this.tileBag.draw();

            this.board.addTile(
                letter,
                this.startX + i * this.spacing,
                this.startY
            );
        }
    }
}