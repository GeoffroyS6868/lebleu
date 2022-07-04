class Sprite {
    constructor(config) {

        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded= true;
        };

        this.animations = config.animations || {
            idleDown: [
                [0, 0]
            ]
        };
        this.currenAnimation = config.currenAnimation || "idleDown";
        this.currenAnimationFrame = 0;

        this.gameObject = config.gameObject;
    };

    draw(ctx) {
        const x = this.gameObject.x * 32 - 32 / 2;
        const y = this.gameObject.y * 32 - 32 / 2;
        this.isLoaded && ctx.drawImage(
            this.image,
            0, 0,
            18, 32,
            x, y,
            18, 32
        );
    }
}