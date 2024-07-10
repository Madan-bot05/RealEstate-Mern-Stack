// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern2-f5566.firebaseapp.com",
  projectId: "mern2-f5566",
  storageBucket: "mern2-f5566.appspot.com",
  messagingSenderId: "925063846726",
  appId: "1:925063846726:web:3e5f2254d7a2435d56e347"
};

// Initialize Firebase
export const app= initializeApp(firebaseConfig);