<template>
  <div class="app">
    <Transition name="loader">
      <div
        v-if="showLoader"
        class="app__loader"
      >
        <Loader />
      </div>
    </Transition>

    <TheNavigation
      class="app__header app__navigation"
      :class="navigationPosition"
    />

    <div
      v-if="route.meta.auth"
      class="app__dashboard"
    >
      <TheSidebar class="dashboard__sidebar" />

      <router-view class="dashboard__body" />
    </div>

    <router-view
      v-else
      class="app__body"
    />

    <TheFooter class="app__footer" />
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

// composables
import useSetupGlobalProvide from '@/composables/useSetupGlobalProvide'

import TheNavigation from './components/the-navigation/TheNavigation'
import TheFooter from './components/the-footer/TheFooter'
import TheSidebar from './components/the-sidebar/TheSidebar'
import Loader from '@/views/loader/LoaderView'

export default {
  components: {
    TheSidebar,
    TheNavigation,
    TheFooter,
    Loader
  },

  setup () {
    useSetupGlobalProvide()

    const route = useRoute()

    const navigationPosition = computed(() => {
      return route.meta.auth ? 'relative' : 'fixed'
    })

    const showLoader = ref(false)

    onMounted(() => {
      setTimeout(() => {
        showLoader.value = false
      }, 2000)
    })

    return {
      navigationPosition,

      showLoader,

      route
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/view/App';
</style>
