<template>
  <Widget title="Toggled 内容" :hidden="hidden" @click="hidden = !hidden">
    通过点击来切换显隐藏内容
  </Widget>
</template>

<script setup>
import Widget from './components/Widget.vue'
</script>
