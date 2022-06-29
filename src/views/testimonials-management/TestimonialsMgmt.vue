
<script setup>
import {
  truncate as truncateStr
} from '@/utils/string'

// composables
const {
  isFetching: testimonialsIsFetching,
  list: testimonialsList,
  del: testimonialsDelete,
  storeForm: testimonialsStoreForm,
  store: testimonialsStore,
  storeModal: testimonialStoreModal,
  showEditModal: testimonialShowEditModal,
  editModal: testimonialEditModal,
  editForm: testimonialEditForm,
  editSave: testimonialEditSave
} = useTestimonials()

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
          size="md"
          color="blue"
          outlined
          @click="testimonialStoreModal = true"
        >
          Add
        </base-button>
      </base-card-title>

      <base-card-body>
        <base-table-data
          :headers="testimonialHeaders"
          :is-loading="testimonialsIsFetching"
          :items="testimonialsList"
        >
          <template #action="{item}">
            <div class="flex justify-end">
              <base-button
                circle
                size="sm"
                color="transparent"
                outlined
              >
                <base-icon-edit
                  color="#22c55e"
                  @click="testimonialShowEditModal(item)"
                />
              </base-button>

              <base-button
                circle
                size="sm"
                color="transparent"
                outlined
              >
                <base-icon-trash
                  color="#f87171"
                  @click="testimonialsDelete(item.id)"
                />
              </base-button>
            </div>
          </template>

          <template #content="{item}">
            {{ truncateStr(item.content, 80) }}
          </template>
        </base-table-data>
      </base-card-body>
    </base-card>

    <base-modal v-model="testimonialStoreModal">
      <template #header>
        Create Testimonial
      </template>

      <base-input
        v-model="testimonialsStoreForm.name"
        label="Name"
        class="mb-1"
        placeholder="Name"
      />

      <base-input
        v-model="testimonialsStoreForm.position"
        label="Position"
        class="mb-1"
        placeholder="Position"
      />

      <base-textarea
        v-model="testimonialsStoreForm.content"
        label="Content"
        class="mb-1"
        placeholder="Content"
      />

      <template #footer>
        <base-button @click="testimonialsStore">
          Save
        </base-button>
      </template>
    </base-modal>

    <base-modal v-model="testimonialEditModal">
      <template #header>
        Create Testimonial
      </template>

      <base-input
        v-model="testimonialEditForm.name"
        label="Name"
        class="mb-1"
        placeholder="Name"
      />

      <base-input
        v-model="testimonialEditForm.position"
        label="Position"
        class="mb-1"
        placeholder="Position"
      />

      <base-textarea
        v-model="testimonialEditForm.content"
        label="Content"
        placeholder="Content"
      />

      <template #footer>
        <base-button @click="testimonialEditSave">
          Save
        </base-button>
      </template>
    </base-modal>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/scss/TestimonialsMgmt";
</style>