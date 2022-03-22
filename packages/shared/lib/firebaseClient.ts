import { initializeApp, getApps } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { FireBaseConfig } from '../types';

let auth: Auth;

function getFirebaseClient(firebaseConfig: FireBaseConfig) {
  if (!getApps().length && !auth) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
  return auth;
}

export { getFirebaseClient, auth };
export type { Auth };
