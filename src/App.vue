<template>
  <Toggle title="Toggled 内容" :hidden="hidden" @click="hidden = !hidden">
    通过点击来切换显隐藏内容
  </Toggle>
</template>

<script setup>
import { ref } from 'vue'
import Toggle from './components/Toggle.vue'

const hidden = ref(false)
</script>
