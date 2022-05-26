<template>
  <section
    id="about-management"
    class="about-management"
  >
    <base-card class="bg-transparent">
      <base-card-title>
        About Management
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
                amet consectetur adipisicing elit. Aspernatur exercitationem officia, aut soluta expedita ipsam delectus nostrum sit porro excepturi esse ipsum dolorum sequi perspiciatis, explicabo id officiis. Voluptate, mollitia.
              </base-td>
              <base-td class="td__thumbnail">
                <img
                  src="https://images.pexels.com/photos/10334838/pexels-photo-10334838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                >
              </base-td>
              <base-td class="td__actions">
                <img
                  src="@/assets/images/edit.svg"
                  alt=""
                >
                <img
                  src="@/assets/images/trash-2.svg"
                  alt=""
                >
              </base-td>
            </base-tr>
          </base-tbody>
        </base-table>
      </base-card-body>
    </base-card>
  </section>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
@import './assets/scss/AboutMgmt';
</style>