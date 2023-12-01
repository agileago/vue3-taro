import './polyfill'
import '@abraham/reflection'
import './theme/app.scss'
import { createApp } from 'vue'
import { setup } from '@/setup'
import App from './main'

const app = createApp(App)
setup(app)
export default app
