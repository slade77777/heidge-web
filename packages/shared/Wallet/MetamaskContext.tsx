import {
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';

declare global {
  interface Window {
    ethereum: any;
  }
}

const CONNECT_TEXT = 'Connect wallet';
const CONNECTED_TEXT = 'Connected';

export enum Connection {
  NotConnected,
  Connected,
}

type ContextType = {
  connect?: () => void;
  disabled?: boolean;
  connection: Connection;
  account: string;
};
export const Context = createContext<ContextType>({
  connection: Connection.NotConnected,
  account: '',
});

export const MetamaskProvider = ({ children }: { children: ReactNode }) => {
  const [connection, setConnection] = useState<Connection>(
    Connection.NotConnected,
  );
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState<string[]>([]);
  const onboarding = useRef<MetaMaskOnboarding>();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setConnection(Connection.Connected);
        setDisabled(true);
        onboarding.current?.stopOnboarding();
      } else {
        setConnection(Connection.NotConnected);
        setDisabled(false);
      }
    }
  }, [accounts]);

  useEffect(() => {
    function handleNewAccounts(newAccounts: string[]) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleNewAccounts);
      window.ethereum.on('accountsChanged', handleNewAccounts);
      return () => {
        window.ethereum.removeListener('accountsChanged', handleNewAccounts);
      };
    }
  }, []);

  function connect() {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts: string[]) => setAccounts(newAccounts));
    } else {
      onboarding.current?.startOnboarding();
    }
  }

  return (
    <Context.Provider
      value={{
        connect,
        disabled: isDisabled,
        connection,
        account: accounts?.[0] || '',
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useMetamask = () => useContext(Context);
