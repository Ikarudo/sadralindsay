import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "REDACTED_FIREBASE_WEB_API_KEY",
  authDomain: "REDACTED_FIREBASE_AUTH_DOMAIN",
  projectId: "REDACTED_FIREBASE_PROJECT_ID",
  storageBucket: "REDACTED_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "REDACTED_FIREBASE_MESSAGING_SENDER_ID",
  appId: "REDACTED_FIREBASE_APP_ID",
  measurementId: "REDACTED_GA_MEASUREMENT_ID"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage }; 