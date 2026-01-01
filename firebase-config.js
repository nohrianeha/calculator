import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Firebase Configuration
// Values are injected by Vite via import.meta.env (VITE_*)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase (compat SDK loaded via CDN in index.html)
firebase.initializeApp(firebaseConfig);

// Expose auth and config to the global window so other modules (and inline handlers)
// can access them even when loaded as ES modules.
window.firebaseConfig = firebaseConfig;
window.auth = firebase.auth();




