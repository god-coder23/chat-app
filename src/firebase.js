// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2p6C9Hh1aSmHOPoYsyDFg57TfELvUQA4",
  authDomain: "mailchat-c1c50.firebaseapp.com",
  projectId: "mailchat-c1c50",
  storageBucket: "mailchat-c1c50.firebasestorage.app",
  messagingSenderId: "1046264839982",
  appId: "1:1046264839982:web:0322d70aca9dd34bb9c4bf",
  measurementId: "G-R6FN9ZFZ1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app) 