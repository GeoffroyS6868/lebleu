const players = require("./players");

(function() {
    module.exports.got = function(socket, data) {
        if (!data.position || !socket.username)
            return;
        players.set(socket, data.position);
        this.send(socket);
    }

    module.exports.send = function(socket) {
        const playersMap = players.get();
        socket.emit("position",{
            "players":Array.from(playersMap),
            "id":socket.username
        });
    }
}());