<template>
  <div></div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const instanc = getCurrentInstance()

console.log(instanc)
// export default {
//   name: 'Widget',
//   columns: 3,
//   created() {
//     console.log(`Using ${this.$options.columns} columns`)
//   },
// }
</script>
