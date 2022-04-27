<template>
  <div class="loader">
    <div class="loader__body">
      <fingerprint-spinner
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
import { FingerprintSpinner } from 'epic-spinners'

export default {
  name: "LoaderView",

  components: {
    FingerprintSpinner
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/LoaderIndex';
</style>