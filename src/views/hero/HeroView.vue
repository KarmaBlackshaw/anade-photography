<template>
  <section class="hero">
    <HomeView
      id="home"
      class="mb-20"
    />

    <div class="container mx-auto px-10 sm:px-20">
      <FlowView
        id="flow"
        class="mb-20"
      />

      <AboutView
        id="about"
        class="mb-20"
      />

      <ServicesView id="services" />
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