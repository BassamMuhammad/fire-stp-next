import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAKHxkn3kTT02ELtjV5eNU8B4d5N184F6U",
  authDomain: "eliascardona.firebaseapp.com",
  projectId: "eliascardona",
  storageBucket: "eliascardona.appspot.com",
  messagingSenderId: "633991934926",
  appId: "1:633991934926:web:ed87ff0a704a792e4b319f",
});
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const firebaseFunctions = getFunctions(firebaseApp);
