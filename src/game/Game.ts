import Phaser from "phaser";
import GameScene from "./scenes/GameScene";

export function createGame(parent: string) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        backgroundColor: "#1e1e2e",
        parent,
        scene: [GameScene],
    });
}