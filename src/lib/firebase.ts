import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3g-f2L4QgdnNIuDeOdeZZigYZN5Iia8Q",
  authDomain: "smlwebsite-53499.firebaseapp.com",
  projectId: "smlwebsite-53499",
  storageBucket: "smlwebsite-53499.firebasestorage.app",
  messagingSenderId: "662608073494",
  appId: "1:662608073494:web:90c53dbe9a44e110c0f637",
  measurementId: "G-E7VC7KMWDZ"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage }; 