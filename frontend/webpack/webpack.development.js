const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve('./public/index.html'),
    title: 'BaBaBa',
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
];

const tree = {
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8080,
    contentBase: ['./public/', './src/'],
    publicPath: '/assets/',
    inline: true,
    historyApiFallback: true,
  },
  entry: [
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve('./dist'),
    publicPath: './assets/',
    filename: 'app.js',
  },
};

module.exports = {
  tree,
  plugins,
};