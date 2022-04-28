import Taro from '@tarojs/taro'
import { Component, VueComponent } from 'vue3-oop'
import { Button } from '@tarojs/components'
import { SkipSelf } from 'injection-js'
import { CountService } from '@/service/count.service'

@Component()
export default class Index extends VueComponent {
  constructor(@SkipSelf() private countService: CountService) {
    super()
  }

  goCount = () => {
    Taro.navigateTo({ url: '/pages/sub/count/index' })
  }

  render() {
    const { countService } = this
    return (
      <>
        <h2>当前数字： {countService.count}</h2>
        <Button type={'primary'}>加</Button>
        <Button type={'primary'} onClick={countService.remove}>
          减
        </Button>

        <Button onClick={this.goCount}>跳转下一个页面再返回查看</Button>
      </>
    )
  }
}
