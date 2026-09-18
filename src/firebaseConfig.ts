// Firebase configuration placeholder
// Replace the values below with your Firebase project config.
// For Vite, put values in .env (VITE_FIREBASE_API_KEY, etc.) and don't commit secrets.
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID",
};

export const app = initializeApp(firebaseConfig);

// Note: This file intentionally keeps the config simple.
// To use Firestore, import getFirestore from 'firebase/firestore' where needed:
// import { getFirestore } from 'firebase/firestore';
// const db = getFirestore(app);
