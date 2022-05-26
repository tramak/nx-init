module.exports = {
  process() {
    console.log({ arguments });
    return 'module.exports = {};';
  },
  getCacheKey() {
    console.log('getCacheKey()', arguments);
    // The output is always the same.
    return 'svgTransform';
  },
};
