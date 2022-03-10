import './index.scss'
import { VueComponent } from 'vue3-oop'

export default class Css extends VueComponent {
  render() {
    return (
      <>
        <div class="ellipsis-test ellipsis">测试超行省略fffffffffffffff</div>
        <p>1px</p>
        <div class="van-hairline--top"></div>
      </>
    )
  }
}
