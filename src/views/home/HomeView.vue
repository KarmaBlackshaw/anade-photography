<template>
  <section class="home">
    <div class="home__background"></div>

    <div
      v-if="breakpoint.lg"
      class="home__overlay home__overlay--socials"
    >
      <ul>
        <li>
          <a
            href="https://www.facebook.com/notmarkanade"
            target="_blank"
          >
            <img
              src="./assets/images/facebook.png"
              alt=""
            >
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/notmarkanade/"
            target="_blank"
          >
            <img
              src="./assets/images/instagram.png"
              alt=""
            >
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/channel/UChKuie3_PkdnhCTasr1xKiw?sub_confirmation=1"
            target="_blank"
          >
            <img
              src="./assets/images/youtube.png"
              alt=""
            >
          </a>
        </li>
        <li>
          <a
            href="https://vt.tiktok.com/ZSJx5bXTG/"
            target="_blank"
          >
            <img
              src="./assets/images/tik-tok.png"
              alt=""
            >
          </a>
        </li>
      </ul>
    </div>

    <div
      v-if="breakpoint.lg"
      class="home__overlay home__overlay--email"
    >
      <span>markmazoanade@gmail.com</span>
    </div>

    <base-scroll-icon class="home__scroll-icon" />

    <div class="home__container">
      <div class="home__introduction introduction">
        <div class="introduction__title mb-5">
          <p>Change your lens.</p>
          <p>Change your story.</p>
        </div>

        <div class="introduction__subtitle mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iusto nesciunt, autem eaque quae id obcaecati ullam ab quibusdam veniam quaerat architecto sapiente quia temporibus! Placeat expedita amet vero in!
        </div>

        <div class="introduction__actions">
          <button class="btn">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject } from 'vue'

export default {
  setup () {
    const breakpoint = inject('breakpoint')

    return {
      breakpoint
    }
  }
}
</script>

<style src="./assets/scss/HomeView.scss" lang="scss" scoped></style>