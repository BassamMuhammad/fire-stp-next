import { useEffect, useState } from "react"
import firebase from "./base"

// const [theCurrentUser, setTheCurrentUser] = useState()
let userEmail

// useEffect(() => {
//     return () => {
//         firebase.auth().onAuthStateChanged(user => {
//             if (user) {
//                 setTheCurrentUser(user)
//             }
//         })
//     }
// }, [])

userEmail = firebase.auth().currentUser.email

export { userEmail }