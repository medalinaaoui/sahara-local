// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_apiKEY,
  authDomain: "sahara-local.firebaseapp.com",
  projectId: "sahara-local",
  storageBucket: "sahara-local.appspot.com",
  messagingSenderId: "760849037398",
  appId: "1:760849037398:web:0aba312046bfe6b43ba3f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
