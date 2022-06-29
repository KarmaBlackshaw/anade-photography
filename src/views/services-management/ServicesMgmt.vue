<script setup>
import {
  truncate as truncateStr
} from '@/utils/string'

const {
  storeModal: servicesStoreModal,
  storeForm: servicesStoreForm,
  store: servicesStore
} = useServices()

const modal = ref(true)

</script>

<template>
  <section
    id="about-management"
    class="about-management"
  >
    <base-card class="bg-transparent">
      <base-card-title class="flex justify-between">
        Services Management

        <base-button
          size="md"
          color="blue"
          outlined
          @click="servicesStoreModal = true"
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
                {{ truncateStr('amet consectetur adipisicing elit. Aspernatur exercitationem officia, aut soluta expedita ipsam delectus nostrum sit porro excepturi esse ipsum dolorum sequi perspiciatis, explicabo id officiis. Voluptate, mollitia.', 30) }}
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

    <base-modal v-model="servicesStoreModal">
      <template #header>
        header
      </template>

      <base-input
        v-model="servicesStoreForm.title"
        class="mb-1"
        label="Title"
        placeholder="Title"
      />

      <base-textarea
        v-model="servicesStoreForm.content"
        label="Content"
        class="mb-1"
        placeholder="Content"
      />

      <base-input
        v-model="servicesStoreForm.thumbnail"
        type="file"
        placeholder="Choose image"
        label="Image"
        accept="image/*"
        multiple
      />

      <template #footer>
        <base-button @click="servicesStore">
          Save
        </base-button>
      </template>
    </base-modal>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/scss/ServicesMgmt";
</style>