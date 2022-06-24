const { merge: webpackMerge } = require('webpack-merge');

const paths = require('./paths');

module.exports = (env) => {
  // eslint-disable-next-line global-require
  const commonConfig = require('./webpack.common')(env);

  return webpackMerge(commonConfig, {
    mode: 'development',
    // devtool: 'source-map',

    output: {
      path: paths.src,
      publicPath: 'http://localhost:9000/',
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
    },

    devServer: {
      static: paths.src,
      compress: true,
      port: 9000,
      /**
       * Basically tells the dev-server "hey! if you don't match something here,
       * the browser probable would know what to do with it"
       */
      historyApiFallback: true,
      open: true,
    },
  });
};
