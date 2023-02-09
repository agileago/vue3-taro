import { VueComponent } from 'vue3-oop'
import { Button } from '@nutui/nutui-taro'
import { MiniHook } from '@vue3-oop/taro-hooks'
import { abcRequest } from '@/api/http'
import Taro from '@tarojs/taro'

export default class First extends VueComponent {
  router = Taro.useRouter()
  @MiniHook('Load')
  load() {
    abcRequest('/abc', { method: 'get', params: { a: 1 } }).then(res => console.log('res', res))
  }

  render() {
    return (
      <div class={'text-amber-300'}>
        <div class={'mt-[22px] text-center text-[50px] text-red-400'}>aaa</div>
        <Button
          type={'primary'}
          block
          class={'text-xl'}
          onClick={() => Taro.navigateTo({ url: '/module/demo/two/index' })}
        >
          first
        </Button>
        <view key={1}></view>
      </div>
    )
  }
}
