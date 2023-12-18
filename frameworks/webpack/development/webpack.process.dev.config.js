const { merge } = require("webpack-merge");
const webpack_process_config = require("../basic/webpack.process.basic.config");

module.exports = merge({
  mode: "development",
  devtool: "source-map",
}, webpack_process_config);