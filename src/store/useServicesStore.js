import supabase from '@/config/supabase'

export default defineStore('services', {
  state: () => ({
    list: []
  }),

  actions: {
    async fetch () {
      try {
        const { data } = await supabase
          .from('services')
          .select()

        console.log(data)

        this.$patch(state => {
          data.forEach(curr => {
            const { publicURL } = supabase
              .storage
              .from('images')
              .getPublicUrl(curr.thumbnail)

            curr.thumbnail = publicURL
          })

          state.list = data
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async store (data) {
      try {
        const filename = await (data.thumbnail && useUploadFile(data.thumbnail))

        const { error } = await supabase
          .from('services')
          .insert([{
            title: data.title,
            thumbnail: filename
          }])

        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async delete (id) {
      try {
        await supabase
          .from('services')
          .delete()
          .match({ id })
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async update (item) {
      try {
        const filename = await (() => {
          return item.thumbnail
            ? useUploadFile(item.thumbnail)
            : ''
        })()

        await supabase
          .from('services')
          .update({
            title: item.title,
            ...(filename && { thumbnail: filename })
          })
          .match({ id: item.id })

      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
})

