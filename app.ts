declare const BUILD_INFO: { VERSION: string, TIMESTAMP: string, COMMIT: string, }
const _BUILD_INFO = BUILD_INFO
export { _BUILD_INFO as BUILD_INFO }


export function consoleBuildInfo (): void {
  console.group('Build information')
  console.log(`Version: ${BUILD_INFO.VERSION}`)
  console.log(`Timestamp: ${BUILD_INFO.TIMESTAMP}`)
  console.log(`Commit: ${BUILD_INFO.COMMIT}`)
  console.groupEnd()
}

