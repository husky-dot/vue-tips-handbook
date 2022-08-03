<template>
  <div class="user">
    <div v-if="$slots.header" class="user__heder">
      <slot name="header"></slot>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("$slots", this.$slots);
  },
};
</script>
