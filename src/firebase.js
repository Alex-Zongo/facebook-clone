import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArsBhoYWmI2bGidPX4FHB55xN0Nl2QncU",
  authDomain: "facebook-clone-b1d31.firebaseapp.com",
  projectId: "facebook-clone-b1d31",
  storageBucket: "facebook-clone-b1d31.appspot.com",
  messagingSenderId: "202714039571",
  appId: "1:202714039571:web:63835547b54437746186e6",
  measurementId: "G-FFH9HBYVNB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
