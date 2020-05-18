const fs = require('fs')

const isNuxt = fs.existsSync('nuxt.config.js')

module.exports.isNuxt = isNuxt

