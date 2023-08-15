import { Hook, Link, VueComponent } from 'vue3-oop'
import { MiniHook } from '@vue3-oop/taro-hooks'
import { abcRequest } from '@/api/http'
import { useRouter } from '@tarojs/taro'
import { Button } from '@tarojs/components'

export default class First extends VueComponent {
  router = useRouter()
  @MiniHook('Load')
  load() {
    abcRequest('/abc', { method: 'get', params: { a: 1 } }).then(res => console.log('res', res))
  }

  @Hook('Mounted')
  handlePhone() {
    console.log(111, this.abc)
  }

  @Link() abc?: HTMLButtonElement

  render() {
    return (
      <div class={'text-amber-300'}>
        <div class={'mt-[22px] text-center text-[50px] text-red-400'}>aaa</div>
        <Button
          ref={'abc'}
          type={'primary'}
          openType={'getPhoneNumber'}
          onGetphonenumber={() => this.handlePhone()}
        >
          11111
        </Button>
        <view key={1}></view>
      </div>
    )
  }
}
