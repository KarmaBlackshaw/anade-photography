<template>
  <header
    class="navigation"
    :class="{
      'navigation--darker': windowScrollY > 5
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
          v-if="breakpoint.md"
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
                  'is-active': `/${route.hash}` === currTab.to
                }"
                @click="navigate"
              >
                <template v-if="currTab.type === 'button'">
                  <button
                    class="navigation__btn"
                  >
                    {{ currTab.text }}
                  </button>
                </template>

                <template v-else>
                  {{ currTab.text }}
                </template>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { reactive, ref, inject } from 'vue'
import { useRoute } from 'vue-router'
import { useEventListener } from '@vueuse/core'

import TheNavigationHamburger from './components/TheNavigationHamburger'
import _throttle from 'lodash/throttle'

export default {
  components: {
    TheNavigationHamburger
  },

  setup () {
    const tabs = reactive([
      {
        text: 'about',
        to: '/#about'
      },
      {
        text: 'services',
        to: '/#services'
      },
      {
        text: 'testimonials',
        to: '/#testimonials'
      },
      {
        text: 'gallery',
        to: '/#gallery'
      },
      {
        text: 'contact',
        to: '/#contact',
        type: 'button'
      }
    ])

    const windowScrollY = ref(0)
    useEventListener(window, 'scroll', _throttle(() => {
      windowScrollY.value = window.scrollY
    }, 100))

    const isHamburgerActive = ref(false)
    function toggleHamburger () {
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
@import './assets/scss/TheNavigation';
</style>