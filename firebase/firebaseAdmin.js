import * as admin from 'firebase-admin'

let adminFirebase

if (!admin.getApps().length) {
    adminFirebase = admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: "https://eliascardona.firebaseio.com"
    })
}

export default adminFirebase