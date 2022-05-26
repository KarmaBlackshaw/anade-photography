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
      <li
        v-for="(tab, tabKey) in tabs"
        :key="tabKey"
        class="tab__item tab__item--link"
      >
        {{ tab.text }}
      </li>
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
        to: '/#about'
      },
      {
        text: 'Flow',
        to: '/#services'
      },
      {
        text: 'About Me',
        to: '/#testimonials'
      },
      {
        text: 'Services',
        to: '/#gallery'
      },
      {
        text: 'Testimonias',
        to: '/#contact',
        type: 'button'
      },
      {
        text: 'Gallery',
        to: { name: 'login' },
        type: 'button'
      },
      {
        text: 'Socials',
        to: { name: 'login' },
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
@import './assets/scss/TheSidebar';
</style>