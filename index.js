const { isNuxt, hasEntryFile } = require('./lib/constants')

const fs = require('fs')

const getLastCommitHash = () => {
  try {
    const hash = require('child_process').execSync('git rev-parse HEAD')
      .toString()
      .slice(0, 6)
    return hash
  } catch (err) {
    return `Unable to retrieve commit information. 
https://github.com/untael/vue-cli-plugin-build-info#explanations`
  }
}

const projectPackage = JSON.parse(fs.readFileSync('package.json', 'utf8'))

let plugin = new (require('webpack')).DefinePlugin({
  BUILD_INFO: {
    COMMIT: JSON.stringify(getLastCommitHash()),
    TIMESTAMP: JSON.stringify(new Date().toUTCString()),
    VERSION: JSON.stringify(projectPackage.version),
  },
})


if (isNuxt) {
  module.exports = plugin
} else {
  module.exports = (api, options) => {
    api.configureWebpack(webpackConfig => {
      webpackConfig.plugins.push(plugin)
    })
  }
}

