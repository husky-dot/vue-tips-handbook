<template>
  <User :userInfo="userInfo" />
  <button @click="updateUserName">改变姓名</button>
</template>

<script setup>
import { reactive } from 'vue'
import User from './components/User.vue'

const userInfo = reactive({
  detail: {
    name: '王大冶'
  },
  job: '前端开发',
  age: 16
})

const updateUserName = () => {
  userInfo.age = 22
}
</script>
