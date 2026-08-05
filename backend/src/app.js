const express = require("express");
const auditRoutes = require("./routes/audit.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Page Pulse Backend is Running!");
});

app.use("/api/audit", auditRoutes);

module.exports = app;