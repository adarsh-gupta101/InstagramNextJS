import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCZd_xuvFXBhJppw5lflS9IT5-Eorukxcw",
  authDomain: "instagramwebclone.firebaseapp.com",
  projectId: "instagramwebclone",
  storageBucket: "instagramwebclone.appspot.com",
  messagingSenderId: "49514469246",
  appId: "1:49514469246:web:f22d3f5999d8757163452f",
  measurementId: "G-73MV9X5PMW"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
