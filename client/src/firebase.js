// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-project-3d1c6.firebaseapp.com",
  projectId: "estate-project-3d1c6",
  storageBucket: "estate-project-3d1c6.firebasestorage.app",
  messagingSenderId: "690957922841",
  appId: "1:690957922841:web:40e029cdbe250d7171f088"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);