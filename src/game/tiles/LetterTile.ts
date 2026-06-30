import Phaser from "phaser";

export default class LetterTile extends Phaser.GameObjects.Container {
    private background: Phaser.GameObjects.Rectangle;
    private letterText: Phaser.GameObjects.Text;
    private startX: number;
    private startY: number;
    private onDrop: (tile: LetterTile) => void;
    private homeX: number;
    private homeY: number;

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

        this.homeX = x;
        this.homeY = y;

        this.background = scene.add.rectangle(0, 0, 64, 64, 0xf6e7b0);
        this.background.setStrokeStyle(3, 0x8b6b3f);

        this.letterText = scene.add.text(0, 0, letter, {
            fontFamily: "Arial",
            fontSize: "38px",
            fontStyle: "bold",
            color: "#3a2b18",
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
            this.setDepth(100);
            this.setScale(1.15);

            this.scene.tweens.add({
                targets: this,
                angle: Phaser.Math.Between(-4, 4),
                duration: 80
            });
        });

        this.on("drag", (_pointer: Phaser.Input.Pointer, dragX: number, dragY: number) => {
            this.x = dragX;
            this.y = dragY;
        });

        this.on("dragend", () => {
            this.setDepth(0);
            this.setScale(1);
            this.setAngle(0);

            this.onDrop(this);
        });
    }

    public snapTo(x: number, y: number) {
        this.homeX = x;
        this.homeY = y;

        this.scene.tweens.add({
            targets: this,
            x,
            y,
            duration: 180,
            ease: "Quad.easeOut",
        });
    }

    public returnHome() {
        this.scene.tweens.add({
            targets: this,
            x: this.homeX,
            y: this.homeY,
            duration: 180,
            ease: "Quad.easeOut",
        });
    }
}
