
<script setup>
// libs
import Joi from 'joi'

// helpers
const truncateString = (string, maxLength) => {
  return string.length > maxLength
    ? `${string.substring(0, maxLength)}…`
    : string
}

// composables
const {
  store: storeTestimonial,
  get: getTestimonials
} = useTestimonials()

const swal = useSwal()

const testimonials = reactive({
  isLoading: true,
  data: []
})

function refetchTestimonials () {
  const {
    isLoading: testimonialsIsLoading,
    data: testimonialsData
  } = getTestimonials()

  testimonials.isLoading = testimonialsIsLoading
  testimonials.data = testimonialsData
}

refetchTestimonials()

const createModal = ref(false)

const testimonialForm = reactive({
  name: null,
  position: null,
  content: null,
  clear () {
    this.name = null
    this.position = null
    this.content = null
  }
})

async function handleClickSaveTestimonial () {
  const schema = Joi.object({
    name: Joi.string()
      .required(),
    position: Joi.string()
      .optional(),
    content: Joi.string()
      .required()
  })

  try {
    const {
      value,
      error: validationError
    } = await schema.validate({
      name: testimonialForm.name,
      position: testimonialForm.position,
      content: testimonialForm.content
    })

    if (validationError) {
      return swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: validationError.message
      })
    }

    await storeTestimonial({
      name: value.name,
      position: value.position,
      content: value.content
    })

    refetchTestimonials()

    swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Testimonial has been saved!'
    })

    createModal.value = false
    testimonialForm.clear()
  } catch (error) {
    console.log(error)
    throw error
  }
}

const testimonialHeaders = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Position',
    key: 'position'
  },
  {
    title: 'Content',
    key: 'content'
  },
  {
    title: '',
    key: 'action'
  }
]

</script>

<template>
  <section
    id="about-management"
    class="about-management"
  >
    <base-card class="bg-transparent">
      <base-card-title class="flex justify-between">
        Testimonials Management

        <base-button
          size="sm"
          @click="createModal = true"
        >
          Add
        </base-button>
      </base-card-title>

      <base-card-body>
        <base-table-data
          :headers="testimonialHeaders"
          :is-loading="testimonials.isLoading"
          :items="testimonials.data"
        >
          asd
        </base-table-data>
        <!-- <base-table class="about-td">
          <base-thead>
            <base-th>Name</base-th>

            <base-th>Position</base-th>

            <base-th class="td__thumbnail">
              Content
            </base-th>

            <base-th class="td__actions" />
          </base-thead>

          <base-tbody>
            <base-tr
              v-for="(testimonial, testimonialKey) in testimonials.data"
              :key="testimonialKey"
            >
              <base-td>
                {{ testimonial.name }}
              </base-td>

              <base-td>
                {{ testimonial.position }}
              </base-td>

              <base-td>
                {{ testimonial.content }}
              </base-td>

              <base-td
                class="td__actions"
                width="20px"
              >
                <base-icon-edit
                  class="actions__icon"
                  @click="modal = !modal"
                />

                <base-icon-trash class="actions__icon" />
              </base-td>
            </base-tr>
          </base-tbody>
        </base-table> -->
      </base-card-body>
    </base-card>

    <base-modal v-model="createModal">
      <template #header>
        Create Testimonial
      </template>

      <base-input
        v-model="testimonialForm.name"
        label="Name"
        placeholder="Name"
      />

      <base-input
        v-model="testimonialForm.position"
        label="Position"
        placeholder="Position"
      />

      <base-textarea
        v-model="testimonialForm.content"
        label="Content"
        placeholder="Content"
      />

      <template #footer>
        <base-button @click="handleClickSaveTestimonial">
          Save
        </base-button>
      </template>
    </base-modal>
  </section>
</template>

<style lang="scss" scoped>
@import './assets/scss/TestimonialsMgmt';
</style>