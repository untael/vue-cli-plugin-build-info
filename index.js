const fs = require('fs')

const getLastCommitHash = () => {
  const hash = require('child_process').execSync('git rev-parse HEAD')
    .toString()
  return hash.slice(0, 6)
}

const package = JSON.parse(fs.readFileSync('package.json', 'utf8'))

let plugin = new (require('webpack')).DefinePlugin({
  BUILD_INFO: {
    COMMIT: JSON.stringify(getLastCommitHash()),
    TIMESTAMP: JSON.stringify(new Date().toUTCString()),
    VERSION: JSON.stringify(package.version),
  },
})

module.exports = (api, options) => {
  api.configureWebpack(webpackConfig => {
    webpackConfig.plugins.push(plugin)
  })
}
