<template>
  <section
    id="about-management"
    class="about-management"
  >
    <base-card class="bg-transparent">
      <base-card-title>
        Gallery Management
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

    <base-modal v-model="modal">
      <template #header>
        header
      </template>
      asfasdf
      <template #footer>
        footer
      </template>
    </base-modal>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const truncateString = (string, maxLength) => {
      return string.length > maxLength
        ? `${string.substring(0, maxLength)}…`
        : string
    }

    const modal = ref(false)

    return {
      modal,

      truncateString
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/GalleryMgmt';
</style>