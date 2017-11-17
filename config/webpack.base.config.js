const webpack = require('webpack')
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
//
// Config directories
const ROOT_DIR = path.resolve(__dirname, '..')
const SRC_DIR = path.resolve(ROOT_DIR, 'src')
const OUTPUT_DIR = path.resolve(ROOT_DIR, 'dist')
const defaultInclude = [SRC_DIR]

module.exports = {
  entry: {
    app: `${SRC_DIR}/index.js`
  },
  output: {
    path: OUTPUT_DIR,
    publicPath: './',
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, include: defaultInclude },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, include: defaultInclude }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
