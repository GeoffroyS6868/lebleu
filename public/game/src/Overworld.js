class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    };

    init() {
       const player = new GameObject({
        x: 5,
        y: 5,
        src: "/game/ressources/image/spike.png"
       });
       setTimeout(() => {
        player.sprite.draw(this.ctx);
       }, 2000);
       
    }
};