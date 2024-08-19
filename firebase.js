// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOKsPPiGhllViQq0f98L6Zk-JVx540Qn4",
  authDomain: "flashcard-saas-7c780.firebaseapp.com",
  projectId: "flashcard-saas-7c780",
  storageBucket: "flashcard-saas-7c780.appspot.com",
  messagingSenderId: "156459147296",
  appId: "1:156459147296:web:659a60c8dba6a1f8469c45",
  measurementId: "G-QPL0Q9L1YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}