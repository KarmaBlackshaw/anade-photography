<template>
  <div class="loader">
    <div class="loader__body">
      <img
        class="loader__img"
        src="./assets/svg/puff.svg"
        alt=""
      >
      <img
        class="loader__title"
        src="@/assets/images/anade-text-logo.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderView"
}
</script>

<style lang="scss" scoped>
@import './assets/scss/LoaderIndex';
</style>