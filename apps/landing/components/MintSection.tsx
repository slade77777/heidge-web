import { useState } from 'react';
import { classNames } from 'shared/utils';
import { Button, ConnectionEnum, useMetamask } from 'shared';
import HedgieNumberSelection from './HedgieNumberSelection';

const defaultWrapperClass =
  'space-y-5 max-w-xl mx-auto text-center bg-slate-100 shadow-gray-300/50 p-6 rounded-lg shadow-lg';

const MintSection = ({ className }: { className?: string }) => {
  const { connection, connect, account } = useMetamask();
  const [selectedVl, setSelectedVl] = useState(1);
  return (
    <div id="mint-box">
      {connection === ConnectionEnum.Connected ? (
        <HedgieNumberSelection
          className={classNames(defaultWrapperClass, className)}
          onSelect={setSelectedVl}
          selectedValue={selectedVl}
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
