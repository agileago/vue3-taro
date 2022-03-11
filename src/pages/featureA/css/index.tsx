import './index.scss'
import { Component, VueComponent } from 'vue3-oop'
import { SkipSelf } from 'injection-js'
import { CountService } from '@/stores/count.service'

@Component()
export default class Css extends VueComponent {
  constructor(@SkipSelf() private countService: CountService) {super()}
  render() {
    const { countService } = this
    return (
      <>
        <div class="ellipsis-test ellipsis">aaaa</div>
        <p onClick={countService.add}>{countService.count}</p>
        <div class="van-hairline--top"></div>
      </>
    )
  }
}
