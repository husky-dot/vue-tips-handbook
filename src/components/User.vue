<template>
  <div class="user">
    <slot />
  </div>
</template>

<style scoped>
:slotted(.userInfo) {
  color: red;
}

</style>

<style>
.green {
  color: green;
}
</style>
