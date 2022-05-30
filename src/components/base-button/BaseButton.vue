
<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator (value) {
      return ['sm', 'md', 'lg'].includes(value)
    }
  },

  color: {
    type: String,
    default: ''
  },

  outlined: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  const classList = []

  classList.push(`base-button--size-${props.size}`)

  if (props.color) {
    classList.push(`base-button--color-${props.color}`)
  }

  if (props.outlined) {
    classList.push(`base-button--outlined`)
  }

  return classList
})

</script>

<template>
  <button
    class="base-button"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import './assets/scss/BaseButton.scss';
</style>