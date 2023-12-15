import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6dk067QVLyvBaZXNRikr8KBaalz4Kf50",
    authDomain: "olx-clone-4340b.firebaseapp.com",
    projectId: "olx-clone-4340b",
    storageBucket: "olx-clone-4340b.appspot.com",
    messagingSenderId: "504274564820",
    appId: "1:504274564820:web:788791aa79ceaaf6766d41",
    measurementId: "G-1HMDSJN4NZ"
  };

export default firebase.initializeApp(firebaseConfig)