const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/audit.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Page Pulse Backend is Running!");
});

app.use("/api/audit", auditRoutes);

app.use(errorHandler);

module.exports = app;