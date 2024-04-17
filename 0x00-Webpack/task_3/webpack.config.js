const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  performance: {
    maxAssetSize: 1000000,
  },
  devServer: {
    contentBase: [path.join(__dirname, "./public")],
    port: 8564,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|gif|png|jpeg|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};

