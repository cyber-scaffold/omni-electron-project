const { merge } = require("webpack-merge");
const webpack_preload_config = require("../basic/webpack.preload.basic.config");

module.exports = merge({
  mode: "none",
  devtool: "source-map",
}, webpack_preload_config);