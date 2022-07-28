<template>
  <User ref="useRef" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import User from './components/User.vue'

const useRef = ref(null)

onMounted(() => {
  console.log(useRef.value.privateData)
  console.log(useRef.value.upperCasePrivateData)
})
</script>
