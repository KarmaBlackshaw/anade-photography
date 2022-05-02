<template>
  <section class="testimonials">
    <base-section-title>
      Testimonials
    </base-section-title>

    <base-section-subtitle class="mb-10">
      I satisfy my clients, and here's what they say:
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
        <SplideSlide
          v-for="(testimonial, testimonialKey) in testimonials"
          :key="testimonialKey"
        >
          <base-card class="testimonial-card">
            <base-card-subtitle class="testimonial-card__body">
              "{{ testimonial.content }}"
            </base-card-subtitle>

            <base-card-subtitle class="testimonial-card__footer">
              <div class="user-container">
                <div class="user__names">
                  <div class="user-container__name">
                    {{ testimonial.author }}
                  </div>
                  <div
                    v-if="testimonial.position"
                    class="user-container__position"
                  >
                    {{ testimonial.position }}
                  </div>
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
import { inject, reactive } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

import '@splidejs/vue-splide/css'

// composables

export default {
  components: {
    Splide,
    SplideSlide
  },

  setup () {
    const testimonials = reactive([
      {
        author: 'Cor Mari',
        position: '',
        content: "A very talented human being. He's a photographer, videographer and also, a layout artist. All of his works are incredibly awesome."
      },
      {
        author: 'Idda',
        position: 'Teacher',
        content: "One of the best photographers in town and shoots uniquely, more shoots in the future please haha"
      },
      {
        author: 'Krista Zoila',
        position: '',
        content: "I just worked kuya mark this 2022 but I have heard so much about him even before i met him personally. He's so versatile and very easy to work with. You wouldn't feel any awkwardness because he'd boost your confidence talaga. 11/10."
      },
      {
        author: 'Sophia Dane',
        position: '',
        content: "I'm glad I went with him for my shoot. He's easy to get along with and undeniably knowledgeable. I'm blown away by all of his photographs, particularly the ones that have been enhanced. One of the aspects that helps to bring some fire in each photo is the individuality and thought he gives in every set."
      },
      {
        author: 'Kuisha Alysson',
        position: '',
        content: "Very accommodating, knows how to make the model comfortable when shooting, superb artistic direction, great postproccessing skillzz (with attention to detail sa highlight & contour), what more can you ask for? 🤣👌🏼👌🏼"
      },
      {
        author: 'Denise Armamento',
        position: '',
        content: "I worked with kuya Mark for a couple of times already and up until now I'm still amazed on how he can perfectly transform photos to a whole level. His presence alone can make you feel comfortable while taking shots because he's easy to get along with and without a doubt a real professional. Can't wait for more great works of kuya Mark. Kudos!"
      },
      {
        author: 'Louienniel Ramos Tinio',
        position: '',
        content: "One of the best photographer in this place no question! Mark has a unique style of editing, and has a wide knowledge about photo manipulation and his post processing is insanely good. 😊"
      },
      {
        author: 'Reggie Rams',
        position: 'Photographer',
        content: "Bongga kaayo nga photographer. Unique ideas and always trying to come up with a new theme or style."
      },
      {
        author: 'Aiko Larion',
        position: '',
        content: "Super galing! One of the most talented photographer I know! book na mga besh! 😎"
      },
      {
        author: 'Zaira Marie Palaña Llose',
        position: '',
        content: "You have always that distinct style of photography."
      }
    ])

    return {
      testimonials,

      breakpoint: inject('breakpoint')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/TestimonialsView";
</style>