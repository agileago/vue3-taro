import { Autobind, Mut, VueService } from 'vue3-oop'

@Autobind()
export class CountService extends VueService {
  @Mut() count = 1
  add() {
    this.count++
  }
  remove() {
    this.count++
  }
}
