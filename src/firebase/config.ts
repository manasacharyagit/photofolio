// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_coVOO79T_kdioYJNNyks8JfMSd6Ajqo",
  authDomain: "photofolio-476ec.firebaseapp.com",
  projectId: "photofolio-476ec",
  storageBucket: "photofolio-476ec.appspot.com",
  messagingSenderId: "540471727736",
  appId: "1:540471727736:web:b34dcc74cda41350cdff8d",
  measurementId: "G-1QG20BXVVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app)
export {auth, storage, db}