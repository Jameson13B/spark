import { initializeApp } from "firebase/app"
import {
  addDoc,
  collection as firestoreCollection,
  getFirestore,
} from "firebase/firestore"
import { onSnapshot, QuerySnapshot } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const handleSnapshot = (
  collection: string,
  callback: (snapshot: QuerySnapshot) => void
) => onSnapshot(firestoreCollection(db, collection), callback)

export const handleAddDoc = async (collection: string, data: object) =>
  await addDoc(firestoreCollection(db, collection), data)

export { db }
