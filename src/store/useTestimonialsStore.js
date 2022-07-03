import supabase from '@/config/supabase'

export default defineStore('testimonials', {
  state: () => ({
    list: []
  }),

  actions: {
    async fetch () {
      try {
        const { data } = await supabase
          .from('testimonials')
          .select()

        this.$patch(state => {
          state.list = data
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async store (data) {
      try {
        const { error } = await supabase
          .from('testimonials')
          .insert([{
            name: data.name,
            position: data.position,
            content: data.content
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
          .from('testimonials')
          .delete()
          .match({ id })
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async update (item) {
      try {
        await supabase
          .from('testimonials')
          .update({
            content: item.content,
            name: item.name,
            position: item.position
          })
          .match({ id: item.id })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
})

