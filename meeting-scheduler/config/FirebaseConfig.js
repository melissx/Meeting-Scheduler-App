import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-2fef5.firebaseapp.com",
  projectId: "meeting-scheduler-2fef5",
  storageBucket: "meeting-scheduler-2fef5.appspot.com",
  messagingSenderId: "335862008641",
  appId: "1:335862008641:web:a0d2d96b3fa610e39a6fc0",
  measurementId: "G-LV2WRYC9G0"
};

export const app = initializeApp(firebaseConfig);