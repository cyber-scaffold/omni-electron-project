const path = require("path");

const file_loader = require("../../configs/file_loader");
const program_loader = require("../../configs/program_loader");

module.exports = {
  entry: path.resolve(process.cwd(), "./src/preload.ts"),
  output: {
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
  module: {
    rules: [...program_loader, ...file_loader]
  }
};