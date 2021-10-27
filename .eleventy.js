module.exports = (config) => {
  config.addPassthroughCopy("src/static");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
