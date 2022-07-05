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
        lowerSrc: "/game/ressources/image/spawn.png",
        upperSrc: "",
        gameObjects: {
            player: new Person({
                x: 50,
                y: 50,
                isPlayerControlled: true,
                src: "/game/ressources/image/spike.png"
            }),
            npc: new Person({
                x: 100,
                y: 100,
                src: "/game/ressources/image/spike.png"
            })
        }
    },
};