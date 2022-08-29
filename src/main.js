import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = (err) => {
  alert(err)
}

app.config.warnHandler = (warn) => {
  console.warn(`[CUSTOM WARNING] ${warn}`)
}

app.mount('#app')
