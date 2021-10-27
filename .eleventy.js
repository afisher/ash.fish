module.exports = (config) => {
  config.addPassthroughCopy('**/*.jpg');
  return {
    dir: {
      input: 'src',
      output: '_site',
    }
  }
};
