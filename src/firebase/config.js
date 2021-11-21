import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBDmKm_WBAdap2fFIRNeVkBWCjCBIqwxFw",
    authDomain: "vuejs-firebase-d24d6.firebaseapp.com",
    projectId: "vuejs-firebase-d24d6",
    storageBucket: "vuejs-firebase-d24d6.appspot.com",
    messagingSenderId: "3632533542",
    appId: "1:3632533542:web:fb911b07d5b57f5041d6e7"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db}