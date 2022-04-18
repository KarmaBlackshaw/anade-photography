<template>
  <div class="navigation">
    <div class="navigation__container">
      <div class="navigation__logo">
        <img
          src="./assets/svg/logo.svg"
          alt=""
        >
      </div>

      <div class="navigation__body">
        <div class="navigation__item navigation__item--tabs">
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
import { reactive } from 'vue'

export default {
  setup () {
    const tabs = reactive([
      { text: 'home', to: { name: 'home' } },
      { text: 'about', to: { name: 'about' } },
      { text: 'portfolio', to: { name: 'portfolio' } },
      { text: 'contact', to: { name: 'contact' } }
    ])

    return {
      tabs
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/TheNavigationView'
</style>