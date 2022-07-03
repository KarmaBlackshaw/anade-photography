const VueComponents = require('unplugin-vue-components/webpack')

module.exports = VueComponents({
  dirs: [
    './src/components'
  ],
  dts: false,
  directives: false
})