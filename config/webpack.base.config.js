const webpack = require('webpack')
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
//
// Config directories
const ROOT_DIR = path.resolve(__dirname, '..')
const SRC_DIR = path.resolve(ROOT_DIR, 'src')
const OUTPUT_DIR = path.resolve(ROOT_DIR, 'dist')

module.exports = {
  entry: {
    app: `${SRC_DIR}/index.js`
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
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
