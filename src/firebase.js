import { initializeApp } from "firebase/app";
import { collection, getFirestore, orderBy, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2OQIMd_c7tOfOBD70OXUtOdwBJeFaPyM",
  authDomain: "twitter-redesign-5e727.firebaseapp.com",
  projectId: "twitter-redesign-5e727",
  storageBucket: "twitter-redesign-5e727.appspot.com",
  messagingSenderId: "739046827215",
  appId: "1:739046827215:web:a1aa305cc5674930e0c3ba",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const colRef = collection(db, "tweets");
export const notificationRef = collection(db, "notification");
export const nQ = query(notificationRef, orderBy("timestamp", "desc"));
export const q = query(colRef, orderBy("timestamp", "desc"));

export default db;
