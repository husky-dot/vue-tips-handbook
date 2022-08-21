<template>
  <SVGComponent :color="isGreen ? '#00CDA3' : '#032A5E'" />
</template>

<script>
import { ref } from 'vue'
import SVGComponent from './components/SVGComponent.vue'
export default {
  name: 'App',
  components: {
    SVGComponent,
  },
  setup() {
    const isGreen = ref(true)

    // Toggle the color back and forth
    setInterval(() => {
      isGreen.value = !isGreen.value
    }, 500)

    return { isGreen }
  },
}
</script>
