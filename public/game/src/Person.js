class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.moved = true;

        this.directionUpdate = {
            "down": ["y", 1],
            "up": ["y", -1],
            "left": ["x", -1],
            "right": ["x", 1],
        };
    }

    update(state) {
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
}