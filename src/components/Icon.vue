<template>
  <button :style="computeStyle">字体图标</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (size) => ['primary', 'success'].includes(size),
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (size) =>
        ['small', 'medium', 'large', 'x-large'].includes(size),
    },
  },
  computed: {
    computeStyle() {
      const colorType = {
        primary: '#409eff',
        success: '##67c23a',
      }
      const sizeMap = {
        small: '12px',
        medium: '16px',
        large: '20px',
        'x-large': '26px',
      }
      return {
        backgroundColor: colorType[this.type],
        fontSize: sizeMap[this.size],
      }
    },
  },
}
</script>

<style>
button {
  color: white;
}
</style>
