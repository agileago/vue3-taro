import { createApp } from 'vue'
import setNutUi from './nutui'
import './app.scss'
import { Component, Hook, VueComponent } from 'vue3-oop'
import { CountService } from '@/stores/count.service'
import Taro from '@tarojs/taro'

// 全局服务通过根组件注入
@Component({ providers: [CountService] })
class App extends VueComponent {
  @Hook('Mounted')
  mounted() {
    // 此处必须等到某个时间点才能弹出来，如果把settimeout去掉
    setTimeout(() => Taro.showToast({ title: 'mounted', duration: 3000 }), 2000)
  }
}

const app = createApp(App)
setNutUi(app)
export default app
