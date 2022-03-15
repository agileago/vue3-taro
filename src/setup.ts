import '@nutui/nutui-taro/dist/style.css'
import type { App } from 'vue'
import { Icon } from '@nutui/nutui-taro'

export function setup(app: App) {
  app.use(Icon)
}
