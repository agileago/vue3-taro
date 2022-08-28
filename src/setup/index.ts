import type { App } from 'vue'
import { Button, Cell, Icon } from '@nutui/nutui-taro'

export function setup(app: App) {
  app.use(Icon).use(Button).use(Cell)
}
