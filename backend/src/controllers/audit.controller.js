const { auditWebsite } = require("../services/audit.service");

const audit = async (req, res, next) => {
    try {
        const { url } = req.body;
        const result = await auditWebsite(url);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    audit,
};