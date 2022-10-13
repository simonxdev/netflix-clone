// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRcuo1E_Oou3U4DNj3QGD7sB3HCNwF6fM",
    authDomain: "netflix-clone-e3af7.firebaseapp.com",
    projectId: "netflix-clone-e3af7",
    storageBucket: "netflix-clone-e3af7.appspot.com",
    messagingSenderId: "919752746093",
    appId: "1:919752746093:web:b41b9900cd855929894b64"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }