import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        this.add.text(300, 250, "Word Blitz", {
            fontSize: "48px",
            color: "#ffffff"
        }).setOrigin(0.5);
    }
}