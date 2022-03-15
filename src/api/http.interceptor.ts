import { Injectable } from 'injection-js'
import { customRequest } from '@/api/http'
import { Hook, VueService } from 'vue3-oop'

customRequest.interceptors.response.use(res => {
  const data = res.data
  if (data?.code !== 1) {
    throw new Error(data?.msg)
  }
  return data?.entity
})

@Injectable()
export class HttpInterceptor extends VueService {
  constructor() {
    super()
    this.customInterceptor()
  }
  private cleanupFns: (() => void)[] = []

  customInterceptor() {}

  @Hook('Unmounted')
  unmount() {
    this.cleanupFns.forEach(k => k())
  }
}
