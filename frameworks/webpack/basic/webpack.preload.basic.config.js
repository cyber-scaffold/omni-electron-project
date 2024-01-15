const path = require("path");
const WebpackBar = require("webpackbar");
const nodeExternals = require("webpack-node-externals");

const file_loader = require("../../configs/file_loader");
const program_loader = require("../../configs/program_loader");

module.exports = {
  entry: path.resolve(process.cwd(), "./src/preload.ts"),
  output: {
    clean: false,
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "preload.js",
  },
  target: "electron-preload",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "./src/"),
      "@@": process.cwd(),
    }
  },
  externalsPresets: { node: true },
  externals: [nodeExternals({
    modulesFromFile: path.resolve(process.cwd(), "./package.json")
  })],
  module: {
    rules: [...program_loader, ...file_loader]
  },
  plugins: [
    new WebpackBar({ name: "编译ipcRender" }),
  ]
};