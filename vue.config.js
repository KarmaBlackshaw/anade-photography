const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

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
