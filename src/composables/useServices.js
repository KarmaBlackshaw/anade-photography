// libs
import Joi from 'joi'
import { readonly } from 'vue'

// composables
const swal = useSwal()

// store
const servicesStore = useServicesStore()

export default () => {
  /**
   * store
   */
  const {
    form: storeForm,
    reset: storeFormReset
  } = useForm({
    title: null,
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
      thumbnail: Joi.object()
        .instance(File)
    })

    const { isLoading } = useAsyncState(async () => {
      try {
        const data = await schema.validateAsync(storeForm)

        await servicesStore.store(data)

        fetch()

        storeModal.value = false

        storeFormReset()

        return swal.success({
          text: 'Service successfully saved!'
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    })

    storeState.isLoading = isLoading
  }

  /**
   * Fetch
   */
  const isFetching = ref(false)
  function fetch () {
    const { isLoading } = useAsyncState(servicesStore.fetch())

    isFetching.value = isLoading
  }

  /**
   * Delete
   */
  function del (id) {
    const onConfirm = async () => {
      try {
        await servicesStore.delete(id)

        fetch()
      } catch (error) {
        console.log(error)
        throw error
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
    name: null,
    position: null,
    content: null
  })

  const editModal = ref(false)

  function showEditModal (item) {
    editForm.id = item.id
    editForm.name = item.name
    editForm.position = item.position
    editForm.content = item.content

    editModal.value = true
  }

  function editSave () {
    const onConfirm = async () => {
      try {
        await servicesStore.update({
          id: editForm.id,
          content: editForm.content,
          name: editForm.name,
          position: editForm.position
        })

        fetch()

        editFormReset()

        editModal.value = false

        return swal.success({
          text: 'Testimonial successfully saved!'
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    }

    return swal.prompt({
      onConfirm
    })
  }

  onMounted(async () => {
    await fetch()
  })

  return {
    isFetching: readonly(isFetching),
    list: readonly(computed(() => servicesStore.list)),

    store,
    storeForm,
    storeFormReset,
    storeModal,
    storeState: readonly(storeState),

    showEditModal,
    editModal,
    editForm,
    editSave,

    del
  }
}