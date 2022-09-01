<template>
  <input ref="myInput" />
</template>
<script setup>
import { ref, watchEffect } from 'vue'
const myInput = ref(null)
watchEffect(() => {
  if (myInput.value) {
    myInput.value.focus()
  } else {
    // 尚未挂载，或者该元素已被卸载（例如，通过v-if）。
  }
})
</script>
