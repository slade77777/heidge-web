import { ReactNode, createContext } from "react";

type ContextType = {
  connect?: () => void;
};
const Context = createContext<ContextType>({});

const MetamaskProvider = ({ children }: { children: ReactNode }) => {
  function connect() {}

  return (
    <Context.Provider
      value={{
        connect,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MetamaskProvider;
