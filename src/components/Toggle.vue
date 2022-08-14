<template>
  <div>
    <h1 class="title" @click="toggleHidden">
      {{ title }}
    </h1>
    <slot v-if="$hidden" />
  </div>
</template>

<script>
export default {
  name: 'Toggle',

  props: {
    title: {
      type: String,
      required: true,
    },
    hidden: {
      type: Boolean,
      default: undefined,
    },
  },

  data() {
    return {
      _hidden: false,
    }
  },

  methods: {
    toggleHidden() {
      this._hidden = !this._hidden
    },
  },

  computed: {
    $hidden() {
      return this.hidden !== undefined ? this.hidden : this._hidden
    },
  },
}
</script>
