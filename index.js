const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/game', express.static(__dirname + 'public/game'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookieParser());

app.use('/', require(__dirname+'/src/routes/page.js'));

app.set('view engine', 'ejs');
app.set('views', './views');

server.listen(3000, () => {
    console.log("Server started on port 3000");
});