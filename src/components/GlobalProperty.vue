<template>
  <div>获取到全局属性，值为：{{ $myGlobal }}</div>
</template>

<script setup>
import useGlobals from '../useGlobals'

const { $myGlobal } = useGlobals()
</script>
