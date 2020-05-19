const { isNuxt } = require('../lib/constants')

module.exports = (api, opts) => {
  const fs = require('fs')
  const { EOL } = require('os')
  const hasEntryFile = fs.existsSync(api.entryFile)

  if (isNuxt) {
    api.render('./template')
  }

  module.exports.hooks = (api) => {
    api.afterInvoke(() => {
      if (isNuxt) {
        const nuxtConfig = fs.readFileSync('nuxt.config.js', { encoding: 'utf-8' })
        const lines = nuxtConfig.split(/\r?\n/g)
        lines.unshift('const VueCliPluginBuildInfo = require(\'vue-cli-plugin-build-info\')')
        fs.writeFileSync('nuxt.config.js', lines.join(EOL), { encoding: 'utf-8' })
      }
      if (hasEntryFile) {
        const entryFile = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
        const lines = entryFile.split(/\r?\n/g)
        const renderIndex = lines.findIndex(line => line.match(/new Vue/))
        lines.splice(renderIndex - 1, 0, 'consoleBuildInfo()')
        fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
      }
    })

    api.injectImports(api.entryFile, `import { consoleBuildInfo } from 'vue-cli-plugin-build-info/plugin'`)
  }
}
