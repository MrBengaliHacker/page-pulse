const axios = require("axios");
const cheerio = require("cheerio");

const auditWebsite = async (url) => {

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const title = $("title").text().trim();

    const description =
      $('meta[name="description"]').attr("content")?.trim() || "No description found";

    const h1Count = $("h1").length;

    const imageCount = $("img").length;

    const wordCount = $("body")
      .text()
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(word => word.length > 0).length;
    
    return {
        status: response.status,
        title,
        description,
        h1Count,
        imageCount,
        wordCount
    };
};

module.exports = {
    auditWebsite
};