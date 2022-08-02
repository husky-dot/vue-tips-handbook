<template>
  <div>
    <slot name="default" />
    <slot name="header"></slot>
  </div>
</template>

<script>
import { toRaw } from "@vue/reactivity";
export default {
  props: {
    userInfo: Object,
  },
  mounted() {
    console.log("$slots", toRaw(this.$slots));
  },
};
</script>
