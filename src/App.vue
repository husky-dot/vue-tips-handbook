<template>
  <section class="the-one-fruit-to-buy">
    <template v-if="sourFruitSelected">
      <Grape v-if="isExpensive" />
      <Orange v-else />
    </template>
    <Apple v-else />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Apple from './components/Apple.vue'
import Grape from './components/Grape.vue'
import Orange from './components/Orange.vue'

const sourFruitSelected = ref(true)
const isExpensive = ref(true)
</script>
