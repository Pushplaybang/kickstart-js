/**
 * Basic Webpack config
 */

/* eslint-disable */
const clean = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const postCSS = require("postcss-scss");
const autoPrefixer = require("autoprefixer");

const cleanPlugin = new clean(["dist"]);
const errorsPlugin = new FriendlyErrorsWebpackPlugin();
const copyPlugin = new CopyWebpackPlugin([
  {
    from: "./src/public/",
    to: "public/"
  }
]);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              parser: postCSS,
              sourceMap: "inline",
              plugins: () => [
                autoPrefixer([
                  "defaults",
                  "last 2 versions",
                  "android 4",
                  "not ie < 11"
                ]) // breaks source maps if not inline
              ]
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [cleanPlugin, copyPlugin, errorsPlugin]
};
