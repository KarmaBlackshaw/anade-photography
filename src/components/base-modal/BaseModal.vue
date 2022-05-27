<template>
  <Transition
    v-if="value"
    name="fade"
  >
    <div
      class="modal-container"
      @click="$emit('input', false)"
    >
      <div class="modal">
        <!-- Header -->
        <div class="modal__header">
          <slot name="header"></slot>

          <BaseIconX
            class="close"
            color="#EF4444"
          />
        </div>

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

<script>
export default {
  name: "BaseModal",

  props: {
    value: {
      type: [Boolean, Number],
      default: 0
    }
  },

  emits: ['input']
}
</script>

<style lang="scss" scoped>
@import './assets/scss/BaseModal';
</style>