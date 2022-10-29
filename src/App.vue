<template>
  <DetectOutsideClick @detect="onOutsideClick">
    <div class="popup">
      <div>点我呀</div>
    </div>
  </DetectOutsideClick>
</template>

<script setup>
import DetectOutsideClick from './components/DetectOutsideClick.vue'

const onOutsideClick = () => {
  alert('点击了')
}
</script>
