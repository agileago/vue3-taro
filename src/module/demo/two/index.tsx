import { VueComponent } from 'vue3-oop'
import { WebView } from '@tarojs/components'

export default class Two extends VueComponent {
  render() {
    return <WebView src={'https://open.zuoshouyisheng.com/'}></WebView>
  }
}
