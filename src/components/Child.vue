<template>
  <div>child 组件</div>
</template>

<script>
export default {
  methods: {
    childMethod() {
      console.log("调用了 child 组件方法");
    },
  },
};
</script>
