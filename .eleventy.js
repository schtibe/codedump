const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	// Values can be static:
	eleventyConfig.addGlobalData("pageTitle", "codedump.ch");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISODate()
  });

  eleventyConfig.addPassthroughCopy("bundle.css");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff":
      "fonts/playfair-display-latin-400-normal.woff",
  });

  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/urbanist/files/urbanist-latin-400-normal.woff":
      "fonts/urbanist-latin-400-normal.woff",
  });

  eleventyConfig.addPassthroughCopy({
    "FontWithASyntaxHighlighter-Regular.woff2":
    "fonts/FontWithASyntaxHighlighter-Regular.woff2"
  })
};
