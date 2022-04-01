import { Modal, useModal } from '@nextui-org/react';
import DesktopNavigation from './NavigationList';
import SocialNetworkList from '../SocialNetworkList';
import ConnectWalletButton from '../Button/ConnectWalletBtn';
import { Menu } from 'shared/icons';
import { classNames } from 'shared/utils';

export default function MobileHeader({ className }: { className?: string }) {
  const { setVisible, bindings } = useModal();
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div className={classNames('flex items-center justify-end', className)}>
      <button onClick={() => setVisible(true)}>
        <Menu className="w-10 h-5" />
      </button>
      <Modal
        style={{ borderRadius: 0 }}
        fullScreen
        closeButton
        onClose={closeHandler}
        {...bindings}
      >
        <Modal.Body className="flex flex-col justify-center items-center gap-[60px]">
          <DesktopNavigation
            className="flex flex-col items-center gap-[30px]"
            onClose={closeHandler}
          />
          <ConnectWalletButton />
          <SocialNetworkList className="gap-7" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
