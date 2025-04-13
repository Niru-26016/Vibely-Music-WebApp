



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//! Authentication services from firebase
import { getAuth } from "firebase/auth";

//! Authentication services from firebase
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl5Lw1hUUUwtIOwF4w1ITR0bju70RDpic",
  authDomain: "vibely-61968.firebaseapp.com",
  projectId: "vibely-61968",
  storageBucket: "vibely-61968.firebasestorage.app",
  messagingSenderId: "6292807594",
  appId: "1:6292807594:web:85caf8f1cec5e82a1015d3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export let __AUTH=getAuth(firebaseApp);
export let __DB= getFirestore(firebaseApp)

export default firebaseApp