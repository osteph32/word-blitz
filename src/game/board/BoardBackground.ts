import Phaser from "phaser";

export default class BoardBackground {
    constructor(scene: Phaser.Scene) {
        const graphics = scene.add.graphics();

        graphics.fillStyle(0x2f5d3a);
        graphics.fillRect(0, 0, 1280, 720);

        graphics.lineStyle(1, 0xffffff, 0.08);

        const cellSize = 64;

        for (let x = 0; x <= 1280; x += cellSize) {
            graphics.lineBetween(x, 0, x, 720);
        }

        for (let y = 0; y <= 720; y += cellSize) {
            graphics.lineBetween(0, y, 1280, y);
        }
    }
}