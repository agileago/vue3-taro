import { loadEnv } from "@vue3-oop/taro-plugin";

const env = loadEnv()
/**
 *
 * @type {import('@tarojs/taro/types/compile').IProjectConfig}
 */
const config = {
  projectName: 'vue3taro',
  framework: 'vue3',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: `dist`,
  compiler: {
    type: 'webpack5',
  },
  plugins: [
    '@tarojs/plugin-html',
    '@vue3-oop/taro-plugin',
    '@tarojs/plugin-mock',
  ],
  copy: {
    patterns: [
      {
        from: 'public/',
        to: 'dist/',
        ignore: ['**/index.html'],
      },
    ],
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
        enable: false,
      },
      autoprefixer: {
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
        enable: false,
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module',
          generateScopedName: '[local]--[hash:base64:5]',
        },
      },
    },
    devServer: {
      open: false
    }
  },
}
module.exports = () => config
