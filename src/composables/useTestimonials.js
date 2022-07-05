// libs
import Joi from 'joi'
import { readonly } from 'vue'

// composables
const swal = useSwal()

// store
const testimonialStore = useTestimonialsStore()

export default () => {
  /**
   * store
   */
  const {
    form: storeForm,
    reset: storeFormReset
  } = useForm({
    name: null,
    position: null,
    content: null
  })

  const storeModal = ref(false)
  const storeState = reactive({
    isLoading: false
  })

  function store () {
    const schema = Joi.object({
      name: Joi.string()
        .required(),
      position: Joi.string()
        .optional(),
      content: Joi.string()
        .required()
    })

    const { isLoading } = useAsyncState(async () => {
      try {
        const data = await schema.validateAsync(storeForm)

        await testimonialStore.store(data)

        fetch()

        storeModal.value = false

        storeFormReset()

        return swal.success({
          text: 'Testimonial successfully saved!'
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
    const { isLoading } = useAsyncState(() => testimonialStore.fetch())

    fetchState.isLoading = isLoading
  }

  /**
   * Delete
   */
  function del (id) {
    const onConfirm = async () => {
      try {
        await testimonialStore.delete(id)

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
        await testimonialStore.update({
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
        return swal.error()
      }
    }

    return swal.prompt({
      onConfirm
    })
  }

  onMounted(() => {
    fetch()
  })

  return {
    fetchState: readonly(fetchState),
    fetch,

    list: readonly(computed(() => testimonialStore.list)),

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