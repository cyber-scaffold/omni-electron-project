const path = require("path");
const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const file_loader = require("../../configs/file_loader");
const program_loader = require("../../configs/program_loader");
const use_public_style_loader_list = require("../../configs/use_public_style_loader_list");

module.exports = {
  entry: path.resolve(process.cwd(), "./src/application.tsx"),
  output: {
    clean: false,
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "application.js",
  },
  target: "electron-renderer",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "./src/"),
      "@@": process.cwd(),
    }
  },
  plugins: [
    new NodePolyfillPlugin(),
    new WebpackBar({ name: "编译客户度" }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(process.cwd(), "./src/index.html")
    })
  ],
  module: {
    rules: [{
      test: /\.(css)$/,
      use: use_public_style_loader_list
    }, {
      test: /\.(scss|sass)$/,
      use: use_public_style_loader_list
    }, {
      test: /\.less$/,
      use: use_public_style_loader_list
    }].concat(program_loader).concat(file_loader)
  }
};