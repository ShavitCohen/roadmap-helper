const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new CopyWebpackPlugin([
    { from: path.resolve('public/index.html'), to: path.resolve('dist'), force: true },
    { from: path.resolve('public/callback.html'), to: path.resolve('dist'), force: true },
  ]),
  /*new CompressionPlugin({
    test: /\.js(\?.*)?$/i,
    deleteOriginalAssets: true,
  }),*/
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve('./public/index.html'),
    minify: true,
  }),
];

const tree = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.resolve('./dist'),
    publicPath: '',
    filename: 'assets/app.js',
  },

};

module.exports = {
  tree,
  plugins,
};