module.exports = (config) => {
  config.addPassthroughCopy("src/**/*.jpg");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
