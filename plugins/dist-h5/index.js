import path from 'path'

/**
 * h5 适配插件
 * @param {import('@tarojs/service').IPluginContext} ctx 上下文对象
 */
export default ctx => {
  ctx.modifyWebpackChain(({ chain }) => {
    const { runOpts, helper } = ctx
    const { options } = runOpts

    if (options.platform === helper.PLATFORMS.H5) {
      chain.resolve.alias.set(
        '@tarojs/components$',
        path.resolve(__dirname, './vue.js')
      )
    }
  })
}
