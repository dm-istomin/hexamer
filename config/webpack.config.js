const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: 'http://localhost:8080/build'
  },
  resolveLoader: {
    root: path.resolve(__dirname, '../node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}
