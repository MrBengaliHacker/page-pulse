const errorHandler = (error, req, res, next) => {

    if (error.code === "ECONNABORTED") {
        return res.status(408).json({
            success: false,
            message: "Request timed out"
        });
    }

    if (error.message === "Only HTML pages are supported.") {
        return res.status(415).json({
            success: false,
            message: error.message
        });
    }

    if (error.message === "Invalid URL") {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

};

module.exports = errorHandler;