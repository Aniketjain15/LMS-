import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
 authDomain: "drive-3d932.firebaseapp.com",
  projectId: "drive-3d932",
  storageBucket: "drive-3d932.firebasestorage.app",
  messagingSenderId: "721956915456",
  appId: "1:721956915456:web:ef546aedecbb41e75e0be5",
  measurementId: "G-Q1M61W4KLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}