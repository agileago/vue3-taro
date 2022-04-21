import './index.scss'
import { Component, Hook, VueComponent } from 'vue3-oop'
import { SkipSelf } from 'injection-js'
import { CountService } from '@/service/count.service'
import Taro from '@tarojs/taro'
import { Button } from '@nutui/nutui-taro'

@Component()
export default class Css extends VueComponent {
  constructor(@SkipSelf() private countService: CountService) {
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
        <Button onClick={countService.add}>+</Button>
        <text style={{ verticalAlign: '10px' }}>{countService.count}</text>
        <Button onClick={countService.remove}>-</Button>
      </>
    )
  }
}
