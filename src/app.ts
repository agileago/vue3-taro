import { createApp, provide } from 'vue'
import setNutUi from './nutui'
import './app.scss'
import { InjectorKey } from 'vue3-oop'
import { CountService } from '@/stores/count.service'
import { ReflectiveInjector } from 'injection-js'

const app = createApp({
  setup() {
    const injector = ReflectiveInjector.resolveAndCreate([CountService])
    provide(InjectorKey, injector)
  }
})
setNutUi(app)
export default app
