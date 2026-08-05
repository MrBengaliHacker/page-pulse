const express = require("express");
const { audit } = require("../controllers/audit.controller");

const router = express.Router();

router.post("/", audit);

module.exports = router;