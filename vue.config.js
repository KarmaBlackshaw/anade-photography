const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
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
          './src/composables'
        ]
      }),
      require('unplugin-vue-components/webpack')({
        dirs: [
          './src/components'
        ],
        dts: false,
        directives: false
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
