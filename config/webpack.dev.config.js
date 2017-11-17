const webpack = require('webpack')
const path = require('path')
const { spawn } = require('child_process')

// Config directories
const ROOT_DIR = path.resolve(__dirname, '..')
const OUTPUT_DIR = path.resolve(ROOT_DIR, 'dist')

const baseConfig = require('./webpack.base.config.js')

// Set environment to 'dev'
process.env.HEXAMER_ENV = 'dev'

module.exports = Object.assign(baseConfig, {
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({ 'process.env.HEXAMER_ENV': JSON.stringfy(process.env.HEXAMER_ENV) })
  ]),
  devServer: {
    port: 8001,
    contentBase: OUTPUT_DIR,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    before() {
      spawn(
        path.resolve(`${ROOT_DIR}/node_modules/.bin/electron`),
        ['.'],
        { shell: true, env: process.env, stdio: 'inherit' }
      )
      .on('close', code => process.exit(0))
      .on('error', spawnError => console.error(spawnError))
    }
  }
})
