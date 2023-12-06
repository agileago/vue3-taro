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
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@nutui/nutui-taro',
        customName: (name) => `@nutui/nutui-taro/dist/packages/${name.toLowerCase()}`,
        style: (name, file) => name + '/style',
        camel2DashComponentName: false,
      },
      'nutui4-taro',
    ],
  ],
}
