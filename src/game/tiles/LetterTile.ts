import Phaser from "phaser";

export default class LetterTile extends Phaser.GameObjects.Container {
    private background: Phaser.GameObjects.Rectangle;
    private letterText: Phaser.GameObjects.Text;
    private startX: number;
    private startY: number;
    private onDrop: (tile: LetterTile) => void;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        letter: string,
        onDrop: (tile: LetterTile) => void
    ) {
        super(scene, x, y);
        this.onDrop = onDrop;
        this.startX = x;
        this.startY = y;

        this.background = scene.add.rectangle(0, 0, 64, 64, 0xf5e6b3);
        this.background.setStrokeStyle(2, 0x444444);

        this.letterText = scene.add.text(0, 0, letter, {
            fontSize: "36px",
            color: "#222222",
            fontStyle: "bold",
        });

        this.letterText.setOrigin(0.5);
        this.add(this.background);
        this.add(this.letterText);

        scene.add.existing(this);
        this.setSize(64, 64);

        this.setInteractive(
            new Phaser.Geom.Rectangle(-32, -32, 64, 64),
            Phaser.Geom.Rectangle.Contains
        );

        scene.input.setDraggable(this);

        this.on("dragstart", () => {
            this.setScale(1.1);
        });

        this.on("drag", (_pointer: Phaser.Input.Pointer, dragX: number, dragY: number) => {
            this.x = dragX;
            this.y = dragY;
        });

        this.on("dragend", () => {
            this.setScale(1);
            this.onDrop(this);
        });
    }

    public snapTo(x: number, y: number) {
        this.scene.tweens.add({
            targets: this,
            x,
            y,
            duration: 120,
            ease: "Quad.easeOut",
        });
    }
}
