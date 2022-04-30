<template>
  <section class="gallery">
    <base-section-title>
      Gallery
    </base-section-title>

    <base-section-subtitle class="mb-10">
      Check out some of my captures
    </base-section-subtitle>

    <base-masonry
      :columns="columns"
      :images="images"
    />
  </section>
</template>

<script >
import { inject, computed } from 'vue'
import _chunk from 'lodash/chunk'

export default {
  setup () {
    const images = [
      'https://images.pexels.com/photos/6165871/pexels-photo-6165871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/3665468/pexels-photo-3665468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/10831691/pexels-photo-10831691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/4978937/pexels-photo-4978937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/8271974/pexels-photo-8271974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/8585563/pexels-photo-8585563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/6258628/pexels-photo-6258628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/11182735/pexels-photo-11182735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/11003507/pexels-photo-11003507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/10567277/pexels-photo-10567277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/10873117/pexels-photo-10873117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/5254328/pexels-photo-5254328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/2907100/pexels-photo-2907100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ]

    const breakpoint = inject('breakpoint')

    const columns = computed(() => {
      return breakpoint.value.md ? 3 : 2
    })

    const chunkedImages = computed(() => {
      return _chunk(images, Math.floor(images.length / columns.value))
    })

    return {
      breakpoint,
      columns,
      chunkedImages,
      images
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/GalleryView';
</style>