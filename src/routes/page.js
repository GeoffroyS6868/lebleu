const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.header("SameSite", "None");
    res.render('index');
});

router.get("/game", (req, res) => {
    res.render('game/spawn');
});

module.exports = router;