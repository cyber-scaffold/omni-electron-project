

module.exports = [{
  loader: "style-loader"
}, {
  loader: "css-loader",
  options: {
    modules: {
      exportOnlyLocals: true,
      mode: (resourcePath) => {
        if (/\.(global)/.test(resourcePath)) {
          return "global";
        }
        if (/(node_modules)/.test(resourcePath)) {
          return "global";
        };
        return "local";
      }
    },
    sourceMap: true
  }
}, {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      config: true
    },
    sourceMap: true
  }
}];