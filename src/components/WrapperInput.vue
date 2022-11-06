<template>
  <el-input v-bind="$attrs" placeholder="Please input">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}"></slot>
    </template>
  </el-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
