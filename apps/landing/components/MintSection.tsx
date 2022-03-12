import { useState } from 'react';
import { classNames } from 'shared/utils';
import {
  Button,
  ConnectionEnum,
  useMetamask,
  toast,
  hasEnoughBalance,
  NETWORKS,
  str2BigNumber,
  showSuccessEffect,
  useMutation,
} from 'shared';
import HedgieNumberSelection from './HedgieNumberSelection';
import { mintHedgie, orderHedgie } from '../api';
import { METAMASK_NETWORK, OPENSEA_URL, WALLET_ADDRESS } from '../constants';
import { MintAction } from '../types';

const defaultWrapperClass =
  'space-y-5 max-w-md mx-auto text-center bg-white shadow-gray-300/50 py-5 px-2 md:p-6 rounded-lg shadow-lg';

const MintSection = ({ className }: { className?: string }) => {
  const [action, setAction] = useState<MintAction>('idle');
  const { connection, connect, account, balance, purchase, networkName } =
    useMetamask();
  const [selectedVl, setSelectedVl] = useState<number>(1);

  const mutation = useMutation(orderHedgie);
  const mintMutation = useMutation(mintHedgie);

  async function handleMinting() {
    if (networkName !== METAMASK_NETWORK) {
      toast.error(`Please switch to use ${NETWORKS[METAMASK_NETWORK].name}`);
      return;
    }
    setAction('loading');
    try {
      const data = await mutation.mutateAsync({
        hedgie_quantity: Number(selectedVl),
        wallet: account,
      });

      const amount = str2BigNumber(data?.data?.totalPriceWei?.toString());

      if (!hasEnoughBalance(balance, amount)) {
        toast.error('insufficient funds');
        setAction('idle');
        return;
      }

      const postRes = await purchase(WALLET_ADDRESS, amount);

      await mintMutation.mutateAsync({
        tx_hash: postRes.hash,
        wallet: account,
      });

      setAction('success');
      toast.success('Minting success');
      showSuccessEffect();
    } catch (e: any) {
      setAction('error');
      toast.error(e?.message);
    }
  }
  return (
    <div>
      {connection === ConnectionEnum.Connected ? (
        <>
          {action === 'success' ? (
            <div className={classNames(defaultWrapperClass, className)}>
              <h3 className="font-bold text-teal-400 text-2xl">Thank you!</h3>
              <div>Your hedgie(s) are being minted</div>
              <a
                href={`${OPENSEA_URL}/${account}`}
                target="_blank"
                className="w-64 btn btn-cyan uppercase relative"
                rel="noreferrer"
              >
                View on OpenSea
              </a>
            </div>
          ) : (
            <HedgieNumberSelection
              className={classNames(defaultWrapperClass, className)}
              onSelect={setSelectedVl}
              selectedValue={selectedVl}
              account={account}
              loading={action === 'loading'}
              onSubmit={handleMinting}
            />
          )}
        </>
      ) : (
        <div className="text-center -mt-6">
          <Button
            className="hidden md:inline-block w-64 btn btn-cyan uppercase"
            onClick={connect}
          >
            Connect wallet
          </Button>
          <a
            className="md:hidden w-64 btn btn-cyan uppercase cursor-pointer"
            href={process.env.NEXT_PUBLIC_DEEP_LINK}
          >
            Connect wallet
          </a>
        </div>
      )}
    </div>
  );
};

export default MintSection;
