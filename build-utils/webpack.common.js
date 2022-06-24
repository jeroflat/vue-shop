const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const paths = require('./paths');

module.exports = (mode) => {
  const prodMode = mode === 'production';

  return {
    entry: ['./src/main.ts'],

    resolve: {
      alias: {
        /**
         * @see https://github.com/vuejs/core/tree/main/packages/vue#with-a-bundler
         */
        vue$: 'vue/dist/vue.esm-bundler.js',
        api$: `${paths.src}/api/api.ts`,
        '@': `${paths.src}`,
        styles: `${paths.src}/assets/scss`,
      },
      extensions: ['.js', '.vue', '.json', '.ts'],
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: prodMode ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('precss')],
                },
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader?name=assets/img/[name].[ext]',
            },
          ],
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/', // where the fonts will go
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),

      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: prodMode ? '[name].[hash].css' : '[name].css',
        chunkFilename: prodMode ? '[id].[hash].css' : '[id].css',
      }),

      new HtmlWebpackPlugin({
        template: paths.indexHTML,
      }),

      /**
       * @see https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags
       */
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
      }),

      new ESLintPlugin({
        extensions: ['vue', 'ts'],
        failOnError: false,
      }),
    ],
  };
};
