import {
  collection,
  addDoc,
  query,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp
} from "firebase/firestore"

import { db } from '@/config/firebase'

export default defineStore('testimonials', {
  state: () => ({
    list: []
  }),

  actions: {
    async fetch () {
      try {
        const ref = collection(db, "testimonials")
        const snapshot = await getDocs(query(ref))

        this.$patch(state => {
          state.list = snapshot.docs.map(reslt => ({
            id: reslt.id,
            ...reslt.data()
          }))
        })

        return this.list
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async store (data) {
      try {

        const ref = collection(db, "testimonials")

        await addDoc(ref, {
          content: data.content,
          name: data.name,
          position: data.position,
          created_at: serverTimestamp()
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async delete (id) {
      try {
        await deleteDoc(doc(db, "testimonials", id))
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async update (item) {
      try {
        const ref = doc(db, "testimonials", item.id)

        await updateDoc(ref, {
          content: item.content,
          name: item.name,
          position: item.position
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
})

