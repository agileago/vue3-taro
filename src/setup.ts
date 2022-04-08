import '@nutui/nutui-taro/dist/style.css'
import type { App } from 'vue'
import { Icon } from '@nutui/nutui-taro'
import { ScrollView, View } from '@tarojs/components'

export function setup(app: App) {
  app.use(Icon)
  app.component('scroll-view', ScrollView)
  app.component('view', View)
}
