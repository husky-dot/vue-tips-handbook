<template>
  <div>
    <ul>
      <li v-for="(value, key, index) in {
        name: '王大冶',
        age: 26,
        job: '前端开发'
      }">
       #{{ index + 1 }} {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const userInfo = reactive({
  id: '001',
  name: '王大冶',
  age: 16,
})
</script>

<style>
ul,
li {
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
