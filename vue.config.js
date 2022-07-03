const { defineConfig } = require('@vue/cli-service')

const AutoImport = require('./src/config/unplugin-auto-import')
const VueComponents = require('./src/config/unplugin-vue-components')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      AutoImport,
      VueComponents
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
