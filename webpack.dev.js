/**
 * Webpack Development configuration
 */

/* eslint-disable */
const merge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const common = require("./webpack.common.js");

const DotenvPlugin = new Dotenv({
  path: "./development.env",
  safe: true,
  systemvars: true,
  silent: true
});

module.exports = merge(common, {
  mode: "development",
  plugins: [DotenvPlugin]
});
