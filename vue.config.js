const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({
        dts: false,
        eslintrc: {
          enabled: true
        },
        imports: [
          '@vueuse/core',
          'vue',
          'vue-router'
        ],
        dirs: [
          './provide',
          './provide',
          './src/composables',
          './src/components'
        ]
      })
    ]
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/mixins/_breakpoint.scss";
          @import "@/assets/scss/mixins/_theme.scss";
        `
      }
    }
  }
})
