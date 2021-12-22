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

export enum ConnectionEnum {
  NotConnected,
  Connected,
}

type ContextType = {
  connect?: () => void;
  disabled?: boolean;
  connection: ConnectionEnum;
  account: string;
};

const Context = createContext<ContextType>({
  connection: ConnectionEnum.NotConnected,
  account: '',
});

export const MetamaskProvider = ({ children }: { children: ReactNode }) => {
  const [connection, setConnection] = useState<ConnectionEnum>(
    ConnectionEnum.NotConnected,
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
        setConnection(ConnectionEnum.Connected);
        setDisabled(true);
        onboarding.current?.stopOnboarding();
      } else {
        setConnection(ConnectionEnum.NotConnected);
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

export const useMetamask = () => useContext(Context);
