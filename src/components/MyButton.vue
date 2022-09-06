<template>
  <input v-model.lazy="message" />
</template>

<script setup>
import { watch, ref } from 'vue'
const message = ref('')
const saveMessage = () => {
  console.log('做一些保存数据的操作')
}
watch(message, (newMessage) => {
  // 这里只有在触发 change 事件的时候才会调用
  saveMessage(newMessage)
})
</script>
