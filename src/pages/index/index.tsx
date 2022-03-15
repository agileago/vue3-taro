import Taro from '@tarojs/taro'
import styles from './index.module.scss'
import { Avatar, Badge, Button } from '@nutui/nutui-taro'
import { VueComponent } from 'vue3-oop'
import { MiniHook } from '@/common/hooks'

export default class Index extends VueComponent {
  constructor() {
    super()
  }

  goCount = () => {
    Taro.navigateTo({ url: '/pages/sub/count/index' })
  }

  @MiniHook('Ready')
  destroy() {
    console.log('BeforeUnmount index')
  }

  render() {
    console.log(this.props)
    return (
      <>
        <div class={styles.abc}>aaaaaa</div>
        <Badge value={8}>
          <Avatar icon={'my'} shape={'square'}></Avatar>
        </Badge>
        <Button onClick={this.goCount}>跳转数字增加页面</Button>
      </>
    )
  }
}
