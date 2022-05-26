<template>
  <h5 class="card__body">
    <slot></slot>
  </h5>
</template>

<script>
export default {
  name: "BaseCardBody"
}
</script>

<style lang="scss" scoped>
@import './assets/scss/BaseCardBody';
</style>