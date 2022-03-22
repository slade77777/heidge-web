import type { FireBaseConfig } from "shared";

export const firebaseConfig: FireBaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyC6bX4CJiSIA_Wwxp5pHVYIgaNv5BS7Reo",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "hedgie-47de7.firebaseapp.com",
  databaseURL:
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
    "https://hedgie-47de7.firebaseio.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "hedgie-47de7",
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1059513233216",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
  measurementId: "G-MEASUREMENT_ID",
};
