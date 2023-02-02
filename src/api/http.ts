import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import * as pathToRegexp from 'path-to-regexp'
import type { RequestParameter } from 'ts-gear'
import config from '@/config'

// region 基础方法 基本不需要动

// 此类型主要用于简化响应类型
type ReturnEntityType<T> = T
export type { AxiosRequestConfig }
/**
 * 解析url中的参数  /abc/:id 替换id
 * @param url
 * @param option
 */
export const parseUrl = (url: string, option?: RequestParameter): string => {
  if (option) {
    if (option.path) {
      Object.getOwnPropertyNames(option.path).forEach(k => {
        option.path[k] = encodeURIComponent(String(option.path[k]))
      })
      url = pathToRegexp.compile(url)(option.path)
    }
  }
  return url
}
/**
 * 转换成axios里面的配置
 * @param url
 * @param option
 */
export function interceptRequest(
  url: string,
  option?: RequestParameter,
): [string, AxiosRequestConfig] {
  try {
    url = parseUrl(url, option)
  } catch (e: any) {
    throw new Error(e.message)
  }
  option = option || {}
  const requestOption: AxiosRequestConfig = {
    method: option.method || 'get',
  }
  if (option.header) {
    requestOption.headers = option.header
  }
  if (option.body) {
    requestOption.data = option.body
  }
  if (option.formData) {
    const formData = new FormData()
    Object.keys(option.formData).forEach(k => {
      formData.append(k, option?.formData[k])
    })
    requestOption.data = formData
  }
  if (option.query) {
    requestOption.params = option.query
  }
  return [url, requestOption]
}
/**
 * 创建请求方法
 * @param ax
 */
export const createRequester = (ax: AxiosInstance) => {
  return function <T>(apiUrl: string, param: RequestParameter, config: AxiosRequestConfig = {}) {
    // eslint-disable-next-line prefer-const
    let [url, option] = interceptRequest(apiUrl, param)
    option = { url, ...option, ...config }
    return ax.request<T>(option) as unknown as Promise<ReturnEntityType<T>>
  }
}
// endregion

// 创建request 对request进行拦截各种操作
export const abcRequest = axios.create({
  baseURL: config.API,
})

export const abcRequester = createRequester(abcRequest)
