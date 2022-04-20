import { onMounted, reactive, computed } from 'vue'

export default () => {
  const state = reactive({
    width: 0
  })

  const breakpoint = computed(() => {
    const width = state.width

    const breakpoints = {}
    const _isMin = a => width >= a

    const screenSmMin = 640

    const screenMdMin = 768

    const screenLgMin = 1024

    const screenXlMin = 1280

    const define = props => ({
      enumerable: false,
      configurable: false,
      ...props
    })

    Object.defineProperty(breakpoints, 'sm', define({ get: () => _isMin(screenSmMin) }))
    Object.defineProperty(breakpoints, 'md', define({ get: () => _isMin(screenMdMin) }))
    Object.defineProperty(breakpoints, 'lg', define({ get: () => _isMin(screenLgMin) }))
    Object.defineProperty(breakpoints, 'xl', define({ get: () => _isMin(screenXlMin) }))

    Object.defineProperty(breakpoints, 'name', define({
      get: () => ['sm', 'md', 'lg', 'xl'].find(curr => breakpoints[curr]) || 'xs'
    }))

    return breakpoints
  })

  onMounted(() => {
    state.width = window.innerWidth
    window.onresize = () => {
      state.width = window.innerWidth
    }
  })

  return {
    breakpoint
  }
}
