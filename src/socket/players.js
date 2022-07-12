global.players = new Map();

(function() {
    module.exports.add = function(socket) {
        socket.username = Math.floor(Math.random() * 2000);
        players.set(socket.username, {"x":1280, "y":1280});
    }

    module.exports.set = function(socket, position) {
        if (!socket.username || !position.x || !position.y)
            return;
        players.set(socket.username, {"x":position.x, "y":position.y});
    }

    module.exports.remove = function(socket) {
        if (!socket.username)
            return;
        players.delete(socket.username);
    }

    module.exports.get = function() {
        return players;
    }
}());