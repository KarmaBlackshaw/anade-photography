<template>
  <tr class="base-tr">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: "BaseTr"
}
</script>

<style scoped lang="scss">
.base-tr {
  position: relative;
  height: 100%;
  background-color: theme('colors.zinc.800');

  &:not(:last-child) {
    border-bottom: 1px solid theme('colors.zinc.700');
  }
}
</style>