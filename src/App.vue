<template>
  <div>
    <VFor :list="list">
      <template v-slot="{ item }">
        <strong>{{ item }}</strong>
      </template>
    </VFor>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VFor from './components/VFor.vue'

const list = ref([1, 2, 3])
</script>
