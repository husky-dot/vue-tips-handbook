<template></template>

<script setup>
import { reactive, toRef } from 'vue'

const state = reactive({
  foo: 1,
  bar: 2,
})

const carRef = toRef(state, 'car', 10)
console.log(carRef.value) // 10
</script>
