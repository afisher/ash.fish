const glob = require("glob");
const eleventyImage = require("@11ty/eleventy-img");

async function getArt() {
  const filenames = glob.sync("art/**/*.jpg");
  const data = await Promise.all(
    filenames.map(async (filename) => {
      const img = await eleventyImage(filename, {
        formats: ["jpeg"],
        outputDir: "_site/art",
        urlPath: "/art/",
      });
      return img.jpeg[0];
    })
  );
  return data;
}

module.exports = getArt;
