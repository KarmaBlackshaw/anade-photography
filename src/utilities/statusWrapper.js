export default function statusWrapper (fn) {
  const data = ref(null)
  const isLoading = ref(true)

  ;(async () => {
    data.value = await fn()
    isLoading.value = false
  })()

  return {
    data,
    isLoading
  }
}