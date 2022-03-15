const path = require('path')

// 模式 区分环境
const mode = process.env.MODE || process.env.NODE_ENV || 'development'

/**
 *
 * @type {import('@tarojs/taro/types/compile').IProjectConfig}
 */
const config = {
  projectName: 'vue3taro',
  framework: 'vue3',
  env: {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {
    'process.env.MODE': JSON.stringify(mode),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: false,
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
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    webpackChain: (chain) => {
      // 增加ts原生编译
      chain.merge({
        module: {
          rule: {
            script: {
              use: {
                tsloader: {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                  },
                  after: 'babelLoader',
                },
              },
            },
          },
        },
      })
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      pxtransform: {
        enable: false,
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module',
          generateScopedName: '[local]--[hash:base64:5]',
        },
      },
    },
    webpackChain: (chain) => {
      chain.merge({
        module: {
          rule: {
            script: {
              use: {
                tsloader: {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                  },
                  after: 'babelLoader',
                },
              },
            },
          },
        },
      })
      chain.plugin('htmlWebpackPlugin')
        .tap(args => {
          args[0].template = path.resolve(__dirname, '../public/index.html')
          return args
        })
      // chain.plugin('analyzer')
      //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    },
  },
}
module.exports = () => config
