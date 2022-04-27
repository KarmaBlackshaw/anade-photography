<template>
  <div class="loader">
    <div class="loader__body">
      <loader-icon
        class="loader__img"
        :animation-duration="1500"
        :size="64"
        color="#fff"
      />

      <img
        class="loader__title"
        src="@/assets/images/anade-text-logo.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import LoaderIcon from './components/LoaderIcon'

export default {
  name: "LoaderView",

  components: {
    LoaderIcon
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/LoaderIndex';
</style>