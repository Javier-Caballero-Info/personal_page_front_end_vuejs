'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URI: '"http://localhost:4000"',
  AUTH_URI: '"http://localhost:3000"'
})
