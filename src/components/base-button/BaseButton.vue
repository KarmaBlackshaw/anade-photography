
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
  },
  circle: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  const classList = []

  classList.push(`base-button__size-${props.size}`)

  if (props.color) {
    classList.push(`base-button__color-${props.color}`)
  }

  if (props.outlined) {
    classList.push(`base-button__outlined`)
  }

  if (props.circle) {
    classList.push(`base-button__circle`)
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
@import './BaseButton';
</style>