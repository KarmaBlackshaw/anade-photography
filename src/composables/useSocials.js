// libs
import Joi from 'joi'
import { readonly } from 'vue'

// composables
const swal = useSwal()

// store
const socialStore = useSocialsStore()

export default () => {
  /**
   * store
   */
  const {
    form: storeForm,
    reset: storeFormReset
  } = useForm({
    link: null,
    thumbnail: ''
  })

  const storeModal = ref(false)
  const storeState = reactive({
    isLoading: false
  })

  function store () {
    const schema = Joi.object({
      link: Joi.string()
        .uri()
        .required(),
      thumbnail: Joi.object()
        .instance(File)
    })

    const { isLoading } = useAsyncState(async () => {
      try {
        const data = await schema.validateAsync(storeForm)

        await socialStore.store(data)

        fetch()

        storeModal.value = false

        storeFormReset()

        return swal.success()
      } catch (error) {
        return swal.error({
          text: error.message || ''
        })
      }
    })

    storeState.isLoading = isLoading
  }

  /**
   * Fetch
   */
  const fetchState = reactive({ isLoading: false })
  function fetch () {
    const { isLoading } = useAsyncState(socialStore.fetch())

    fetchState.isLoading = isLoading
  }

  /**
   * Delete
   */
  function del (id, filename) {
    const onConfirm = async () => {
      try {
        await socialStore.delete({
          id,
          filename
        })

        fetch()
      } catch (error) {
        console.log(error)
        return swal.error({
          text: error.message || ''
        })
      }
    }

    return swal.prompt({
      onConfirm
    })
  }

  /**
   * edit
   */
  const {
    form: editForm,
    reset: editFormReset
  } = useForm({
    id: null,
    link: null,
    thumbnail: null
  })

  const editModalState = ref(false)

  function showEditModal (item) {
    editForm.id = item.id
    editForm.link = item.link

    editModalState.value = true
  }

  const editState = reactive({ isLoading: false })

  function editSave () {
    const onConfirm = () => {

      const { isLoading } = useAsyncState(async () => {
        const schema = Joi.object({
          id: Joi.number()
            .required(),
          link: Joi.string()
            .uri()
            .required(),
          thumbnail: Joi.object()
            .instance(File)
        })

        try {
          const data = await schema.validateAsync(editForm)

          await socialStore.update({
            id: data.id,
            link: data.link,
            thumbnail: data.thumbnail
          })

          fetch()

          editFormReset()

          editModalState.value = false

          return swal.success()
        } catch (error) {
          console.log(error)
          return swal.error({
            text: error.message || ''
          })
        }
      })

      editState.isLoading = isLoading
    }

    return swal.prompt({
      onConfirm
    })
  }

  onMounted(async () => {
    await fetch()
  })

  return {
    fetchState: readonly(fetchState),
    fetch,

    list: readonly(computed(() => socialStore.list)),

    store,
    storeForm,
    storeFormReset,
    storeModal,
    storeState: readonly(storeState),

    showEditModal,
    editModalState,
    editForm,
    editSave,
    editState,

    del
  }
}