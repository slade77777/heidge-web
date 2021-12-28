import { useState } from 'react';
import { classNames } from 'shared/utils';
import {
  Button,
  ConnectionEnum,
  getTotalWei,
  useMetamask,
  toast,
  checkBalanceEnough,
  NetworkName,
  NETWORKS,
} from 'shared';
import HedgieNumberSelection from './HedgieNumberSelection';
import { useMutation } from 'react-query';
import { orderHedgie } from '../api';

const HEDGIE_PAYMENT_WALLET_ADDRESS =
  '0x6d1e4b3ea39e17e9966dba5f06642c8fd2193f59';

const CURRENT_NETWORK: NetworkName =
  (process.env.NEXT_PUBLIC_METAMASK_NETWORK as NetworkName) || 'ropsten';

const defaultWrapperClass =
  'space-y-5 max-w-xl mx-auto text-center bg-slate-100 shadow-gray-300/50 p-6 rounded-lg shadow-lg';

const MintSection = ({ className }: { className?: string }) => {
  const { connection, connect, account, balance, purchase, networkName } =
    useMetamask();
  const [selectedVl, setSelectedVl] = useState<number>(1);

  const mutation = useMutation(orderHedgie);

  async function handleMinting() {
    if (networkName !== CURRENT_NETWORK) {
      toast.error(`Please switch to use ${NETWORKS[CURRENT_NETWORK].name}`);
      return;
    }

    const data = await mutation.mutateAsync({
      hedgie_quantity: Number(selectedVl),
      wallet: account,
    });
    const amount = getTotalWei(
      selectedVl,
      data?.data?.hedgiePriceWei.toString(),
      data?.data?.gasPriceWei.toString(),
    );
    if (!checkBalanceEnough(balance, amount)) {
      toast.error('insufficient funds');
      return;
    }

    purchase(HEDGIE_PAYMENT_WALLET_ADDRESS, amount)
      .then(() => {
        toast.success('Minting success');
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }

  return (
    <div id="mint-box">
      {connection === ConnectionEnum.Connected ? (
        <HedgieNumberSelection
          className={classNames(defaultWrapperClass, className)}
          onSelect={setSelectedVl}
          selectedValue={selectedVl}
          loading={mutation.isLoading}
          onSubmit={handleMinting}
        />
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
