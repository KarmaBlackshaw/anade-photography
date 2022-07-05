<script setup>
import {
  truncate as truncateStr
} from '@/utils/string'

const {
  fetchState: aboutFetchState,
  fetch: aboutFetch,

  list: aboutList,

  storeModal: aboutStoreModal,
  storeForm: aboutStoreForm,
  store: aboutStore,
  storeState: aboutStoreState,

  showEditModal: aboutShowEditModal,
  editForm: aboutEditForm,
  editModalState: aboutEditModalState,
  editSave: aboutEditSave,
  editState: aboutEditState,

  del: servicesDelete
} = useAbout()

const servicesHeaders = [
  {
    title: 'Title',
    key: 'title'
  },
  {
    title: 'Content',
    key: 'content'
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
        About Management

        <div class="flex gap-2">
          <base-button
            size="md"
            color="white"
            outlined
            :is-loading="aboutFetchState.isLoading"
            @click="aboutFetch"
          >
            Reload
          </base-button>

          <base-button
            size="md"
            color="blue"
            outlined
            @click="aboutStoreModal = true"
          >
            Add
          </base-button>
        </div>
      </base-card-title>

      <base-card-body>
        <base-table-data
          :headers="servicesHeaders"
          :is-loading="aboutFetchState.isLoading"
          :items="aboutList"
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
                @click="aboutShowEditModal(item)"
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

    <base-modal v-model="aboutStoreModal">
      <template #header>
        Add About
      </template>

      <base-input
        v-model="aboutStoreForm.title"
        class="mb-1"
        label="Title"
        placeholder="Title"
      />

      <base-textarea
        v-model="aboutStoreForm.content"
        class="mb-1"
        label="Content"
        placeholder="Content"
      />

      <base-input-file
        v-model="aboutStoreForm.thumbnail"
        placeholder="Choose image"
        label="Image"
        accept="image/*"
        multiple
      />

      <template #footer>
        <base-button
          color="blue"
          :is-loading="aboutStoreState.isLoading"
          outlined
          @click="aboutStore"
        >
          Save
        </base-button>
      </template>
    </base-modal>

    <base-modal v-model="aboutEditModalState">
      <template #header>
        Edit Service
      </template>

      <base-input
        v-model="aboutEditForm.title"
        class="mb-1"
        label="Title"
        placeholder="Title"
      />

      <base-textarea
        v-model="aboutEditForm.content"
        class="mb-1"
        label="Content"
        placeholder="Content"
      />

      <base-input-file
        v-model="aboutEditForm.thumbnail"
        placeholder="Choose image"
        label="Image"
        accept="image/*"
        multiple
      />

      <template #footer>
        <base-button
          color="blue"
          :is-loading="aboutEditState.isLoading"
          outlined
          @click="aboutEditSave"
        >
          Save
        </base-button>
      </template>
    </base-modal>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/scss/AboutMgmt";
</style>