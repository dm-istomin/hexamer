const webpack = require('webpack')
const path = require('path')
const { spawn } = require('child_process')

const HTMLWebpackPlugin = require('html-webpack-plugin')

// Config directories
const ROOT_DIR = path.resolve(__dirname)
const SRC_DIR = path.resolve(__dirname, 'src')
const OUTPUT_DIR = path.resolve(__dirname, 'dist')

// Set environment to 'dev'
process.env.HEXAMER_ENV = 'dev'


module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: OUTPUT_DIR,
    filename: 'app-bundle.js'
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
    }),
    new webpack.DefinePlugin({ 'process.env.HEXAMER_ENV': process.env.HEXAMER_ENV })
  ],
  devServer: {
    port: 8001,
    contentBase: OUTPUT_DIR,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    setup() {
      spawn(
        path.resolve(`${ROOT_DIR}/node_modules/.bin/electron`),
        ['.'],
        { shell: true, env: process.env, stdio: 'inherit' }
      )
      .on('close', code => process.exit(0))
      .on('error', spawnError => console.error(spawnError))
    }
  }
}
