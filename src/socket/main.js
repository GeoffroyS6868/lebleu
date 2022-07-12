const positionHandler = require("./position");
const players = require("./players");

(function() {
    module.exports.mainsocket = function(io) {
        io.on('connection', (socket) => {
            players.add(socket);
            console.log("Connected : "+socket.username);
            positionHandler.send(socket);
            socket.on('position', function(data) {
                positionHandler.got(socket, data);
            });
            socket.on('disconnect', function() {
                console.log("Disconnected :"+socket.username);
                players.remove(socket);
             });
        });
    }
}());