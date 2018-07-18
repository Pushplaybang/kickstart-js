/**
 * Webpack Production configuration
 */

/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

const DotenvPlugin = new Dotenv({
  path: './production.env',
  safe: true,
  systemvars: true,
  silent: true,
});

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [DotenvPlugin],
});
