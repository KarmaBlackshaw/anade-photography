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
                {{ truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus dolores possimus eum consequatur impedit laborum odio voluptas ut, vel incidunt quas laudantium ratione beatae pariatur exercitationem explicabo culpa eos?', 30) }}
              </base-td>

              <base-td class="td__thumbnail">
                <img
                  src="https://images.pexels.com/photos/10334838/pexels-photo-10334838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                >
              </base-td>

              <base-td class="td__actions">
                <base-icon-edit class="actions__icon" />

                <base-icon-trash class="actions__icon" />
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
  setup () {
    function truncate (str, length, suffix = '...') {
      return str.length > length
        ?str.substring(0, length) + suffix
        : str
    }

    return {
      truncate
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/AboutMgmt';
</style>