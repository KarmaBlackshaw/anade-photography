
<script setup>

defineProps({
  label: {
    type: String,
    default: ''
  },

  modelValue: {
    type: [String, Number],
    default: ''
  },

  type: {
    type: String,
    default: 'text',
    validator (val) {
      return val !== 'file'
    }
  }
})

const emit = defineEmits(['update:modelValue'])

function handleInputChange ($event) {
  emit('update:modelValue', $event.target.value)
}

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
      :type="type"
      class="base-input"
      :value="modelValue"
      @input="handleInputChange"
    >
  </div>
</template>

<style lang="scss" scoped>
@import './/BaseInput';
</style>