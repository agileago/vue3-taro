import Taro from '@tarojs/taro'
import styles from './index.module.scss'
import { Avatar, Badge } from '@nutui/nutui-taro'
import { VueComponent } from 'vue3-oop'

export default class Index extends VueComponent {
  goRequest = () => {
      Taro.navigateTo({ url: '/pages/featureA/request/index' })
  }
     goCss = () => {
      Taro.navigateTo({ url: '/pages/featureA/css/index' })
    }
     goPinia = () => {
      Taro.navigateTo({ url: '/pages/featureA/index/index' })
    }
     goNutUi = () => {
      Taro.navigateTo({ url: '/pages/featureA/nutui/index' })
    }
    render() {
      console.log(this.props)
      return (
        <>
          <div class={styles.abc}>aaaaaa</div>
          <Badge value={8}>
            <Avatar icon={'my'} shape={'square'}></Avatar>
          </Badge>
          <nut-button onClick={this.goRequest}>跳转接口测试页面</nut-button>
          <nut-button onClick={this.goCss}>跳转样式测试页面</nut-button>
          <nut-button onClick={this.goPinia}>跳转Pinia测试页面</nut-button>
          <nut-button onClick={this.goNutUi}>跳转NutUi测试页面</nut-button>
        </>
      )
    }
}
