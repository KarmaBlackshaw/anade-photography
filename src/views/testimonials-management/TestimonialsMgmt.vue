
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
  storeState: testimonialStoreState,

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
            <div class="flex justify-center items-center gap-2">
              <base-icon-edit
                color="#22c55e"
                class="w-[15px] cursor-pointer"
                @click="testimonialShowEditModal(item)"
              />

              <base-icon-trash
                color="#f87171"
                class="w-[15px] cursor-pointer"
                @click="testimonialsDelete(item.id)"
              />
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
        <base-button
          :is-loading="testimonialStoreState.isLoading"
          outlined
          color="blue"
          @click="testimonialsStore"
        >
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
        <base-button
          outlined
          color="blue"
          @click="testimonialEditSave"
        >
          Save
        </base-button>
      </template>
    </base-modal>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/scss/TestimonialsMgmt";
</style>