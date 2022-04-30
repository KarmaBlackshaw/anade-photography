<template>
  <section
    id="hero"
    class="hero"
  >
    <HomeView
      id="home"
      class="mb-20"
    />

    <div class="container mx-auto px-10 py-5 sm:px-20">
      <FlowView
        id="flow"
        class="mb-20"
      />
    </div>

    <div class="container mx-auto px-10 py-5 sm:px-20">
      <AboutView
        id="about"
        class="mb-20"
      />
    </div>

    <div class="container mx-auto px-10 py-5 sm:px-20">
      <ServicesView
        id="services"
        class="mb-20"
      />
    </div>

    <div class="container mx-auto px-10 py-5 sm:px-20">
      <TestimonialsView
        id="testimonials"
        class="mb-20"
      />
    </div>

    <div class="container mx-auto px-10 py-5 sm:px-20">
      <GalleryView
        id="gallery"
        class="mb-20"
      />
    </div>

    <div class="container mx-auto px-10 py-5 sm:px-20">
      <ContactView
        id="contact"
        class="mb-20"
      />
    </div>
  </section>
</template>

<script>
import HomeView from '@/views/home/HomeView'
import FlowView from '@/views/flow/FlowView'
import ServicesView from '@/views/services/ServicesView'
import AboutView from '@/views/about/AboutView'
import TestimonialsView from '@/views/testimonials/TestimonialsView'
import GalleryView from '@/views/gallery/GalleryView'
import ContactView from '@/views/contact/ContactView'

export default {
  components: {
    HomeView,
    AboutView,
    FlowView,
    ServicesView,
    TestimonialsView,
    GalleryView,
    ContactView
  }

}
</script>

<style lang="scss" scoped>
@import './assets/scss/HeroView.scss';
</style>