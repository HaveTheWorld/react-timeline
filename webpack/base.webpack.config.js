const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = path.resolve.bind(this, __dirname, '..');

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('build'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
    }),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
  },
};
