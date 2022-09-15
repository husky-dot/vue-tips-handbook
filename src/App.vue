<template>
  <my-button
    data-cy="button"
    class="dark-button"
    id="the-button"
    @click="doSomething()"
    aria-label="A nice button"
    disabled="true"
    undefinedProperty="ops"
  />
</template>

<script setup>
import MyButton from './components/Button.vue'

</script>
