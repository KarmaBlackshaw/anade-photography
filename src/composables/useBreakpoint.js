import { reactive } from 'vue'
import { useEventListener } from '@vueuse/core'

// libs
import _debounce from 'lodash/debounce'

export default () => {
  const state = reactive({
    width: 0
  })

  const sizes = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  }

  const breakpoint = reactive({
    sm: false,
    md: false,
    lg: false,
    xl: false
  })

  /**
   * Handle resize
   */
  const resizeCallback = _debounce(() => {
    const width = window.innerWidth

    state.width = width

    for (const size in sizes) {
      const breakpointWidth = sizes[size]

      breakpoint[size] = width >= breakpointWidth
    }
  }, 10)

  resizeCallback()
  useEventListener(window, 'resize', resizeCallback)

  return {
    breakpoint
  }
}