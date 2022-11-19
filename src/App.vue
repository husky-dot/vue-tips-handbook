<template>
  <div>
    <Component1 />
    <Component2 />
  </div>
</template>

<script setup>
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import { ref } from 'vue'
const input = ref('')
</script>
