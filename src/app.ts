import 'windi.css'
import './theme/app.scss'

import { createApp } from 'vue'

import { Component, Hook, VueComponent } from 'vue3-oop'
import { CountService } from '@/service/count.service'
import Taro from '@tarojs/taro'
import { setup } from '@/setup'

// 全局服务通过根组件注入
@Component({ providers: [CountService] })
class App extends VueComponent {
  @Hook('Mounted')
  mounted() {
    setTimeout(() => Taro.showToast({ title: 'mounted', duration: 3000 }), 1000)
  }
}

const app = createApp(App)
setup(app)
export default app
