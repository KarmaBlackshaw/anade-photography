<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-neutral-400">
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: "BaseTable"
}
</script>

<style lang="scss" scoped>
// @import './assets/scss/component-name';
</style>