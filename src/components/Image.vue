<template>
  <img
    class="image"
    :class="computeImgStyle"
    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.yxrb.net%2Fuploadfile%2F2021%2F0419%2F20210419103029168.jpg&refer=http%3A%2F%2Fnews.yxrb.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661221742&t=07639ae48c1b346e8beaca365ce0b1c1"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  imgStyle: {
    type: String,
    default: 'square',
    validator: (value) => {
      return ['square', 'rounded'].includes(value)
    }
  },
})


const computeImgStyle = computed(() => {
  return {
    square: props.imgStyle === 'square',
    rounded: props.imgStyle === 'rounded',
  }
})
</script>

<style scoped>
.image {
  width: 70%;
}

.square {
  border-radius: 0;
}
.rounded {
  border-radius: 20px;
}
</style>
