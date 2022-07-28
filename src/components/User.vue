<template>
  <div>
    <p>私有数据:{{ privateData }}</p>
    <p>私有数据(大写):{{ upperCasePrivateData }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const privateData = ref('secrecy')

const upperCasePrivateData = computed(() => {
  return privateData.value.toUpperCase()
})

defineExpose({
  upperCasePrivateData,
})
</script>
