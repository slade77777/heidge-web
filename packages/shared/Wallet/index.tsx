import { useContext } from 'react';
import { MetamaskProvider, Context, Connection } from './MetamaskContext';

const useMetamask = () => useContext(Context);

export { useMetamask, MetamaskProvider, Connection };
