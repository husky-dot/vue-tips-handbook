<template>
  <div>
    <User>
      11
      <template #header>header</template>
    </User>
  </div>
</template>

<script setup>
import User from "./components/User.vue";

</script>

这节课，我们来看下有条件的渲染插槽。首先，我们来看个例子。

我们知道，每个 Vue 组件都 有一个特殊的对象 `$slots`，默认插槽的 key 是 default，其它命名插槽的 key，就是插槽的名称。


