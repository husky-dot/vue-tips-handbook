<template>
  <div>
    <Child ref="child" />
  </div>
</template>

<script>
import Child from './components/Child.vue'

export default {
  components: {
    Child
  },
  mounted () {
    this.$refs.child.childMethod()
  }
}
</script>
