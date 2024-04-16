const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Set mode to production
  entry: './js/dashboard_main.js', // Entry point
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Rule for processing CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Rule for processing image files
        type: 'asset/resource', // Use asset modules to handle images
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Specify the HTML template
    }),
  ],
};

