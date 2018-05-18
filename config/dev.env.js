'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URI: '"https://be0c3e04-d66b-4f09-a50e-cd994f10f9a8.mock.pstmn.io"'
})
