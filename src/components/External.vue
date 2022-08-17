<template>
  <div>
    y: {{ reactiveVariable.x }}
    x: {{ reactiveVariable.y }}
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { getValue } from '../external'

const reactiveVariable = reactive(getValue())
</script>
