import { db } from '@/config/firebase'
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
  const ref = collection(db, "testimonials")

  return {
    async store ({
      content,
      name,
      position
    }) {
      try {
        await addDoc(ref, {
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
      const q = query(ref)

      const results = ref([])

      getDocs(q)
        .then(snapshot => {
          snapshot.forEach(result => {
            results.value.push({
              id: result.id,
              ...result.data()
            })
          })
        })

      return results
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