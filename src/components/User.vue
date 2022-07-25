<template>
  <div>
    <p>姓名：{{ name }}</p>
    <p>职业：{{ job }}</p>
    <p>年龄：{{ age }}</p>
  </div>
</template>

<script setup>
 defineProps({
  name: String,
  job: String,
  age: Number
})
</script>
