const getLastCommitHash = () => {
  const hash = require('child_process').execSync('git rev-parse HEAD')
    .toString()
  return hash.slice(0, 6)
}

let plugin = new (require('webpack')).DefinePlugin({
  BUILD_INFO:{
    VERSION: JSON.stringify(require('./package.json').version),
    TIMESTAMP: JSON.stringify(new Date().toUTCString()),
    COMMIT: JSON.stringify(getLastCommitHash()),
  }
})

module.exports = (api, options) => {
  api.configureWebpack(webpackConfig => {
    webpackConfig.plugins.push(plugin)
  })
}
