import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJbcl3gM370hKcg6ZcthlaXdghS66roMQ",
  authDomain: "keep-clone-cf1b2.firebaseapp.com",
  projectId: "keep-clone-cf1b2",
  storageBucket: "keep-clone-cf1b2.appspot.com",
  messagingSenderId: "278967673818",
  appId: "1:278967673818:web:c36da2a825ff3f40e296e3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth , provider , db}