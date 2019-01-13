'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_URI: '"http://0.0.0.0:5000"',
    AUTH_URI: '"https://auth.javiercaballero.info"',
    STORAGE_URI: '"https://storage.javiercaballero.info"'
})
