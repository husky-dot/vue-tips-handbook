import { createApp } from 'vue'
// import { createApp } from 'vue/dist/vue.esm-bundler.js'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$myGlobal = '全局属性'

app.mount('#app')
