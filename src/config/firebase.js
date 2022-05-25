// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAKDgLMFPOCdSj1Rje0WSmTq1zXtje2Fzk",
  authDomain: "anade-portfolio.firebaseapp.com",
  projectId: "anade-portfolio",
  storageBucket: "anade-portfolio.appspot.com",
  messagingSenderId: "282075497846",
  appId: "1:282075497846:web:8564acc49e5c20a15f6657"

}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const db = app.firestore()