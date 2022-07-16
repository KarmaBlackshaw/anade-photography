import supabase from '@/config/supabase'

export default defineStore('socials', {
  state: () => ({
    list: []
  }),

  actions: {
    async fetch () {
      try {
        const { data } = await supabase
          .from('socials')
          .select()

        this.$patch(state => {
          data.forEach(curr => {
            const { publicURL } = supabase
              .storage
              .from('images')
              .getPublicUrl(curr.thumbnail)

            curr.thumbnail_public_url = publicURL
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
          .from('socials')
          .insert([{
            link: data.link,
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

    async delete (data) {
      try {
        // const { erro: deleteRowError } = await supabase
        //   .from('socials')
        //   .delete()
        //   .match({ id: data.id })

        // if (deleteRowError) {
        //   throw deleteRowError
        // }

        const { error: deleteFileError } = await supabase
          .storage
          .from('images')
          .remove([data.filename])

        console.log(data.filename)

        if (deleteFileError) {
          throw deleteFileError
        }

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
          .from('socials')
          .update({
            link: item.link,
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

