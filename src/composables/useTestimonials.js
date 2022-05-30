import { db } from '@/config/firebase'
import {
  collection,
  addDoc
} from "firebase/firestore"

export default () => {
  async function store ({
    content,
    name,
    position
  }) {

    const ref = collection(db, "testimonials")

    await addDoc(ref, {
      content,
      name,
      position
    })
  }

  return {
    store
  }
}