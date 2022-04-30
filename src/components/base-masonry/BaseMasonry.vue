<template>
  <div class="base-masonry">
    <div
      v-for="(_, i) in columns"
      :key="i"
      class="base-masonry__column"
    >
      <div class="base-masonry__figure">
        <img
          v-for="src in chunkedImages[i]"
          :key="src"
          :src="src"
          :alt="`Image ${i}`"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

import _chunk from 'lodash/chunk'

export default {
  name: "BaseMasonry",

  props: {
    columns: {
      type: Number,
      default: 0
    },

    images: {
      type: Array,
      default: () => ([])
    }
  },

  setup (props) {
    const chunkedImages = computed(() => {
      const chunkSize = Math.floor(props.images.length / props.columns)

      return _chunk(props.images, chunkSize)
    })

    return {
      chunkedImages
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/BaseMasonry.scss';
</style>