// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzz3qilzZ5mPInOZLu5WGv25RTM9DV7ME",
  authDomain: "cardwiz-cf42c.firebaseapp.com",
  projectId: "cardwiz-cf42c",
  storageBucket: "cardwiz-cf42c.appspot.com",
  messagingSenderId: "826647321652",
  appId: "1:826647321652:web:1cc5f082eb7b2229433e61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };