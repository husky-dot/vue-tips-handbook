import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size-color', (el, binding) => {
  console.log('binding', binding)
  Object.keys(binding.value).forEach(key => {
    el.style[key] = binding.value[key]
  })
})

app.mount('#app')
