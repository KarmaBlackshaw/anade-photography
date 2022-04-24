<template>
  <div
    class="navigation"
    :class="{
      'navigation--darker': windowScrollY > 800
    }"
  >
    <div
      class="navigation__overlay"
      v-if="isHamburgerActive"
    >
      <ul class="overlay__list">
        <router-link
          v-for="(currTab, tabKey) in tabs"
          :key="tabKey"
          :to="currTab.to"
          custom
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <li
            class="link overlay__item"
            :class="{
              'is-active': isActive || isExactActive
            }"
            @click="navigate"
          >
            {{ currTab.text }}
          </li>
        </router-link>
      </ul>
    </div>

    <div class="navigation__container">
      <TheNavigationHamburger
        class="navigation__hamburger"
        @click.native="toggleHamburger"
      />

      <div class="navigation__logo">
        <img
          src="./assets/images/logo.png"
          alt=""
        >
      </div>

      <div class="navigation__body">
        <div
          class="navigation__item navigation__item--tabs"
          v-if="breakpoint.sm"
        >
          <ul>
            <router-link
              v-for="(currTab, tabKey) in tabs"
              :key="tabKey"
              :to="currTab.to"
              custom
              v-slot="{ navigate, isActive, isExactActive }"
            >
              <li
                class="link"
                :class="{
                  'is-active': isActive || isExactActive
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

import TheNavigationHamburger from './components/TheNavigationHamburger'

export default {
  components: {
    TheNavigationHamburger
  },

  setup () {
    const tabs = reactive([
      { text: 'home', to: '/' },
      { text: 'about', to: '#about' },
      { text: 'portfolio', to: '#portfolio' },
      { text: 'services', to: '#services' },
      { text: 'contact', to: '#contact' }
    ])

    const breakpoint = inject('breakpoint')

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
      tabs,
      breakpoint,
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