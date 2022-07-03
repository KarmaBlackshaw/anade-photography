<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },

  multiple: {
    type: [String, Boolean],
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

function handleChange (e) {
  emit('update:modelValue', e.target.files[0])
}
</script>

<template>
  <div>
    <base-label v-if="label">
      {{ label }}
    </base-label>

    <input
      type="file"
      @change="handleChange"
    >
  </div>
</template>

<style lang="scss" scoped>
@import './BaseInputFile';
</style>