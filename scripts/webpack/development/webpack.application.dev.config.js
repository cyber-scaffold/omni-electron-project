const { merge } = require("webpack-merge");
const webpack_basic_config = require("../basic/webpack.application.basic.config");

module.exports = merge({
  mode: "development",
  devtool: "source-map",
}, webpack_basic_config);