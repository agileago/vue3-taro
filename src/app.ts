import { createApp } from 'vue'
import setNutUi from './nutui'
import './app.scss'
import { Component, VueComponent } from 'vue3-oop'
import { CountService } from '@/stores/count.service'

@Component({providers: [CountService]})
class App extends VueComponent {
}

const app = createApp(App)
setNutUi(app)
export default app
