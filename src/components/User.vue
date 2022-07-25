<template>
  <div>
    <p>姓名：{{ userInfo.detail.name }}</p>
    <p>职业：{{ userInfo.job }}</p>
    <p>年龄：{{ userInfo.age }}</p>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: Object
  },
}
</script>
