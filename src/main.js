import { createApp } from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// styles
import './assets/scss/app/_@index.scss'

// plugins
import baseComponents from '@/plugins/baseComponents'

// instance
createApp(App)
  .use(baseComponents)
  .use(store)
  .use(router)
  .mount('#app')
