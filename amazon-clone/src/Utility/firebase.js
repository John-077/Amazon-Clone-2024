import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU6Dba4Bg94DZy42lrWqyBpalCouB0oJg",
  authDomain: "clone-6dbde.firebaseapp.com",
  projectId: "clone-6dbde",
  storageBucket: "clone-6dbde.appspot.com",
  messagingSenderId: "368639961354",
  appId: "1:368639961354:web:a4dfcb8d30628aaee8f2f3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 