<template>
  <div>child 组件</div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: '王大冶',
      },
    }
  },
  setup() {
    console.log(this.userInfo.name)
  },
}
</script>
