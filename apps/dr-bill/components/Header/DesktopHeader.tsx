import DesktopNavigation from './NavigationList';
import ConnectWalletButton from '../Button/ConnectWalletBtn';
import { classNames } from 'shared/utils';
import { Container } from '@nextui-org/react';
import SocialNetworkList from '../SocialNetworkList';

export default function DesktopHeader({ className }: { className?: string }) {
  return (
    <Container md>
      <div
        className={classNames(
          'h-full flex items-center justify-between',
          className,
        )}
      >
        <DesktopNavigation className="flex w-1/2 justify-between z-10" />
        <div className="flex space-x-5">
          <SocialNetworkList />
          <ConnectWalletButton />
        </div>
      </div>
    </Container>
  );
}
