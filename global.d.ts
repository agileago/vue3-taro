// 热更新需要用
declare var __VUE_HMR_RUNTIME__: any
// 环境变量定义
declare namespace __WebpackModuleApi  {
  interface NodeProcess {
    env: {
      NODE_ENV: 'development' | 'production'
      TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
      VUE_APP_MODE: string
      BASE_URL: string
      VUE_APP_BASE_ROUTE: string
      VUE_APP_BASE_URL: string
    }
  }
}

// declare module '@tarojs/components' {
//   export * from '@tarojs/components/types/index.vue3'
// }
