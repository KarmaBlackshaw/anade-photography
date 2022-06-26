import {
  collection,
  addDoc,
  query,
  getDocs,
  deleteDoc,
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
        const dbRef = collection(db, "testimonials")
        const snapshot = await getDocs(query(dbRef))

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

        const dbRef = collection(db, "testimonials")

        await addDoc(dbRef, {
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
    }
  }
})

