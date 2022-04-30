<template>
  <button
    class="base-button"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  name: "BaseButton",

  props: {
    sizeSm: {
      type: Boolean,
      default: false
    },

    sizeMd: {
      type: Boolean,
      default: true
    },

    sizeLg: {
      type: Boolean,
      default: false
    },

    color: {
      type: String,
      default: '',
      required: true
    },

    outlined: {
      type: Boolean,
      default: false
    }
  },

  setup (props) {
    const classes = computed(() => {
      const classList = []

      if (props.sizeSm) {
        classList.push('base-button--size-sm')
      }

      if (props.sizeMd) {
        classList.push('base-button--size-md')
      }

      if (props.sizeLg) {
        classList.push('base-button--size-lg')
      }

      if (props.color) {
        classList.push(`base-button--color-${props.color}`)
      }

      if (props.outlined) {
        classList.push(`base-button--outlined`)
      }

      return classList
    })

    return {
      classes
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/BaseButton.scss';
</style>