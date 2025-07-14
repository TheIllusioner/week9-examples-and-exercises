// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCn7I9l4ORxSQWMqemp8cyGF7mJeBCHHlc",
  authDomain: "technica-fellows-s25.firebaseapp.com",
  projectId: "technica-fellows-s25",
  storageBucket: "technica-fellows-s25.firebasestorage.app",
  messagingSenderId: "759901842353",
  appId: "1:759901842353:web:9bb02bcab8529888d7ab90",
  measurementId: "G-2E6W0QF74R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);