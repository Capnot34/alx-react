const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./../src/index.js", 

  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./../dist"), 
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./../dist/index.html", 
    }),
    new HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./../dist"), 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

