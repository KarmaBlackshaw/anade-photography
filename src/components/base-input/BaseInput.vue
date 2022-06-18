
<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },

  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div class="base-input-container">
    <label
      v-if="label"
      class="base-input__label"
    >
      {{ label }}
    </label>

    <input
      v-bind="$attrs"
      type="text"
      class="base-input"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/BaseInput.scss';
</style>