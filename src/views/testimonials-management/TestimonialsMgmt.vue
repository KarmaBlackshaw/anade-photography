
<script setup>
import Joi from 'joi'

const {
  store: storeTestimonial
} = useTestimonials()

const swal = useSwal()

const truncateString = (string, maxLength) => {
  return string.length > maxLength
    ? `${string.substring(0, maxLength)}…`
    : string
}

const createModal = ref(true)

const testimonialData = reactive({
  name: null,
  position: null,
  content: null
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
    } = await schema.validate(testimonialData)

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

    swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Testimonial has been saved!'
    })

    createModal.value = false
  } catch (error) {
    console.log(error)
    throw error
  }
}

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
        <base-table class="about-td">
          <base-thead>
            <base-th>Title</base-th>

            <base-th>Content</base-th>

            <base-th class="td__thumbnail">
              Thumbnail
            </base-th>

            <base-th class="td__actions" />
          </base-thead>
          <base-tbody>
            <base-tr>
              <base-td>
                Lorem ipsum dolor sit
              </base-td>

              <base-td class="truncate">
                {{ truncateString('amet consectetur adipisicing elit. Aspernatur exercitationem officia, aut soluta expedita ipsam delectus nostrum sit porro excepturi esse ipsum dolorum sequi perspiciatis, explicabo id officiis. Voluptate, mollitia.', 30) }}
              </base-td>

              <base-td class="td__thumbnail">
                <img
                  src="https://images.pexels.com/photos/10334838/pexels-photo-10334838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                >
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
        </base-table>
      </base-card-body>
    </base-card>

    <base-modal v-model="createModal">
      <template #header>
        Create Testimonial
      </template>

      <base-input
        v-model="testimonialData.name"
        label="Name"
        placeholder="Name"
      />

      <base-input
        v-model="testimonialData.position"
        label="Position"
        placeholder="Position"
      />

      <base-textarea
        v-model="testimonialData.content"
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