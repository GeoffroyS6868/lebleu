class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;

        this.isPlayerControlled = false;

        this.moved = true;

        this.directionUpdate = {
            "down": ["y", 1],
            "up": ["y", -1],
            "left": ["x", -1],
            "right": ["x", 1],
        };
    }

    update(state) {
        this.updateSprite(state);
        this.updatePosition();

        if (this.isPlayerControlled && state.arrow && this.moved) {
            this.direction = state.arrow;
            this.moved = false;
        }
    }

    updatePosition() {
        if (!this.moved) {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.moved = true;
        }
    }

    updateSprite(state) {
        if (this.isPlayerControlled && this.moved && !state.arrow) {
            this.sprite.setAnimation("idle-"+this.direction);
            return;
        }
        if (!this.moved) {
            this.sprite.setAnimation("walk-"+this.direction);
        }
    }

    draw(ctx, cameraPerson, width, height, mapWidth, mapHeight) {
        this.sprite.draw(ctx, cameraPerson, width, height, mapWidth, mapHeight);
    }
}