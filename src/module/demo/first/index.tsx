import { VueComponent } from 'vue3-oop'
import { Button } from '@nutui/nutui-taro'
import { MiniHook } from '@vue3-oop/taro-hooks'

export default class First extends VueComponent {
  @MiniHook('Load')
  load() {
    console.log(1111111111)
  }

  render() {
    return <Button>first</Button>
  }
}
