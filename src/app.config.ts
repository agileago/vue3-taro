export default defineAppConfig({
  pages: ['pages/index/index'],
  window: {
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    {
      root: 'pages/sub',
      pages: ['count/index'],
    },
  ],
})
