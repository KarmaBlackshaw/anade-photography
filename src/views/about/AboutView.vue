<template>
  <section class="about">
    <base-section-title class="services-title">
      About me
    </base-section-title>

    <base-section-subtitle class="services-title mb-10">
      What I do to improve custom loyalty
    </base-section-subtitle>

    <div class="about__categories">
      <div
        class="category"
        v-for="(category, categoryKey) in categories"
        :key="categoryKey"
      >
        <div class="category__body">
          <div class="category__icon">
            <img
              :src="require(`./assets/images/${category.icon}.png`)"
              alt=""
            >
          </div>

          <div class="category__title">
            {{ category.title }}
          </div>
        </div>

        <div
          class="category__progress-bar"
          :class="category.name"
        >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const categories = ref([
      {
        icon:'shield',
        name:'reliable',
        title: 'Reliable',
        percentage: 90,
        color: 'green'
      },
      {
        icon:'clock',
        name:'time-saving',
        title: 'Time-saving',
        percentage: 90,
        color: 'orange'
      },
      {
        icon:'handshake',
        name:'best-deal',
        title: 'Best deal',
        percentage: 90,
        color: 'blue'
      },
      {
        icon:'quality',
        name:'quality',
        title: 'Quality',
        percentage: 90,
        color: 'yellow'
      }
    ])

    return {
      categories
    }
  }
}
</script>

<style src="./assets/scss/AboutView.scss" lang="scss" scoped></style>