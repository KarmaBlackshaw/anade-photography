<script setup>
import {
  truncate as truncateStr
} from '@/utils/string'

const {
  storeModal: servicesStoreModal,
  storeForm: servicesStoreForm,
  store: servicesStore,
  storeState: servicesStoreState
} = useServices()

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
                <div class="flex justify-center">
                  <img
                    src="https://images.pexels.com/photos/10334838/pexels-photo-10334838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  >
                </div>
              </base-td>

              <base-td
                class="td__actions"
                width="20px"
              >
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
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/scss/ServicesMgmt";
</style>