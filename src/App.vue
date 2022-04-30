<template>
  <div
    class="app"
    :class="{
      'app--loading': showLoader
    }"
  >
    <!-- <Transition name="loader">
      <div
        v-if="showLoader"
        class="app__loader"
      >
        <Loader />
      </div>
    </Transition> -->

    <div class="app__header">
      <TheNavigation class="app__navigation" />
    </div>

    <div class="app__body">
      <router-view />
    </div>

    <div class="app__footer">
    </div>
  </div>
</template>

<script>
import { ref, provide, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// composables
import useBreakpoint from '@/composables/useBreakpoint'

import TheNavigation from './components/the-navigation/TheNavigationView'
import Loader from '@/views/loader/LoaderView'

export default {
  components: {
    TheNavigation,
    Loader
  },

  setup () {
    const {
      breakpoint
    } = useBreakpoint()

    const {
      hash: routeHash
    } = useRoute()

    provide('breakpoint', breakpoint)

    const showLoader = ref(true)

    onMounted(() => {
      setTimeout(() => {
        showLoader.value = false

        if (!routeHash) {
          return
        }

        nextTick(() => {

          const el = document.querySelector(routeHash)

          if (el) {
            const position = el.getBoundingClientRect()

            window.scrollTo(position.left, position.top - 70)
          }
        })
      }, 0)
    })


    return {
      showLoader
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/view/App';
</style>
