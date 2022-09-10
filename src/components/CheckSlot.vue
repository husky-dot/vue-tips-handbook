<template>
  <BaseButton>
    <BaseIcon name="search" />
  </BaseButton>
  <BaseInput v-model="searchText" />
</template>

<script>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseInput from './BaseInput.vue'
export default {
  components: {
    BaseButton,
    BaseIcon,
    BaseInput,
  },
}
</script>
