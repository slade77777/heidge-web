import { getApps, cert, initializeApp } from "firebase-admin/app";
import { getAuth, DecodedIdToken } from "firebase-admin/auth";

function initializeFirebaseAdmin() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    });
  }
}

export function verifyToken(idToken: string): Promise<boolean> {
  return new Promise((resolve) => {
    initializeFirebaseAdmin();
    getAuth()
      .verifyIdToken(idToken)
      .then((decodedToken: DecodedIdToken) => {
        console.log("decodedToken", decodedToken);
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        resolve(false);
      });
  });
}
