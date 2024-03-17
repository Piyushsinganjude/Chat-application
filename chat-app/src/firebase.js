import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiLPusntmb7muw1ha-1cLSD6KWEIT6x5k",
  authDomain: "latest-chat-49858.firebaseapp.com",
  projectId: "latest-chat-49858",
  storageBucket: "latest-chat-49858.appspot.com",
  messagingSenderId: "898132813758",
  appId: "1:898132813758:web:339dcbe29b5b77db4d7bef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
