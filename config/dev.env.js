'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_URI: '"http://188.166.96.202:3000"',
    AUTH_URI: '"http://188.166.96.202:3100"',
    STORAGE_URI: '"http://188.166.96.202:3200"'
})
