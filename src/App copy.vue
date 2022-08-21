<template>
  <AddressForm
    v-model:street-name="streetName"
    v-model:street-number="streetNumber"
    v-model:country="country"
  />
</template>

<script setup>
import AddressForm from './components/AddressForm.vue'
import { ref } from 'vue'

const streetName = ref('')
const streetNumber = ref('')
const country = ref('')
</script>
