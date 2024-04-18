// Firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'; // Import storage module
import 'firebase/compat/firestore'; // Import firestore module

const firebaseConfig = {
  // Your Firebase config here
  
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const storage = firebase.storage();
const firestore = firebase.firestore();

export { auth, storage, firestore };
export default firebase;
