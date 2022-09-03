<template>
  <AsyncComp />
</template>
<script>
import { defineAsyncComponent } from 'vue'
import Loading from './components/Loading'
export default {
  components: {
    AsyncComp: defineAsyncComponent({
      // the loader function
      loader: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import('./components/HelloWorld.vue'))
          }, 2000)
        }),
      // 在异步组件加载时使用的组件
      loadingComponent: Loading,
      // 显示加载组件前的延迟。默认：200ms。
      delay: 500,
    }),
  },
  data() {},
}
</script>
