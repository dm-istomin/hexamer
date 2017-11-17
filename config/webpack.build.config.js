const webpack = require('webpack')
const path = require('path')
const { spawn } = require('child_process')

// Config directories
const ROOT_DIR = path.resolve(__dirname, '..')
const OUTPUT_DIR = path.resolve(ROOT_DIR, 'dist')

const baseConfig = require('./webpack.base.config.js')

// Set environment to 'prod'
process.env.HEXAMER_ENV = 'prod'

module.exports = Object.assign(baseConfig, {
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.HEXAMER_ENV': process.env.HEXAMER_ENV
    })
  ]),
  target: 'electron-renderer',
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false
  }
})
