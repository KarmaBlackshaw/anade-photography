import { createApp } from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/scss/app/_@index.scss'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const app = createApp(App)

const requireComponent = require.context('./components',true,/Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')))

  app.component(componentName, componentConfig.default)
})

app.use(store)

app.use(router)

app.mount('#app')
