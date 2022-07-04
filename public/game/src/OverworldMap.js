class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

window.OverworldMaps = {
    Spawn: {
        lowerSrc: "/game/ressources/image/Spawn.png",
        upperSrc: "",
        gameObjects: {
            player: new GameObject({
                x: 0,
                y: 0,
                src: "/game/ressources/image/spike.png"
            }),
            npc: new GameObject({
                x: 7,
                y: 7,
                src: "/game/ressources/image/spike.png"
            })
        }
    },
};