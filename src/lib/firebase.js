import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-d938e.firebaseapp.com",
  projectId: "chat-app-d938e",
  storageBucket: "chat-app-d938e.appspot.com",
  messagingSenderId: "514855745470",
  appId: "1:514855745470:web:e3d942a6f9dd2ab6372bef",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
