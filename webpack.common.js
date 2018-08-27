/**
 * Basic Webpack config
 */

/* eslint-disable import/no-extraneous-dependencies */
const clean = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cleanPlugin = new clean(['dist']);
const errorsPlugin = new FriendlyErrorsWebpackPlugin();
const copyPlugin = new CopyWebpackPlugin([
  {
    from: './src/public/',
    to: 'public/',
  },
]);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [cleanPlugin, copyPlugin, errorsPlugin],
};
