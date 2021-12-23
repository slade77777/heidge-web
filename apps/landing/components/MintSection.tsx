import { useState } from 'react';
import { classNames } from 'shared/utils';
import {
  Button,
  ConnectionEnum,
  purchase,
  getTotalWei,
  useMetamask,
  wei2Eth,
} from 'shared';
import HedgieNumberSelection from './HedgieNumberSelection';
import { useMutation } from 'react-query';
import { orderHedgie } from '../api';

const HEDGIE_PAYMENT_WALLET_ADDRESS =
  '0x6d1e4b3ea39e17e9966dba5f06642c8fd2193f59';

const defaultWrapperClass =
  'space-y-5 max-w-xl mx-auto text-center bg-slate-100 shadow-gray-300/50 p-6 rounded-lg shadow-lg';

const MintSection = ({ className }: { className?: string }) => {
  const { connection, connect, account, balance } = useMetamask();
  const [selectedVl, setSelectedVl] = useState<number>(1);

  const mutation = useMutation(orderHedgie);

  async function handleMinting() {
    const data = await mutation.mutateAsync({
      hedgie_quantity: Number(selectedVl),
      wallet: account,
    });

    await purchase(HEDGIE_PAYMENT_WALLET_ADDRESS, {
      quantity: selectedVl,
      hedgieWei: data?.data?.hedgiePriceWei.toString(),
      gasWei: data?.data?.gasPriceWei.toString(),
    });
  }
  // console.log('balance', wei2Eth(balance || ''));
  return (
    <div id="mint-box">
      {connection === ConnectionEnum.Connected ? (
        <HedgieNumberSelection
          className={classNames(defaultWrapperClass, className)}
          onSelect={setSelectedVl}
          selectedValue={selectedVl}
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
