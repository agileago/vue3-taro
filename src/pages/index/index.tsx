import Taro from '@tarojs/taro'
import styles from './index.module.scss'
import { Avatar, Badge } from '@nutui/nutui-taro'
import { Hook, VueComponent } from 'vue3-oop'

export default class Index extends VueComponent {
  goCount = () => {
    Taro.navigateTo({ url: '/pages/featureA/css/index' })
  }

  @Hook('BeforeUnmount')
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
        <nut-button onClick={this.goCount}>跳转数字增加页面</nut-button>
      </>
    )
  }
}
