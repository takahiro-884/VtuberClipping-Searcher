// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0980VLg2XqIY_LL5GTtTHtDeVXRPvMsA",
  authDomain: "vtuber-search-c673d.firebaseapp.com",
  projectId: "vtuber-search-c673d",
  storageBucket: "vtuber-search-c673d.firebasestorage.app",
  messagingSenderId: "680629639579",
  appId: "1:680629639579:web:458f332eb6c9a9c31e293e"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth= getAuth(firebase);
export default firebase
