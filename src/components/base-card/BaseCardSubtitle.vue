<template>
  <h5 class="card__subtitle">
    <slot></slot>
  </h5>
</template>

<script>
export default {
  name: "BaseCardSubtitle"
}
</script>

<style lang="scss" scoped>
@import './assets/scss/BaseCardSubtitle';
</style>