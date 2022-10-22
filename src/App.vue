<template>
  <div id="app">
    <SimpleEvent
      id="myId"
      class="myClass"
      data-cy="cypress-testing"
      @blur="onBlur"
      title="测试$attrs"
      description="没有声明 props"
      @custom="onCustom"
    />
  </div>
</template>

<script setup>
import SimpleEvent from './components/Button.vue'

const onBlur = () => {
  // todo
}
const onCustom = () => {
  // todo
}
</script>
