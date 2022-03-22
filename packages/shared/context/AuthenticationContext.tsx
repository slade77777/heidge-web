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
  Auth,
} from 'firebase/auth';
import { User } from '../types';

type AuthContextType = {
  account: any;
  login?: (user: User) => Promise<any>;
  signup?: (user: User) => Promise<any>;
  logout?: () => void;
  loading?: boolean;
};

const AuthContext = createContext<AuthContextType>({
  account: null,
});

const AuthProvider = ({
  children,
  auth,
  callback,
}: {
  children: ReactNode;
  auth: Auth;
  callback: (idToken?: string) => void;
}) => {
  const [account, setAccount] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAccount(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', { path: '/' });
        callback?.();
        setLoading(false);
        return;
      }

      const token = await user.getIdToken(true);
      setAccount(user);
      callback?.(token);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, { path: '/' });
      setLoading(false);
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
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
