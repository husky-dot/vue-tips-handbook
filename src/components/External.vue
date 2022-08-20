<template>
  <div>y: {{ reactiveVariable.x }} x: {{ reactiveVariable.y }}</div>
</template>

<script>
export default {
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
  watch: {
    fullName() {
      this.fetchUserInformation() // Side effect
    },
  },
}
</script>
