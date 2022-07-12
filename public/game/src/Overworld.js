class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.height = innerHeight;
        this.canvas.width = innerWidth;
        this.socket = config.socket;
        this.tempPlayers = new Person({x:128, y:128, src: "/game/ressources/image/spike.png"});
        this.players = new Map();
    };

    startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            const cameraPerson = this.map.gameObjects.player;
            this.map.gameObjects.player.update({
                arrow: this.directionInput.direction
            });
            this.map.drawLowerImage(this.ctx, cameraPerson, this.canvas.width, this.canvas.height);
            this.drawPlayers(cameraPerson);
            this.socket.emit("position", {
                "position": {
                    "x": this.map.gameObjects.player.x,
                    "y": this.map.gameObjects.player.y,
                }
            });
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

    updatePlayers(players, id) {
        this.players.clear();
        this.players = players;
        this.playerid = id;
    }

    drawPlayers(cameraPerson) {
        for (const [key, p] of this.players.entries()) {
            if (key == this.playerid)
                continue;
            this.tempPlayers.x = p.x;
            this.tempPlayers.y = p.y;
            this.tempPlayers.draw(this.ctx, cameraPerson, this.canvas.width, this.canvas.height, this.map.width, this.map.height);
        }
    }
};