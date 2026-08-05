const { auditWebsite } = require("../services/audit.service");

const audit = async (req, res) => {
    const { url } = req.body;
    const result = await auditWebsite(url);
    res.json(result);
};

module.exports = {
    audit,
};