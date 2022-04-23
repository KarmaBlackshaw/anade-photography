<template>
  <div
    class="app"
    :class="{
      'app--loading': showLoader
    }"
  >
    <Transition name="loader">
      <div
        class="app__loader"
        v-if="showLoader"
      >
        <Loader  />
      </div>
    </Transition>

    <div class="app__header">
      <TheNavigation class="app__navigation"/>
    </div>

    <div class="app__body">
      <router-view/>
    </div>

    <div class="app__footer">

    </div>
  </div>
</template>

<script>
import { ref, provide } from 'vue'

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

    provide('breakpoint', breakpoint)

    const showLoader = ref(true)

    setTimeout(() => {
      showLoader.value = false
    }, 3000)

    return {
      showLoader
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/view/App';
</style>
