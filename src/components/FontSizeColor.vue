<template>
  <div
    v-font-size-color="{
      color,
      fontSize,
    }"
  >
    自定义指令
  </div>
  <button @click="changeFontSizeAndColor">改变字体大小和颜色</button>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('red')
const fontSize = ref('20px')

const changeFontSizeAndColor = () => {
  color.value = 'green'
  fontSize.value = '40px'
}
</script>