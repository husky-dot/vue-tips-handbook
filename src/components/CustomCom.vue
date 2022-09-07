<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) },
})
console.log('props.modelModifiers', props.modelModifiers)
const emit = defineEmits(['update:modelValue'])
function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers['no-underscore']) {
    value = value.replace('_', '')
  }
  emit('update:modelValue', value)
}
</script>
