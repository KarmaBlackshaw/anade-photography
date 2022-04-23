<template>
  <section class="services">
    <base-section-title class="services-title">
      Our First-Class Services
    </base-section-title>

    <base-section-subtitle class="services-title mb-10">
      Choose from the available service that we can provide
    </base-section-subtitle>

    <div class="services-list">
      <div
        class="services-list__item"
        v-for="i in 20"
        :key="i"
      >
        <div class="img-container">
          <img
            class="services-list__img"
            :src="getRandomImage()"
            alt=""
          >
        </div>

        <h3 class="services-list__title">
          Pre Debut
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'

import _sample from 'lodash/sample'

export default {
  setup () {
    const images = reactive([
      'https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5015503/pexels-photo-5015503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ])

    function getRandomImage () {
      return _sample(images)
    }

    return {
      getRandomImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/ServicesView.scss';
</style>