
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
    <label
      v-if="label"
      class="base-textarea__label"
    >
      {{ label }}
    </label>

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