import { initializeApp } from 'firebase/app'
import { getFirestore, doc, updateDoc, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

export const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

interface Framework {
  name: string
  description: string
  url: string
}

export function createFramework(framework: Partial<Framework>) {
  return addDoc(frameworks(), framework)
}

export function frameworkById(id: string) {
  return doc(db, 'frameworks', id)
}

export function updateFramework(id: string, data: Partial<Framework>) {
  updateDoc(frameworkById(id), data)
}

export function frameworks() {
  return collection(db, 'frameworks')
}
