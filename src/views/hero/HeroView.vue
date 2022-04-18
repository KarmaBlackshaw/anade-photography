<template>
  <div class="hero">
    <HomeView />
  </div>
</template>

<script>
import HomeView from '@/views/home/HomeView.vue'
export default {
  components: {
    HomeView
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/HeroView';
</style>