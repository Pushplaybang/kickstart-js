/**
 * Webpack Production configuration
 */

/* eslint-disable */
const merge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const common = require("./webpack.common.js");

const DotenvPlugin = new Dotenv({
  path: "./production.env",
  safe: true,
  systemvars: true,
  silent: true
});

module.exports = merge(common, {
  mode: "production",
  plugins: [DotenvPlugin]
});
