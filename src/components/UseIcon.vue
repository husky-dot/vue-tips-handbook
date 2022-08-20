<template>
  <div>
    <h2>{{ heading }}</h2>
    <Icon :type="iconType" :size="iconSize" />
  </div>
</template>

<script>
import Icon from './Icon.vue'

const iconProps = {}
Object.entries(Icon.props).forEach((key, val) => {
  iconProps[`icon${key[0].toUpperCase()}${key.substring(1)}`] = val
})

export default {
  components: {
    Icon,
  },
  props: {
    ...iconProps,
    heading: {
      type: String,
      required: true,
    },
  },
}
</script>
