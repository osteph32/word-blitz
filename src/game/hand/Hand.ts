import Phaser from "phaser";
import Board from "../board/Board";
import TileBag from "../TileBag";

export default class Hand {
    private board: Board;
    private tileBag: TileBag;

    private readonly tilesPerRow = 11;
    private readonly spacing = 70;
    private readonly startY = 610;

    constructor(board: Board, tileBag: TileBag) {
        this.board = board;
        this.tileBag = tileBag;
    }

    public drawStartingHand() {
        const gameWidth = 1280;

        for (let i = 0; i < 21; i++) {
            const letter = this.tileBag.draw();

            const row = Math.floor(i / this.tilesPerRow);
            const col = i % this.tilesPerRow;

            const rowWidth = Math.min(this.tilesPerRow, 21 - row * this.tilesPerRow);
            const startX = (gameWidth - rowWidth * this.spacing) / 2 + this.spacing / 2;

            this.board.addTile(
                letter,
                startX + col * this.spacing,
                this.startY + row * this.spacing
            );
        }
    }
}