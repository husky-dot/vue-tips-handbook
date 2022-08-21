<template>
  <form>
    <p>
      街道：
      <input
        type="text"
        :value="streetName"
        @input="$emit('update:streetName', $event.target.value)"
      />
    </p>
    <p>
      街道名称：
      <input
        type="text"
        :value="streetNumber"
        @input="$emit('update:streetNumber', $event.target.value)"
      />
    </p>
    <p>
      国家：
      <input
        type="text"
        :value="country"
        @input="$emit('update:country', $event.target.value)"
      />
    </p>
  </form>
</template>
<script setup>
// Set up all the props
defineProps({
  streetName: {
    type: String,
    required: true,
  },
  streetNumber: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
})
// Set up our events
defineEmits([
  'update:streetName',
  'update:streetNumber',
  // ...
  'update:country',
])
</script>
