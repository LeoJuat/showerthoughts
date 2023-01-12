import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC38sRmlf_WN4l_UKP5iu_4JiHhHqaX2wQ",
  authDomain: "twitter-redone.firebaseapp.com",
  projectId: "twitter-redone",
  storageBucket: "twitter-redone.appspot.com",
  messagingSenderId: "1069936874019",
  appId: "1:1069936874019:web:065ef361ee887ecaa51796",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
