
<script setup>

const props = defineProps({
  label: {
    type: String,
    default: ''
  },

  modelValue: {
    type: [Number, Boolean],
    default: false
  }
})

</script>

<template>
  <div class="base-input-container">
    <label
      v-if="label"
      class="base-input__label"
    >
      {{ props.label }}
    </label>

    <input
      v-bind="$attrs"
      type="text"
      class="base-input"
    >
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/BaseInput.scss';
</style>