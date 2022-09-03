<template>
  <footer v-if="showFooter">
    <h3>来自底层的仰望</h3>
    <slot name="footer" />
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showFooter: false,
    }
  },
  created() {
    this.setShowSlots()
  },
  beforeUpdate() {
    this.setShowSlots()
  },
  methods: {
    setShowSlots() {
      this.showFooter = this.$slots.footer?.[0]
    },
  },
}
</script>
