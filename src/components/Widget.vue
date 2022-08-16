<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="navigation">
      <!-- ... -->
    </div>

    <div v-for="item in list">
      <h2 class="item-title">
        {{ item.title }}
      </h2>
      <p class="item-description">
        {{ item.description }}
      </p>
    </div>

    <footer>
      <!-- ... -->
    </footer>
  </div>
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
