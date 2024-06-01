module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff":
      "fonts/playfair-display-latin-400-normal.woff",
  });

  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/urbanist/files/urbanist-latin-400-normal.woff":
      "fonts/urbanist-latin-400-normal.woff",
  });
};
