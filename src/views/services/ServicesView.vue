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
        v-for="(service, serviceKey) in services"
        :key="serviceKey"
        class="services-list__item"
      >
        <figure class="services-list__figure">
          <img
            class="services-list__img"
            :src="service.image"
            alt=""
          >
        </figure>

        <h3 class="services-list__title">
          {{ service.title }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
import _sample from "lodash/sample";

export default {
  setup () {
    const images = [
      "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/5015503/pexels-photo-5015503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/11866150/pexels-photo-11866150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/11710660/pexels-photo-11710660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/11384154/pexels-photo-11384154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/11041919/pexels-photo-11041919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/11155273/pexels-photo-11155273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ]

    const services = [
      {
        title: 'Casual Shoots',
        image: _sample(images)
      },
      {
        title: 'Pre Birthday',
        image: _sample(images)
      },
      {
        title: 'Pre Nup',
        image: _sample(images)
      },
      {
        title: 'Billboard',
        image: _sample(images)
      },
      {
        title: 'Beauty Shots',
        image: _sample(images)
      },
      {
        title: 'Photoshoot',
        image: _sample(images)
      }
    ]

    return {
      services
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/ServicesView.scss";
</style>
