const path = require("path");
const pathExists = require("path-exists");

module.exports = async function assert_file() {
  if (!await pathExists(path.resolve(process.cwd(), "./dist/application.js"))) {
    return false;
  };
  if (!await pathExists(path.resolve(process.cwd(), "./dist/preload.js"))) {
    return false;
  };
  if (!await pathExists(path.resolve(process.cwd(), "./dist/process.js"))) {
    return false;
  };
  if (!await pathExists(path.resolve(process.cwd(), "./dist/index.html"))) {
    return false;
  };
  return true;
};