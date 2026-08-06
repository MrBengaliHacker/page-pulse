const errorHandler = (error, req, res, next) => {

    if (error.message === "Invalid URL") {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    if (error.message === "Only HTML pages are supported.") {
        return res.status(415).json({
            success: false,
            message: error.message
        });
    }

    if (error.code === "ENOTFOUND") {
        return res.status(404).json({
            success: false,
            message: "Website could not be reached."
        });
    }

    if (error.code === "ECONNREFUSED") {
        return res.status(503).json({
            success: false,
            message: "Connection refused by the website."
        });
    }

    if (error.code === "ECONNABORTED") {
        return res.status(408).json({
            success: false,
            message: "Request timed out."
        });
    }

    if (error.response) {
        return res.status(error.response.status).json({
            success: false,
            message: `Website responded with status ${error.response.status}.`
        });
    }

    return res.status(500).json({
        success: false,
        message: "An unexpected server error occurred."
    });

};

module.exports = errorHandler;