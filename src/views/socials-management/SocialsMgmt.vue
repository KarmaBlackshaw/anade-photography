<script setup>
import {
  truncate as truncateStr
} from '@/utils/string'

const {
  fetchState: socialsFetchState,
  fetch: socialsFetch,

  list: socialsList,

  storeModal: socialsStoreModal,
  storeForm: socialsStoreForm,
  store: socialsStore,
  storeState: socialsStoreState,

  showEditModal: socialsShowEditModal,
  editForm: socialsEditForm,
  editModalState: socialsEditModalState,
  editSave: socialsEditSave,
  editState: socialsEditState,

  del: socialsDelete
} = useSocials()

const socialsHeaders = [
  {
    title: 'Link',
    key: 'link'
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
        Socials Management

        <div class="flex gap-2">
          <base-button
            size="md"
            color="white"
            outlined
            :is-loading="socialsFetchState.isLoading"
            @click="socialsFetch"
          >
            Reload
          </base-button>
          <base-button
            size="md"
            color="blue"
            outlined
            @click="socialsStoreModal = true"
          >
            Add
          </base-button>
        </div>
      </base-card-title>

      <base-card-body>
        <base-table-data
          :headers="socialsHeaders"
          :is-loading="socialsFetchState.isLoading"
          :items="socialsList"
        >
          <template #thumbnail="{item}">
            <img
              :src="item.thumbnail_public_url"
              alt=""
              class="h-[70px] w-[70px] object-none rounded-sm"
            >
          </template>

          <template #action="{ item }">
            <div class="flex justify-center items-center gap-2">
              <base-icon-edit
                color="#22c55e"
                class="w-[15px] cursor-pointer"
                @click="socialsShowEditModal(item)"
              />

              <base-icon-trash
                color="#f87171"
                class="w-[15px] cursor-pointer"
                @click="socialsDelete(item.id, item.thumbnail)"
              />
            </div>
          </template>

          <template #content="{item}">
            {{ truncateStr(item.content, 80) }}
          </template>
        </base-table-data>
      </base-card-body>
    </base-card>

    <base-modal v-model="socialsStoreModal">
      <template #header>
        Add Social
      </template>

      <base-input
        v-model="socialsStoreForm.link"
        class="mb-1"
        label="Link"
        type="url"
        placeholder="Link"
      />

      <base-input-file
        v-model="socialsStoreForm.thumbnail"
        placeholder="Choose image"
        label="Image"
        accept=".svg"
        multiple
      />

      <template #footer>
        <base-button
          color="blue"
          :is-loading="socialsStoreState.isLoading"
          outlined
          @click="socialsStore"
        >
          Save
        </base-button>
      </template>
    </base-modal>

    <base-modal v-model="socialsEditModalState">
      <template #header>
        Edit Social
      </template>

      <base-input
        v-model="socialsEditForm.link"
        class="mb-1"
        label="Link"
        placeholder="Link"
        type="url"
      />

      <base-input-file
        v-model="socialsEditForm.thumbnail"
        placeholder="Choose image"
        label="Image"
        accept="image/*"
        multiple
      />

      <template #footer>
        <base-button
          color="blue"
          :is-loading="socialsEditState.isLoading"
          outlined
          @click="socialsEditSave"
        >
          Save
        </base-button>
      </template>
    </base-modal>
  </section>
</template>

<style lang="scss" scoped>
@import ".//SocialsMgmt";
</style>