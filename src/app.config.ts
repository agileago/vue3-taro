export default defineAppConfig({
  pages: ['pages/index/index'],
  window: {
    backgroundColor: '#319b1c',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['css/index'],
    },
  ],
})
