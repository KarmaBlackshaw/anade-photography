const AutoImport = require('unplugin-auto-import/webpack')

module.exports = AutoImport({
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
    'pinia',
    'vue-router'
  ],
  dirs: [
    './src/composables',
    './src/store'
  ]
})