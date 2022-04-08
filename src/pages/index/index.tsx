import Taro from '@tarojs/taro'
import styles from './index.module.scss'
import { Avatar, Badge, Button } from '@nutui/nutui-taro'
import { Autobind, Link, Mut, VueComponent } from 'vue3-oop'
import { MiniHook } from '@/common/hooks'
import { watch } from 'vue'
import { Button as TaroButton, Checkbox, Input, View } from '@tarojs/components'

export default class Index extends VueComponent {
  constructor() {
    super()
    watch(
      () => this.input,
      () => console.log(this.input),
    )
  }

  goCount = () => {
    Taro.navigateTo({ url: '/pages/sub/count/index' })
  }

  @MiniHook('Ready')
  destroy() {
    console.log('BeforeUnmount index')
    console.log(this.abc)
  }

  @Link() abc: any

  @Mut() checked = true
  @Mut() input = ''

  @Autobind()
  handleScroll(e) {
    console.log(e)
  }

  render() {
    return (
      <>
        <View>aaaa</View>
        <div class={styles.abc}>aaaaaa</div>
        <Badge value={8}>
          <Avatar icon={'my'} shape={'square'}></Avatar>
        </Badge>
        <Button onClick={this.goCount}>跳转数字增加页面</Button>
        <TaroButton>aaaa</TaroButton>
        <Checkbox v-model:checked={this.checked} ref={'abc'}></Checkbox>
        <Input v-model={this.input}></Input>
      </>
    )
  }
}
