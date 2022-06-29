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

  async function store () {
    const schema = Joi.object({
      name: Joi.string()
        .required(),
      position: Joi.string()
        .optional(),
      content: Joi.string()
        .required()
    })

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
      throw error
    }
  }

  /**
   * Fetch
   */
  const isFetching = ref(false)
  function fetch () {
    const { isLoading } = useAsyncState(() => testimonialStore.fetch())

    isFetching.value = isLoading
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
    list: readonly(computed(() => testimonialStore.list)),

    store,
    storeForm,
    storeFormReset,
    storeModal,

    showEditModal,
    editModal,
    editForm,
    editSave,

    del
  }
}