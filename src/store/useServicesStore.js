import supabase from '@/config/supabase'

import {
  random as randomString
} from '@/utils/string'

import {
  last as lastArray
} from '@/utils/array'

import _toLower from 'lodash/toLower'

export default defineStore('testimonials', {
  state: () => ({
    list: []
  }),

  actions: {
    async fetch () {
      try {
        // const dbRef = collection(db, "services")
        // const snapshot = await getDocs(query(dbRef))

        // this.$patch(state => {
        //   state.list = snapshot.docs.map(reslt => ({
        //     id: reslt.id,
        //     ...reslt.data()
        //   }))
        // })

        return this.list
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async store (data) {
      try {
        const extension = lastArray(_toLower(data.thumbnail.name).split('.'))
        const filename = `${randomString()}.${extension}`

        const {
          data: uploadData,
          error: uploadError
        } = await supabase
          .storage
          .from('images')
          .upload(filename, data.thumbnail, {
            cacheControl: '3600',
            upsert: false
          })

        if (uploadError) {
          throw uploadError
        }

        const { error } = await supabase
          .from('services')
          .insert([{
            title: data.title,
            thumbnail: uploadData.Key
          }])

        if (error) {
          throw error
        }
      } catch (error) {
        console.log(error)
        throw error
      }
    }

    // async delete (id) {
    //   try {
    //     const dbRef = doc(db, "services", id)

    //     await deleteDoc(dbRef)
    //   } catch (error) {
    //     console.log(error)
    //     throw error
    //   }
    // },

    // async update (item) {
    //   try {
    //     const dbRef = doc(db, "services", item.id)

    //     await updateDoc(dbRef, {
    //       content: item.content,
    //       name: item.name,
    //       position: item.position
    //     })
    //   } catch (error) {
    //     console.log(error)
    //     throw error
    //   }
    // }
  }
})

