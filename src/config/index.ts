import defaultConf from './config.default'
import developmentConf from './config.development'
import productionConf from './config.production'
import uatConf from './config.uat'
import deepMerge from 'ts-deepmerge'

let conf = defaultConf
const mergeOpt = { mergeArrays: false }

switch (process.env.MODE) {
  case 'development':
    conf = deepMerge.withOptions(mergeOpt, defaultConf, developmentConf)
    break
  case 'uat':
    conf = deepMerge.withOptions(mergeOpt, defaultConf, uatConf)
    break
  case 'production':
    conf = deepMerge.withOptions(mergeOpt, defaultConf, productionConf)
    break
}
conf.env = process.env.MODE!

export default conf
