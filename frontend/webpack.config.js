var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
     }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Tikal Roadmaps',
    template: './index.html',
  })],
  devServer: {
    contentBase: './dist'
  }
};
