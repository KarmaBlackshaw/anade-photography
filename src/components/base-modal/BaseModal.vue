<script setup>
defineProps({
  modelValue: {
    type: [Number, Boolean],
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])
function triggerClose () {
  emit('update:modelValue', false)
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="modal-container"
      @click.self="triggerClose"
    >
      <div class="modal">
        <!-- Header -->
        <div class="modal__header">
          <slot name="header"></slot>

          <base-icon-close
            class="icon-close"
            color="#F87171"
            @click="triggerClose"
          />
        </div>

        <!-- Content -->
        <div class="modal__body">
          <slot></slot>
        </div>

        <!-- Footer -->
        <div class="modal__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import './assets/scss/BaseModal';
</style>