const utils = {
    asGridCoord(x, y) {
        return `${x*128},${y*128}`;
    },
    toPixel(tile) {
        return (tile * 128);
    }
}