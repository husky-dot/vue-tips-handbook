<template>
  <div class="user">
    <slot />
    <div v-if="$slots.header" class="user__header">
      <slot name="header"></slot>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('$slots', this.$slots)
  },
}
</script>
