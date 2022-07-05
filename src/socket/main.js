(function() {
    module.exports.mainsocket = function(io) {
        io.on('connection', (socket) => {
            console.log("Connected : "+socket.username);
        });
    }
}());