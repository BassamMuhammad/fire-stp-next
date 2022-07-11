import Firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

let firebase
if (!Firebase.apps.length) {
  firebase = Firebase.initializeApp({
    apiKey: "AIzaSyAKHxkn3kTT02ELtjV5eNU8B4d5N184F6U",
    authDomain: "eliascardona.firebaseapp.com",
    projectId: "eliascardona",
    storageBucket: "eliascardona.appspot.com",
    messagingSenderId: "633991934926",
    appId: "1:633991934926:web:ed87ff0a704a792e4b319f",
  })
} else {
  firebase = Firebase.app()
}

export default firebase