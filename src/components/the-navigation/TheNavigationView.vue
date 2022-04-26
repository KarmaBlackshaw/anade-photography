<template>
  <div
    class="navigation"
    :class="{
      'navigation--darker': windowScrollY > 800
    }"
  >
    <div
      v-if="isHamburgerActive"
      class="navigation__overlay"
    >
      <ul class="overlay__list">
        <router-link
          v-for="(currTab, tabKey) in tabs"
          :key="tabKey"
          v-slot="{ navigate }"
          :to="currTab.to"
          custom
        >
          <li
            class="link overlay__item"
            :class="{
              'is-active': route.hash === currTab.to
            }"
            @click="navigate(), toggleHamburger()"
          >
            {{ currTab.text }}
          </li>
        </router-link>
      </ul>
    </div>

    <div class="navigation__container">
      <TheNavigationHamburger
        class="navigation__hamburger"
        @click="toggleHamburger"
      />

      <div class="navigation__logo">
        <router-link
          v-slot="{ navigate }"
          to="/"
          custom
        >
          <img
            src="./assets/images/logo.png"
            alt=""
            @click="navigate"
          >
        </router-link>
      </div>

      <div class="navigation__body">
        <div
          v-if="breakpoint.sm"
          class="navigation__item navigation__item--tabs"
        >
          <ul>
            <router-link
              v-for="(currTab, tabKey) in tabs"
              :key="tabKey"
              v-slot="{ navigate }"
              :to="currTab.to"
              custom
            >
              <li
                class="link"
                :class="{
                  'is-active': route.hash === currTab.to
                }"
                @click="navigate"
              >
                {{ currTab.text }}
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, inject } from 'vue'
import { useRoute } from 'vue-router'

import TheNavigationHamburger from './components/TheNavigationHamburger'

export default {
  components: {
    TheNavigationHamburger
  },

  setup () {
    const tabs = reactive([
      {
        text: 'about',
        to: '#about'
      },
      {
        text: 'services',
        to: '#services'
      },
      {
        text: 'testimonials',
        to: '#testimonials'
      },
      {
        text: 'gallery',
        to: '#gallery'
      },
      {
        text: 'contact',
        to: '#contact'
      }
    ])


    const windowScrollY = ref(0)

    window.addEventListener("scroll", function (){
      windowScrollY.value = this.scrollY
    })

    const isHamburgerActive = ref(false)
    function toggleHamburger () {
      console.log('asd')
      isHamburgerActive.value = !isHamburgerActive.value
    }

    return {
      breakpoint: inject('breakpoint'),

      route: useRoute(),

      tabs,
      windowScrollY,

      isHamburgerActive,
      toggleHamburger
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/TheNavigationView';
</style>