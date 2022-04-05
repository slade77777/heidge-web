import { useEffect, useState } from 'react';
import { classNames } from 'shared/utils';
import { useMetamask } from 'shared';
import { DEEP_LINK } from '../constants/common';

const ConnectMetamaskPopup = () => {
  const { account } = useMetamask();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
  }, []);

  if (account) {
    return null;
  }

  return (
    <div
      className={classNames(
        'lg:hidden bg-white/80 backdrop-blur-sm sticky top-0 left-0 z-20 transition-all duration-300 ease-linear',
        show ? 'translate-y-0 h-6' : '-translate-y-10 h-0',
      )}
    >
      <div className="max-w-md mx-auto px-2 lg:px-0 flex justify-between items-center h-full">
        <div className="text-center">
          <a href={DEEP_LINK} className="py-1 px-3 text-xs text-blue-500">
            Switch to MetaMask App →
          </a>
        </div>
        <button
          className="text-right text-sm text-gray-400 active:text-black"
          onClick={() => setShow(!show)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ConnectMetamaskPopup;
