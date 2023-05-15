const { merge } = require("webpack-merge");
const webpack_basic_config = require("./webpack.basic.config");

module.exports = merge({
  mode: "development",
  devtool: "source-map",
}, webpack_basic_config);