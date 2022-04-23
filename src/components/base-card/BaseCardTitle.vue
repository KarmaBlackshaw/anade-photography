<template>
  <h5 class="card__title">
    <slot></slot>
  </h5>
</template>

<script>
export default {
  name: "BaseCardTitle"
}
</script>

<style lang="scss" scoped>
@import './assets/scss/BaseCardTitle';
</style>