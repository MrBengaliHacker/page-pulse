const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Page Pulse Backend is Running!");
});

module.exports = app;