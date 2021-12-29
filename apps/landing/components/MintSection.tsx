import { useState } from 'react';
import { classNames } from 'shared/utils';
import {
  Button,
  ConnectionEnum,
  getTotalWei,
  useMetamask,
  toast,
  hasEnoughBalance,
  NetworkName,
  NETWORKS,
} from 'shared';
import HedgieNumberSelection from './HedgieNumberSelection';
import { useMutation } from 'react-query';
import { mintHedgie, orderHedgie } from '../api';

const HEDGIE_PAYMENT_WALLET_ADDRESS =
  '0x6d1e4b3ea39e17e9966dba5f06642c8fd2193f59';

const REQUIRED_NETWORK: NetworkName =
  (process.env.NEXT_PUBLIC_METAMASK_NETWORK as NetworkName) || 'rinkeby';

const defaultWrapperClass =
  'space-y-5 max-w-xl mx-auto text-center bg-slate-100 shadow-gray-300/50 p-6 rounded-lg shadow-lg';

const MintSection = ({ className }: { className?: string }) => {
  const [action, setAction] = useState<
    'idle' | 'success' | 'error' | 'loading'
  >('idle');
  const { connection, connect, account, balance, purchase, networkName } =
    useMetamask();
  const [selectedVl, setSelectedVl] = useState<number>(1);

  const mutation = useMutation(orderHedgie);
  const mintMutation = useMutation(mintHedgie);

  async function handleMinting() {
    if (networkName !== REQUIRED_NETWORK) {
      toast.error(`Please switch to use ${NETWORKS[REQUIRED_NETWORK].name}`);
      return;
    }
    setAction('loading');
    try {
      const data = await mutation.mutateAsync({
        hedgie_quantity: Number(selectedVl),
        wallet: account,
      });

      const amount = getTotalWei(
        selectedVl,
        data?.data?.hedgiePriceWei.toString(),
        data?.data?.gasPriceWei.toString(),
      );

      if (!hasEnoughBalance(balance, amount)) {
        toast.error('insufficient funds');
        setAction('idle');
        return;
      }

      const postRes = await purchase(HEDGIE_PAYMENT_WALLET_ADDRESS, amount);

      await mintMutation.mutateAsync({
        tx_hash: postRes.hash,
        wallet: account,
      });
      setAction('success');
      toast.success('Minting success');
    } catch (e: any) {
      setAction('error');
      toast.error(e?.message);
    }
  }
  return (
    <div id="mint-box">
      {connection === ConnectionEnum.Connected ? (
        <>
          {action === 'success' ? (
            <div className={classNames(defaultWrapperClass, className)}>
              <h3 className="font-bold text-teal-400 text-2xl">Thank you!</h3>
              <div>Your hedgie(s) has been minted</div>
              <Button className="w-64 btn btn-cyan uppercase">
                View on OpenSea
              </Button>
            </div>
          ) : (
            <HedgieNumberSelection
              className={classNames(defaultWrapperClass, className)}
              onSelect={setSelectedVl}
              selectedValue={selectedVl}
              loading={action === 'loading'}
              onSubmit={handleMinting}
            />
          )}
        </>
      ) : (
        <div className="text-center -mt-6">
          <Button className="w-64 btn btn-cyan uppercase" onClick={connect}>
            Connect wallet
          </Button>
        </div>
      )}
    </div>
  );
};

export default MintSection;
