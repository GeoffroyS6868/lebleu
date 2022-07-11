class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {};

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

        this.height = config.height;
        this.width = config.width;
    }

    drawLowerImage(ctx, cameraPerson, width, height) {
        this.x = (width / 2) - cameraPerson.x;
        this.y = (height / 2) - cameraPerson.y;

        if (cameraPerson.x < (width / 2))
            this.x = 0;
        if (cameraPerson.y < (height / 2))
            this.y = 0;
        ctx.drawImage(this.lowerImage, this.x, this.y);
    }

    drawUpperImage(ctx, cameraPerson, width, height) {
        ctx.drawImage(this.upperImage, this.x, this.y);
    }
}

window.OverworldMaps = {
    Spawn: {
        width: 6400,
        height: 3840,
        lowerSrc: "/game/ressources/image/spawn.png",
        upperSrc: "",
        gameObjects: {
            player: new Player({
                x: utils.toPixel(10) + 128 / 2,
                y: utils.toPixel(10) + 128 / 2,
                src: "/game/ressources/image/spike.png"
            }),
            npc: new Person({
                x: utils.toPixel(5) + 128 / 2,
                y: utils.toPixel(5) + 128 / 2,
                src: "/game/ressources/image/spike.png"
            })
        },
        walls: {
            [utils.asGridCoord(4, 4)]: true
        }
    },
};