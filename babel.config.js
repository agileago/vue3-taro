// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
// 小程序端原生组件

module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'vue3',
        ts: false,
        vueJsx: false,
      },
    ],
  ],
  plugins: [
    ['@vue3-oop/babel-plugin-jsx', { enableObjectSlots: false, slotStable: true }],
    [
      'import',
      {
        libraryName: '@nutui/nutui-taro',
        libraryDirectory: 'dist/packages/_es',
        camel2DashComponentName: false,
      },
      'nutui3-taro',
    ],
  ],
}
