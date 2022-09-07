<template>
  <div>
    <p>当前输入的值： {{ text }}</p>
    <CustomCom v-model.no-underscore="text"></CustomCom>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomCom from './components/CustomCom.vue'

const text = ref('')
</script>
