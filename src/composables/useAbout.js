// libs
import Joi from 'joi'

// composables
const swal = useSwal()

// store
const aboutStore = useAboutStore()

export default () => {
  /**
   * store
   */
  const {
    form: storeForm,
    reset: storeFormReset
  } = useForm({
    title: null,
    content: null,
    thumbnail: ''
  })

  const storeModal = ref(false)
  const storeState = reactive({
    isLoading: false
  })

  function store () {
    const schema = Joi.object({
      title: Joi.string()
        .required(),
      content: Joi.string()
        .required(),
      thumbnail: Joi.object()
        .instance(File)
    })

    const { isLoading } = useAsyncState(async () => {
      try {
        const data = await schema.validateAsync(storeForm)

        await aboutStore.store(data)

        fetch()

        storeModal.value = false

        storeFormReset()

        return swal.success({
          text: 'Service successfully saved!'
        })
      } catch (error) {
        console.log(error)
        return swal.error()
      }
    })

    storeState.isLoading = isLoading
  }

  /**
   * Fetch
   */
  const fetchState = reactive({ isLoading: false })
  function fetch () {
    const { isLoading } = useAsyncState(aboutStore.fetch())

    fetchState.isLoading = isLoading
  }

  /**
   * Delete
   */
  function del (id) {
    const onConfirm = async () => {
      try {
        await aboutStore.delete(id)

        fetch()
      } catch (error) {
        console.log(error)
        return swal.error()
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
    title: null,
    content: null,
    thumbnail: null
  })

  const editModalState = ref(false)

  function showEditModal (item) {
    editForm.id = item.id
    editForm.title = item.title
    editForm.content = item.content

    editModalState.value = true
  }

  const editState = reactive({ isLoading: false })

  function editSave () {
    const onConfirm = () => {
      const { isLoading } = useAsyncState( async () => {
        try {
          await aboutStore.update({
            id: editForm.id,
            title: editForm.title,
            content: editForm.content,
            thumbnail: editForm.thumbnail
          })

          fetch()

          editFormReset()

          editModalState.value = false

          return swal.success()
        } catch (error) {
          console.log(error)
          return swal.error()
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

    list: readonly(computed(() => aboutStore.list)),

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