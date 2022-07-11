class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.height = innerHeight;
        this.canvas.width = innerWidth;
    };

    startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            const cameraPerson = this.map.gameObjects.player;
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                });
            });
            this.map.drawLowerImage(this.ctx, cameraPerson, this.canvas.width, this.canvas.height);
            Object.values(this.map.gameObjects).forEach(object => {
                object.draw(this.ctx, cameraPerson, this.canvas.width, this.canvas.height, this.map.width, this.map.height);
            });
            //this.map.drawUpperImage(this.ctx, cameraPerson);
            requestAnimationFrame(() => {
                step();
            });
        };
        step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.Spawn);

        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.startGameLoop();
    }
};