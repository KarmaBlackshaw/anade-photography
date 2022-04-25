<template>
  <section class="testimonials">
    <base-section-title>
      Testimonials
    </base-section-title>

    <base-section-subtitle class="mb-10">
      I satisfy clients in every way
    </base-section-subtitle>

    <div class="carousel">
      <Splide
        aria-label="My Favorite Images"
        :options="{
          padding: breakpoint.lg ? '5em' : 0,
          perPage: breakpoint.md ? 2 : breakpoint.lg ? 3 : 1,
          type: 'loop',
          perMove: 1,
          gap: '20px',
          autoplay: true,
          focus : 'center',
        }"
      >
        <SplideSlide>
          <base-card class="testimonial-card">
            <base-card-subtitle class="testimonial-card__body">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore ducimus quae dolor quam, harum optio suscipit illum, laboriosam eos a quod voluptates incidunt quaerat quia? Iste itaque accusamus blanditiis."
            </base-card-subtitle>

            <base-card-subtitle class="testimonial-card__footer">
              <div class="user-container">
                <div class="user-container__name">
                  Ernie Jeash
                </div>
                <div class="user-container__position">
                  CEO
                </div>
              </div>
            </base-card-subtitle>
          </base-card>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script>
import { ref, inject } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import '@splidejs/vue-splide/css';

export default {
  components: {
    Splide,
    SplideSlide
  },

  setup () {
    return {
      breakpoint: inject('breakpoint')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/TestimonialsView";
</style>