import Taro from '@tarojs/taro'
import { Avatar, Badge } from '@nutui/nutui-taro'
import { Autobind, Link, Mut, VueComponent } from 'vue3-oop'
import { MiniHook } from '@/common/hooks'
import { watch } from 'vue'
import { Button, Checkbox, Input, Picker, View } from '@tarojs/components'

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
  @Link() button: Button

  @Mut() checked = true
  @Mut() input = ''

  @Autobind()
  handleScroll(e) {}

  @Autobind()
  handleChange(e) {
    console.log('picker', e)
    this.selectorChecked = e.detail.value
    console.log(this.picker)
  }

  @Mut() selectorChecked = ''

  @Link() picker: any

  getUserInfo: Button['props']['onGetUserInfo'] = e => {
    console.log(e)
  }

  render() {
    return (
      <>
        <div class={'bg-gray-100 text-red-500'}>aaaaaa</div>
        <Badge value={8}>
          <Avatar icon={'my'} shape={'square'}></Avatar>
        </Badge>
        <Button type={'primary'} ref={'button'} onGetUserInfo={this.getUserInfo}>
          aaaa
        </Button>
        <Checkbox value={'aaa'} checked ref={'abc'}></Checkbox>
        <Input v-model={this.input}></Input>
        <Picker range={['美国']} mode="selector" onChange={this.handleChange} ref={'picker'}>
          <View>当前选择: {this.selectorChecked}</View>
        </Picker>
      </>
    )
  }
}
