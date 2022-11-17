import { abcRequest } from '@/api/http'
import type { AxiosResponse } from 'axios'
import config from '@/config'

// 过滤返回数据
function handleResponseSuccess(res: AxiosResponse) {
  return res.data
}
// 处理错误
function handleResponseError(error: any) {
  // 后端返回401直接到登录
  if (error?.response?.status === 401) {
    location.href = config.BASE_ROUTE + 'login'
    return
  }
  if (error?.response) {
    const data = error.response.data
    const responseError = new Error(data?.message || data)
    // @ts-ignore
    responseError.code = data?.code
    // @ts-ignore
    responseError.detail = data

    throw responseError
  }

  throw error
}

abcRequest.interceptors.response.use(handleResponseSuccess)
abcRequest.interceptors.response.use(undefined, handleResponseError)
