<template>
  <section class="hero">
    <HomeView id="home-view" />

    <div class="container mx-auto px-10 sm:px-20">
      <FlowView
        id="flow-view"
        class="hero__item--flow"
      />

      <ServicesView id="services-view" />

      <!-- <AboutView id="about-view" /> -->
    </div>
  </section>
</template>

<script>
import HomeView from '@/views/home/HomeView'
import FlowView from '@/views/flow/FlowView'
import ServicesView from '@/views/services/ServicesView'
import AboutView from '@/views/about/AboutView'

export default {
  components: {
    HomeView,
    AboutView,
    FlowView,
    ServicesView
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/HeroView.scss';
</style>