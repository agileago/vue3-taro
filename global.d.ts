// 热更新需要用
declare var __VUE_HMR_RUNTIME__: any
// 环境变量定义
declare namespace __WebpackModuleApi  {
  interface NodeProcess {
    env: {
      NODE_ENV: 'development' | 'production'
      MODE: string
      DEV: boolean
      PROD: boolean
      BASE_URL: string
      TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
    }
  }
}

declare module '@tarojs/components' {
  export * from '@tarojs/components/types/index.vue3'
}
