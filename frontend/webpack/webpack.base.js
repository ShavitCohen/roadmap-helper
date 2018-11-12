const path = require('path');
const webpack = require('webpack');

module.exports = env => ({
  context: path.resolve('./'),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        include: path.resolve('./src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: path.resolve('./.babelrc'),
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${env}"`,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
          reuseExistingChunk: true,
        },
      },
    },
  },
});
