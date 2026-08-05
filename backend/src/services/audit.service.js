const axios = require("axios");
const cheerio = require("cheerio");


// Validate URL
const validateUrl = (url) => {
    try {
        new URL(url);
    } catch {
        throw new Error("Invalid URL");
    }
};

// Fetch Website
const fetchWebsite = async (url) => {
    const startTime = Date.now();

    const response = await axios.get(url, {
        timeout: 5000
    });

    const responseTime = Date.now() - startTime;

    const contentType = response.headers["content-type"];

    if (!contentType.includes("text/html")) {
        throw new Error("Only HTML pages are supported.");
    }

    return {
        response,
        responseTime
    };
};

// Extract Metadata
const extractMetadata = (html, status, responseTime) => {
    const $ = cheerio.load(html);

    const title = $("title").text().trim();

    const description =
        $('meta[name="description"]').attr("content")?.trim() ||
        "No description found";

    const h1Count = $("h1").length;

    let missingAltCount = 0;

    $("img").each((index, element) => {
        const alt = $(element).attr("alt");

        if (!alt || alt.trim() === "") {
            missingAltCount++;
        }
    });

    const wordCount = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter((word) => word.length > 0).length;

    return {
        status,
        responseTime: `${responseTime} ms`,
        title,
        description,
        h1Count,
        missingAltCount,
        wordCount
    };
};

// Main Service
const auditWebsite = async (url) => {
    validateUrl(url);

    const { response, responseTime } = await fetchWebsite(url);

    return extractMetadata(
        response.data,
        response.status,
        responseTime
    );
};


module.exports = {
    auditWebsite
};