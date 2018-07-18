/**
 * Webpack Development configuration
 */

/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

const DotenvPlugin = new Dotenv({
  path: './development.env',
  safe: true,
  systemvars: true,
  silent: true,
});

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [DotenvPlugin],
});
