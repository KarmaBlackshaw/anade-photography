// config
import { db } from '@/config/firebase'

// libs
import {
  collection,
  addDoc,
  query,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore"

export default () => {
  return {
    async store ({
      content,
      name,
      position
    }) {
      try {
        const dbRef = collection(db, "testimonials")

        await addDoc(dbRef, {
          content,
          name,
          position,
          created_at: serverTimestamp()
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    get () {
      return statusWrapper(async () => {
        const dbRef = collection(db, "testimonials")
        const snapshot = await getDocs(query(dbRef))

        return snapshot.docs.map(reslt => ({
          id: reslt.id,
          ...reslt.data()
        }))
      })
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
}