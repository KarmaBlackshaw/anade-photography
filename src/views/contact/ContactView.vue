<template>
  <section class="contact-view">
    <base-section-title>
      Get In Touch
    </base-section-title>

    <base-section-subtitle class="mb-10">
      Don't worry, I don't bite.
    </base-section-subtitle>

    <base-section-body class="contact__content mb-10">
      Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, or interested in working together, I'll try my best to get back to you!
    </base-section-body>

    <base-section-body class="contact__btn-container mb-20">
      <base-button
        outlined
        color="white"
        size-lg
        @click="test"
      >
        Say Hello
      </base-button>
    </base-section-body>

    <base-section-body class="contact__socials-container">
      <a
        v-for="(social, socialKey) in socials"
        :key="socialKey"
        class="flex justify-center mb-5"
        target="_blank"
        :href="social.url"
      >
        <img
          :src="require(`./assets/images/${social.img}`)"
          alt=""
          class="socials__img "
        >
      </a>
    </base-section-body>
  </section>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: "ContactView",

  setup () {
    const socials = reactive([
      {
        url: 'https://discord.gg/5ah7yqVS8N',
        img: 'discord.png'
      },
      {
        url: 'http://www.facebook.com/notmarkanade',
        img: 'facebook.png'
      },
      {
        url: 'http://www.instagram.com/notmarkanade',
        img: 'instagram.png'
      },
      {
        url: 'https://vt.tiktok.com/ZSJx5bXTG/',
        img: 'tik-tok.png'
      },
      {
        url: 'https://youtube.com/channel/UChKuie3_PkdnhCTasr1xKiw?sub_confirmation=1',
        img: 'youtube.png'
      },
      {
        url: 'https://www.behance.net/markmazoanade',
        img: 'behance.png'
      },
      {
        url: 'https://story.snapchat.com/s/markanade',
        img: 'twitter.png'
      }
    ])

    function test () {
      const a = document.createElement('a')

      document.body.appendChild(a)

      a.setAttribute('href','mailto:markmazoanade@gmail.com')
      a.setAttribute("type", "hidden")
      a.setAttribute("target", "_blank")

      a.click()
    }

    return {
      test,
      socials
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/ContactView.scss';
</style>