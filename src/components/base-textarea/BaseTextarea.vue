
<script setup>

const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <div class="base-textarea-container">
    <label
      v-if="props.label"
      class="base-textarea__label"
    >
      {{ props.label }}
    </label>

    <textarea
      type="text"
      class="base-textarea"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/BaseTextarea.scss';
</style>