<template>
  <div class="sidebar">
    <ul class="tab">
      <li class="tab__item tab__item--profile">
        <img
          src="https://images.pexels.com/photos/12125084/pexels-photo-12125084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          class="profile__img"
        >

        <span>Ernie Jeash</span>
      </li>

      <router-link
        v-for="(tab, tabKey) in tabs"
        :key="tabKey"
        v-slot="{ navigate, isActive, isExactActive }"
        custom
        :to="tab.to"
      >
        <li
          class="tab__item tab-link"
          :class="{
            'tab-link--active': isActive
          }"
          @click="navigate"
        >
          {{ tab.text }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { reactive, ref, inject } from 'vue'
import { useRoute } from 'vue-router'
import { useEventListener } from '@vueuse/core'

import _throttle from 'lodash/throttle'

export default {
  setup () {
    const tabs = reactive([
      {
        text: 'Hero',
        to: { name: 'hero-mgmt' }
      },
      {
        text: 'Flow',
        to: { name: 'flow-mgmt' }
      },
      {
        text: 'About Me',
        to: { name: 'about-mgmt' }
      },
      {
        text: 'Services',
        to: { name: 'services-mgmt' }
      },
      {
        text: 'Testimonials',
        to: { name: 'testimonials-mgmt' }
      },
      {
        text: 'Gallery',
        to: { name: 'gallery-mgmt' }
      },
      {
        text: 'Socials',
        to: { name: 'socials-mgmt' }
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
@import './assets/scss/TheSidebar';
</style>