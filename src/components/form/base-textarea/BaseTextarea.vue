
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
  <div class="base-textarea-container">
    <base-label v-if="label">
      {{ label }}
    </base-label>

    <textarea
      type="text"
      class="base-textarea"
      v-bind="$attrs"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
@import './/BaseTextarea.scss';
</style>