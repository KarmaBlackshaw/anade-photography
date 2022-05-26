import { createApp } from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'

// styles
import './assets/scss/app/_@index.scss'

// plugins
import baseComponents from '@/plugins/baseComponents'

// instance
createApp(App)
  .use(baseComponents)
  .use(store)
  .use(createPinia())
  .use(router)
  .mount('#app')
