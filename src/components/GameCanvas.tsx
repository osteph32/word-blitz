import { useEffect } from "react";
import Phaser from "phaser";
import { createGame } from "../game/Game";

export default function GameCanvas() {
    useEffect(() => {
        const game: Phaser.Game = createGame("game-container");

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div id="game-container" />;
}