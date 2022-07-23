<template>
  <User v-bind="userInfo" v-on="userEventHandler" />
</template>

<script setup>
import { reactive } from 'vue'
import User from './components/User.vue'

const userInfo = reactive({
  name: '王大冶',
  job: '前端开发',
  age: 16,
})

const userEventHandler = {
  updateUserName(userName) {
    alert(userName)
  },
  updateUserAge(userAge) {
    alert(userAge)
  },
}
</script>
