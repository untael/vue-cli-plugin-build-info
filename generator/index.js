module.exports = (api, opts) => {
  module.exports.hooks = (api) => {

    api.afterInvoke(() => {
      const { EOL } = require('os')
      const fs = require('fs')
      const contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
      const lines = contentMain.split(/\r?\n/g)
      const renderIndex = lines.findIndex(line => line.match(/new Vue/))
      const importedString = lines[renderIndex - 1] !== EOL ? [EOL, 'consoleBuildInfo()', EOL] : ['consoleBuildInfo()', EOL]
    ]
      lines[renderIndex - 1] += importedString.join(EOL)

      fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
    })

    api.injectImports(api.entryFile, `import { consoleBuildInfo } from 'vue-cli-plugin-build-info/plugin'`)
  }
}
