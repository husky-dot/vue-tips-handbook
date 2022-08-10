<template>
  <div :class="computedClasses" />
</template>

<script setup>
import { computed } from "vue";
const computedClasses = computed(() => {
  return {
    primary: isPrimary,
    secondary: isSecondary,
    tertiary: isTertiary,
    fourth: isFourth,
  };
});
</script>

<style scoped>
.disabled-component {
  background-color: gray;
  color: darkgray;
  cursor: not-allowed;
}
</style>
