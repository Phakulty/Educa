// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXFxvFdFmksboszyvlYB_Sq7PukZJmP1w",
  authDomain: "e-learning-64a24.firebaseapp.com",
  projectId: "e-learning-64a24",
  storageBucket: "e-learning-64a24.firebasestorage.app",
  messagingSenderId: "741410288649",
  appId: "1:741410288649:web:12ac171dd8f8b95a3bb4d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app 
export const db = getFirestore(app)
