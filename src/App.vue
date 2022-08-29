<template>
  <button @click="triggerError = !triggerError">触发 Error</button>
  <span v-if="triggerError">
    <!-- 这里将会引发一个错误，因为试图执行一个不存在的方法 -->
    {{ hello.oops() }}
  </span>
  <span v-else>
    <!-- 这里会产生一个警告，因为`hello`不存在。 -->
    {{ hello }}
  </span>
</template>

<script setup>
import { ref } from 'vue'
const triggerError = ref(false)
</script>

