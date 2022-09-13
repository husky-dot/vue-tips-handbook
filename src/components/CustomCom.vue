<template>
  <div>
    <div v-if="points <= 1000">层级1</div>
    <div v-if="points > 1000">层级2</div>
  </div>
</template>

<script>
export default {
  props: {
    points: Number,
  },
  watch: {
    points() {
      console.log('watch 执行了')
    },
  },
}
</script>
