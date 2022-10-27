// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuAtNVvnpTs-_5dZvUfVh0ERjiVgfShFk",
    authDomain: "notebook-9b7ae.firebaseapp.com",
    databaseURL: "https://notebook-9b7ae-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "notebook-9b7ae",
    storageBucket: "notebook-9b7ae.appspot.com",
    messagingSenderId: "176100102157",
    appId: "1:176100102157:web:7d6b6d22f8bc2597e64544",
    measurementId: "G-S1SFGLFTRP"
  };
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
    console.error('Firebase initialization error', err.message);
}
// Initialize Firebase
const fire = firebase;
const storage = firebase.storage();
export { storage, fire as default };