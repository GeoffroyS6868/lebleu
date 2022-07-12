(function () {
    var socket = io();

    const overworld = new Overworld({
        element: document.querySelector(".game-container"),
        socket: socket
    });

    overworld.init();
    socket.on("position", function(data) {
        if (!data.players || !data.id)
            return;
        overworld.updatePlayers(new Map(data.players), data.id);
    });
})();