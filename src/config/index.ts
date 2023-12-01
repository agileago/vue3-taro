import Config from './config.default'
import Develop from './config.develop'
import Release from './config.release'
import Taro from '@tarojs/taro'

let TargetConf = Config

const { miniProgram } = Taro.getAccountInfoSync()

switch (miniProgram.envVersion) {
  case 'develop':
    TargetConf = Develop
    break
  case 'trial':
    TargetConf = Develop
    break
  case 'release':
    TargetConf = Release
    break
}

const config = new TargetConf()

export default config
