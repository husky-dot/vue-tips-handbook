<template>
  <User :name="userInfo.name" :job="userInfo.job" :age="userInfo.age" />
</template>

<script setup>
import { reactive } from 'vue'
import User from './components/User.vue'

const userInfo = reactive({
  name: '王大冶',
  job: '前端开发',
  age: 16,
})
</script>
