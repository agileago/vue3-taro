import Taro from '@tarojs/taro'

/**
 * 自动处理异常装饰器，适合异常后无后续处理的请求
 * @param msg  自定义提示消息
 * @param loadingKey  自定义loading
 */
export function Catch(loading = true, loadingKey?: string | ((obj: any) => void)): MethodDecorator {
  return function (target: any, key: string | symbol, desc: PropertyDescriptor) {
    const fn = desc.value
    desc.value = async function (this: any, ...args: any[]) {
      try {
        loading && Taro.showLoading()
        return await fn.apply(this, args)
      } catch (e: any) {
        console.error(e)
        if (e.message) {
          Taro.showToast({
            icon: 'error',
            title: e.message,
            duration: 4000,
          })
        }
      } finally {
        loading && Taro.hideLoading()
        if (loadingKey) {
          if (typeof loadingKey === 'string') this[loadingKey] = false
          else loadingKey(this)
        }
      }
    }
    return desc
  }
}
