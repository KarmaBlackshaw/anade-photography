<template>
  <section class="about">
    <base-section-title>
      About me
    </base-section-title>

    <base-section-subtitle class="mb-10">
      What I do to improve custom loyalty
    </base-section-subtitle>

    <div class="about__categories mb-10">
      <div
        v-for="(category, categoryKey) in categories"
        :key="categoryKey"
        class="category"
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

    <div class="about__list">
      <div
        v-for="i in 3"
        :key="i"
        class="about__item"
      >
        <figure class="item__img-figure">
          <img
            src="https://images.pexels.com/photos/10715497/pexels-photo-10715497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            class="item__img"
          >
        </figure>

        <div class="item__aside">
          <div class="item__title">
            Personal Level
          </div>
          <div class="item__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum mollitia velit soluta sint quis atque possimus pariatur! Illo assumenda rem debitis sint mollitia earum dolor quisquam doloremque voluptatum laudantium molestias reiciendis, maxime minima, neque, voluptatem repellendus unde molestiae culpa. Natus, unde amet laboriosam dolorum asperiores veniam. Amet, qui excepturi similique a veniam dolorum
          </div>
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