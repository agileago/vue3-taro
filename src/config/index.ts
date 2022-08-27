import Config from '@/config/config.default'

let TargetConf = Config
// 自动扫描配置文件
const requireContext = require.context('./', false, /config\.(\w+)\.ts$/)
requireContext.keys().forEach(path => {
  if (path !== `./config.${process.env.VUE_APP_MODE}.ts`) return
  TargetConf = requireContext(path).default
})

const config = new TargetConf()

export default config
