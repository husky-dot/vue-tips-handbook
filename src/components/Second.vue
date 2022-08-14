<template>
  <div>upperCase: {{ upperCase }}</div>
</template>

<script>
export default {
  setup() {
    const title = 'hello world'
    return {
      title,
    }
  },
  computed: {
    upperCase() {
      return this.title.toUpperCase()
    },
  },
}
</script>
