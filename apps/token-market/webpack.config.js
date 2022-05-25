const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|git|jp2|webp|svg|ico)$/i,
          loader: 'file-loader',
          options: {
            name: '[name]12.[ext]'
          }
        },
      ],
    },
  });
};
