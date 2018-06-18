'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_URI: '"http://188.166.96.202:3000"',
  AUTH_URI: '"http://188.166.96.202:3100"',
  STORAGE_URI: '"http://188.166.96.202:3200"'
})
