const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({ title: 'Octopus', template: './index.html' }),
  new CopyWebpackPlugin([{
    from: path.resolve('callback.html'),
    to: path.resolve('dist'),
    force: true,
  }]),
];

module.exports = {
  entry: './src/employeesList.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins,
  devServer: {
    contentBase: './dist',
  },
};
