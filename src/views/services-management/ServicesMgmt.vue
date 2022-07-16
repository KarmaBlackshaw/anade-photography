<script setup>
import {
  truncate as truncateStr
} from '@/utils/string'

const {
  fetchState: servicesFetchState,
  fetch: servicesFetch,

  list: servicesList,

  storeModal: servicesStoreModal,
  storeForm: servicesStoreForm,
  store: servicesStore,
  storeState: servicesStoreState,

  showEditModal: servicesShowEditModal,
  editForm: servicesEditForm,
  editModalState: servicesEditModalState,
  editSave: servicesEditSave,
  editState: servicesEditState,

  del: servicesDelete
} = useServices()

const servicesHeaders = [
  {
    title: 'Title',
    key: 'title'
  },
  {
    title: 'Thumbnail',
    key: 'thumbnail'
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
        Services Management

        <div class="flex gap-2">
          <base-button
            size="md"
            color="white"
            outlined
            :is-loading="servicesFetchState.isLoading"
            @click="servicesFetch"
          >
            Reload
          </base-button>
          <base-button
            size="md"
            color="blue"
            outlined
            @click="servicesStoreModal = true"
          >
            Add
          </base-button>
        </div>
      </base-card-title>

      <base-card-body>
        <base-table-data
          :headers="servicesHeaders"
          :is-loading="servicesFetchState.isLoading"
          :items="servicesList"
        >
          <template #thumbnail="{item}">
            <img
              :src="item.thumbnail"
              alt=""
              class="h-[70px] w-[70px] object-none rounded-sm"
            >
          </template>

          <template #action="{ item }">
            <div class="flex justify-center items-center gap-2">
              <base-icon-edit
                color="#22c55e"
                class="w-[15px] cursor-pointer"
                @click="servicesShowEditModal(item)"
              />

              <base-icon-trash
                color="#f87171"
                class="w-[15px] cursor-pointer"
                @click="servicesDelete(item.id)"
              />
            </div>
          </template>

          <template #content="{item}">
            {{ truncateStr(item.content, 80) }}
          </template>
        </base-table-data>
      </base-card-body>
    </base-card>

    <base-modal v-model="servicesStoreModal">
      <template #header>
        Add Service
      </template>

      <base-input
        v-model="servicesStoreForm.title"
        class="mb-1"
        label="Title"
        placeholder="Title"
      />

      <base-input-file
        v-model="servicesStoreForm.thumbnail"
        placeholder="Choose image"
        label="Image"
        accept="image/*"
        multiple
      />

      <template #footer>
        <base-button
          color="blue"
          :is-loading="servicesStoreState.isLoading"
          outlined
          @click="servicesStore"
        >
          Save
        </base-button>
      </template>
    </base-modal>

    <base-modal v-model="servicesEditModalState">
      <template #header>
        Edit Service
      </template>

      <base-input
        v-model="servicesEditForm.title"
        class="mb-1"
        label="Title"
        placeholder="Title"
      />

      <base-input-file
        v-model="servicesEditForm.thumbnail"
        placeholder="Choose image"
        label="Image"
        accept="image/*"
        multiple
      />

      <template #footer>
        <base-button
          color="blue"
          :is-loading="servicesEditState.isLoading"
          outlined
          @click="servicesEditSave"
        >
          Save
        </base-button>
      </template>
    </base-modal>
  </section>
</template>

<style lang="scss" scoped>
@import "./ServicesMgmt";
</style>