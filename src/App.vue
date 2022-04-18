<template>
  <div class="app">
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
import { ref } from 'vue'

import TheNavigation from './components/the-navigation/TheNavigationView'
import Loader from '@/views/loader/LoaderView'

export default {
  components: {
    TheNavigation,
    Loader
  },

  setup () {
    const showLoader = ref(true)

    setTimeout(() => {
      showLoader.value = false
    }, 2000);

    return {
      showLoader
    }
  }
}
</script>

<style lang="scss">
body {
  background: theme('colors.gray.900');
}
.app {
  min-height: 100vh;
  position: relative;

  .app__loader {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.loader-enter-active,
.loader-leave-active {
  transition: opacity 1s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>
