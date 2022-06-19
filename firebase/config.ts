// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB16wNSZZx-p6JxGKpji-8dKzkQsazt-J0",
  authDomain: "login-form-c10c0.firebaseapp.com",
  databaseURL: "https://login-form-c10c0-default-rtdb.firebaseio.com",
  projectId: "login-form-c10c0",
  storageBucket: "login-form-c10c0.appspot.com",
  messagingSenderId: "733775886093",
  appId: "1:733775886093:web:a5d052b7e147c104266244",
  measurementId: "G-X1PFFPLJSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
