// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5CWmMdyJxL1v8lty29tCXYNdxKPWHqE4",
  authDomain: "chatmail-7d09f.firebaseapp.com",
  projectId: "chatmail-7d09f",
  storageBucket: "chatmail-7d09f.firebasestorage.app",
  messagingSenderId: "724317868188",
  appId: "1:724317868188:web:88fdd3fa3c13ff39af5d59",
  measurementId: "G-VZR89JGX7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app) 
export const rtdb = getDatabase(app)