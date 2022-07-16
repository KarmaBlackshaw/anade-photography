<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
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
      v-bind="$attrs"
      @change="handleChange"
    >
  </div>
</template>

<style lang="scss" scoped>
@import './BaseInputFile';
</style>