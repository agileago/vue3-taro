import '@nutui/nutui-taro/dist/style.css'
import { Button, Icon } from '@nutui/nutui-taro'
import type { App } from 'vue'

const setNutUi = (app: App) => {
  app.use(Icon).use(Button)
}
export default setNutUi
