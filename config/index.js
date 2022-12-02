import { loadEnv } from '@vue3-oop/taro-plugin'
import { TaroWeappTailwindcssWebpackPluginV5 } from 'weapp-tailwindcss-webpack-plugin'

const env = loadEnv()
const isH5 = process.env.TARO_ENV === 'h5'
const isWatch = process.env.VUE_APP_WATCH === 'true'
/**
 *
 * @type {import('@tarojs/taro/types/compile').IProjectConfig}
 */
const config = {
  projectName: 'vue3taro',
  framework: 'vue3',
  designWidth: 375,
  deviceRatio: {
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: `dist`,
  compiler: 'webpack5',
  plugins: [
    '@tarojs/plugin-html',
    '@vue3-oop/taro-plugin',
    '@taro-platform/axios-taro-adapter/taro-plugin',
    isWatch ? '@tarojs/plugin-mock' : undefined,
  ].filter(Boolean),
  copy: {
    patterns: [
      isH5
        ? {
            from: 'public/',
            to: 'dist/',
            ignore: ['**/index.html'],
          }
        : undefined,
    ].filter(Boolean),
  },
  sass: {
    data: '@import "@nutui/nutui-taro/dist/styles/variables.scss";',
  },
  mini: {
    optimizeMainPackage: {
      enable: true,
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[local]--[hash:base64:5]',
        },
      },
    },
    webpackChain(chain, webpack) {
      chain.merge({
        plugin: {
          install: {
            plugin: TaroWeappTailwindcssWebpackPluginV5,
            args: [
              {
                // 注意这一行(不传默认 react)
                framework: 'vue3', // 'vue2' / 'vue3'
              },
            ],
          },
        },
      })
    },
  },
  h5: {
    publicPath: process.env.VUE_APP_BASE_URL,
    router: {
      basename: process.env.VUE_APP_BASE_ROUTE.replace(/\/$/, ''),
      mode: 'browser',
    },
    esnextModules: ['nutui-taro'],
    staticDirectory: 'static',
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module',
          localsConvention: 'camelCaseOnly',
          generateScopedName: '[local]--[hash:base64:5]',
        },
      },
    },
    devServer: {
      open: false,
    },
  },
}
module.exports = () => config
