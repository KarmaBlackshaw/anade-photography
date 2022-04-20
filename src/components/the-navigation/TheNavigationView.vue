<template>
  <div class="navigation">
    <div class="navigation__container">
      <div class="navigation__hamburger">
        <TheNavigationHamburger />
      </div>

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

        <div v-else>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, inject } from 'vue'

import TheNavigationHamburger from './components/TheNavigationHamburger'

export default {
  components: {
    TheNavigationHamburger
  },

  setup () {
    const tabs = reactive([
      { text: 'home', to: { name: 'home' } },
      { text: 'about', to: { name: 'about' } },
      { text: 'portfolio', to: { name: 'portfolio' } },
      { text: 'services', to: { name: 'about' } },
      { text: 'contact', to: { name: 'contact' } }
    ])

    const breakpoint = inject('breakpoint')

    return {
      tabs,
      breakpoint
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/TheNavigationView';
</style>