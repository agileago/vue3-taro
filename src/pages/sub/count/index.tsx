import './index.scss'
import { Component, Hook, VueComponent } from 'vue3-oop'
import { CountService } from '@/service/count.service'
import Taro from '@tarojs/taro'
import { Button } from '@nutui/nutui-taro'

@Component()
export default class Css extends VueComponent {
  constructor(private countService: CountService) {
    super()
  }

  @Hook('Mounted')
  mounted() {
    Taro.showToast({ title: 'css mounted' })
  }
  render() {
    const { countService } = this
    return (
      <>
        <h2>关闭页面再返回查看状态是否保持</h2>
        <div>{countService.count}</div>
        <Button onClick={countService.add}>+</Button>
        <Button onClick={countService.remove}>-</Button>
      </>
    )
  }
}
