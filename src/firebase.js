import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuHrDFzdk5r4e0SsuBwNTFFSjoqXzZrPY",
  authDomain: "react-blogs-app-edcc9.firebaseapp.com",
  projectId: "react-blogs-app-edcc9",
  storageBucket: "react-blogs-app-edcc9.appspot.com",
  messagingSenderId: "493290048885",
  appId: "1:493290048885:web:3648c4d97e69e95dec573c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };