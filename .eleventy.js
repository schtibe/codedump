const { DateTime } = require("luxon");
// const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// const markdownItEleventyImg = require("markdown-it-eleventy-img");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  // Values can be static:
  eleventyConfig.addGlobalData("pageTitle", "codedump.ch");

  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    }),
  );

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISODate();
  });

  eleventyConfig.addFilter("urlencode", function (str) {
    return encodeURI(str);
  });

  eleventyConfig.addFilter("thumb_screenshot", function (str) {
    return encodeURIComponent("https://codedump.ch/" + str);
  });

  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("blog/2024/images");

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
      "fonts/FontWithASyntaxHighlighter-Regular.woff2",
  });

  // eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
  //   // which file extensions to process
  //   extensions: "html",
  //   // optional, output image formats
  //   formats: ["jpg", "webp"],
  //   // optional, output image widths
  //   widths: ["auto", 400, 800],
  //   // optional, attributes assigned on <img> override these values.
  //   defaultAttributes: {
  //     loading: "lazy",
  //     sizes: "100vw",
  //     decoding: "async",
  //   },
  // });

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "posts", "blog"].indexOf(tag) === -1,
    );
  });

  eleventyConfig.addFilter("getKeys", (target) => {
    return Object.keys(target);
  });
};
