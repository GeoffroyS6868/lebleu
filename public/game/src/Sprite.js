class Sprite {
    constructor(config) {

        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded= true;
        };

        this.animations = config.animations || {
            "idle-down" : [[0, 0]],
            "walk-down" : [[1, 0], [0, 0], [3, 0], [0, 0]],
            "idle-right": [[0, 1]],
            "walk-right": [[1, 1], [0, 1], [3, 1], [0, 1]],
            "idle-left" : [[0, 2]],
            "walk-left" : [[1, 2], [0, 2], [3, 2], [0, 2]],
            "idle-up"   : [[0, 3]],
            "walk-up"   : [[1, 3], [0, 3], [3, 3], [0, 3]]
        };
        this.currentAnimation = config.currenAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 18;
        this.animationFrameProgress = this.animationFrameLimit;

        this.gameObject = config.gameObject;
    };

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }

    drawPlayer(ctx, cameraPerson, width, height, mapWidth, mapHeight) {
        var x = this.gameObject.x - 72 / 2 + (width / 2) - cameraPerson.x;
        var y = this.gameObject.y - 128 / 2 + (height / 2) - cameraPerson.y;

        if (this.gameObject.x < (width / 2))
            x = this.gameObject.x - 72 / 2;
        if (this.gameObject.y < (height / 2))
            y = this.gameObject.y - 128 / 2;
        const [frameX, frameY] = this.frame;

        //console.log(x, y, "where", this.gameObject.x, this.gameObject.y);
        this.isLoaded && ctx.drawImage(
            this.image,
            frameX * 72, frameY * 128,
            72, 128,
            x, y,
            72, 128
        );
        this.updateAnimationProgress();
    }

    draw(ctx, cameraPerson, width, height, mapWidth, mapHeight) {
        var x = this.gameObject.x - 72 / 2 + (width / 2) - cameraPerson.x;
        var y = this.gameObject.y - 128 / 2 + (height / 2) - cameraPerson.y;

        if (cameraPerson.x < (width / 2))
            x = this.gameObject.x - 72 / 2;
        if (cameraPerson.y < (height / 2))
            y = this.gameObject.y - 128 / 2;
        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(
            this.image,
            frameX * 72, frameY * 128,
            72, 128,
            x, y,
            72, 128
        );
        this.updateAnimationProgress();
    }
}