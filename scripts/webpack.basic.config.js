const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const use_public_style_loader_list = [{
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

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "index.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      "@@": process.cwd(),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, "../src/index.html")
    })
  ],
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: "ts-loader",
        options: {
          configFile: path.resolve(process.cwd(), "./tsconfig.json")
        }
      }]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: "babel-loader",
        options: {
          configFile: path.join(process.cwd(), "./.babelrc.js")
        }
      }]
    }, {
      test: /\.(css)$/,
      use: use_public_style_loader_list
    }, {
      test: /\.(scss|sass)$/,
      use: use_public_style_loader_list
    }, {
      test: /\.less$/,
      use: use_public_style_loader_list
    }, {
      test: /\.(ico|png|jpg|jpeg|gif|mp3|mp4|avi|svg|ttf|eot|otf|fon|ttc|woff|woff2)$/,
      use: [{
        loader: "file-loader",
        options: {
          outputPath: "files",
          publicPath: "/files/",
          name: `[name][contenthash].[ext]`
        }
      }]
    }]
  }
};