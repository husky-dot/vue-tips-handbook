<template>
  <div v-memo="[points > 1000]">
    <CustomCom :points="points"></CustomCom>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomCom from './components/CustomCom.vue'

const points = ref(120)

setTimeout(() => {
  points.value = 4000
}, 2000)
</script>
