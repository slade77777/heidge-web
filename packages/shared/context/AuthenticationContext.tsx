import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import nookies from 'nookies';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { User } from '../types';
import { auth } from '../lib/firebaseClient';

type AuthContextType = {
  account: any;
  login?: (user: User) => Promise<any>;
  signup?: (user: User) => Promise<any>;
  logout?: () => void;
};

const AuthContext = createContext<AuthContextType>({
  account: null,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<any>(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAccount(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', { path: '/' });
        return;
      }

      const token = await user.getIdToken();
      setAccount(user);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, { path: '/' });
    });

    return () => unsubscribe();
  }, []);

  const signup = (user: User) => {
    return createUserWithEmailAndPassword(auth, user.email, user.password);
  };

  const login = (user: User) => {
    return signInWithEmailAndPassword(auth, user.email, user.password);
  };

  const logout = async () => {
    setAccount(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        account,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
