// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-1c933.firebaseapp.com",
  projectId: "auth-app-1c933",
  storageBucket: "auth-app-1c933.appspot.com",
  messagingSenderId: "497680128398",
  appId: "1:497680128398:web:e0fc8a126a626af69dacdf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
