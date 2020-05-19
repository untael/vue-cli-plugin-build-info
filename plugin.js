export function consoleBuildInfo () {
  console.group('Build information')
  console.log(`Version: ${BUILD_INFO.VERSION}`)
  console.log(`Timestamp: ${BUILD_INFO.TIMESTAMP}`)
  console.log(`Commit: ${BUILD_INFO.COMMIT}`)
  console.groupEnd()
}

export function getBuildInfo () {
  return BUILD_INFO
}
