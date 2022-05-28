<template>
  <td
    class="px-6 py-4"
    :style="style"
  >
    <slot></slot>
  </td>
</template>

<script>
import { computed } from 'vue'

export default {
  name: "BaseTd",

  props: {
    width: {
      type: [Number, String],
      default: 'auto'
    }
  },

  setup (props) {
    const style = computed(() => {
      return {
        width: `${props.width}!important`
      }
    })

    return { style }
  }
}
</script>