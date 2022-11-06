<template>
  
  <DetectOutsideClick v-model="input">
    <template #prepend>Http://</template>
  </DetectOutsideClick>
</template>

<script setup>
import DetectOutsideClick from './components/WrapperInput.vue'
import { ref } from 'vue'
const input = ref('')
</script>
