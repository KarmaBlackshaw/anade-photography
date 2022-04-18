<template>
  <div class="app">
    <div class="app__loader">
      <Loader/>
    </div>

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
import TheNavigation from './components/the-navigation/TheNavigationIndex'
import Loader from '@/views/loader/LoaderIndex'

export default {
  components: {
    TheNavigation,
    Loader
  },

  setup () {
    console.log('asdf')
  }
}
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  position: relative;

  .app__loader {
    position: absolute;
    width: 100%;
    height: 100%;
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
</style>
