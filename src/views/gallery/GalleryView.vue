<template>
  <section class="gallery">
    <base-section-title>
      Gallery
    </base-section-title>

    <base-section-subtitle class="mb-10">
      Check out some of my captures
    </base-section-subtitle>

    <base-masonry
      :columns="columns"
      :images="images"
    />
  </section>
</template>

<script >
import { inject, computed } from 'vue'
import _chunk from 'lodash/chunk'

export default {
  setup () {
    const images = [
      'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/230164317_3640612116041947_4393676662453936367_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeENCrxz8MN4Cqe8uMAvFJTlYXJgoKlNFz5hcmCgqU0XPomZdA3xs26J4uyRIT7ED3cACPXHx2A0xCPBW1PWnCIe&_nc_ohc=_Gktk3JgK3cAX_t7-zm&tn=sbKPVzQU98VzVNs7&_nc_ht=scontent.fmnl15-1.fna&oh=00_AT-Fqcz2n07y9rdVlcUmlJQt5_JaXRYR3ND_lqLQTyatxQ&oe=626CFD39',
      'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/234281526_3640611736041985_4929678443994073386_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGZq2W2ckkxS6tTwYEwZX1gSdpth0eVRmBJ2m2HR5VGYLYuSny4MzWKoWU2vg4W7sg6bgtRepwgkOd3zevoD0wo&_nc_ohc=6g6RJvaHqi4AX8KYZQQ&_nc_ht=scontent.fmnl15-1.fna&oh=00_AT8R_Mq2HbNvwmN0gDxCUH0IThHkIqbo6o_-MPmv6XyT-g&oe=626C42B1',
      'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/217760219_3640631589373333_2171587078108080704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHrp2i5T74u3cdUR0l_02sc6vJQQEMbiwXq8lBAQxuLBSEaYVevUlRh-IpyihNO20clXZwi_8xowRhL_tgWj1VB&_nc_ohc=g6AxY5ml5i4AX_QUWL6&_nc_ht=scontent.fmnl15-1.fna&oh=00_AT8ObjV44yHvwGaTtcJVDu_gtLdtiAPKKcToN1AaHRH5ig&oe=626BA73A',
      'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/227930508_3640608532708972_200682062850345064_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG_U0hIXXMj4fAetd-alonSoewBHZFdLYWh7AEdkV0thby9jqemFLaA_1rt5kuLjyvfOr2vTYwAsQjKb3962ZH6&_nc_ohc=GBZ3mSWj3cIAX9mC3wt&_nc_ht=scontent.fmnl15-1.fna&oh=00_AT-4H5oJl2DnMPKSNsTR8qvynIBB519wCdDrcp-LTwIaLg&oe=626C4F70',
      'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/201827289_3640631082706717_8144085062281998488_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFBr2e2blbXdC8ZTpSDupRZJt6WaRulDZ0m3pZpG6UNnajQrRf2A2kXdqKjAQr5MdxVE-_lWFlUf5xBoPvMfslL&_nc_ohc=j5v7XvADG-wAX_Gjmnd&_nc_ht=scontent.fmnl15-1.fna&oh=00_AT-wOBNItksuzZFQPkA_nQuNeunMGYbsy2nTHftsHhrB2A&oe=626CB91E',
      'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/278863022_2346314528838770_5544979398422835779_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGbuOnz9oWTP6736Ict9zEhoKDmc5tng42goOZzm2eDjTydFmfMzI5dbJKDppM5_P_JVkmiUSWbxBL7h2v6h2rk&_nc_ohc=Ej6Gw0I0N04AX_aOwlZ&_nc_ht=scontent.fmnl15-1.fna&oh=00_AT-zc1-NQ6wY9fto01sHfdGDo6dQ7FGOWAH7vK8hdHfOWQ&oe=626CB0B3',
      'https://images.pexels.com/photos/5989068/pexels-photo-5989068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/11157456/pexels-photo-11157456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ]

    const breakpoint = inject('breakpoint')

    const columns = computed(() => {
      return breakpoint.value.md ? 3 : 2
    })

    const chunkedImages = computed(() => {
      return _chunk(images, Math.floor(images.length / columns.value))
    })

    return {
      breakpoint,
      columns,
      chunkedImages,
      images
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/GalleryView';
</style>