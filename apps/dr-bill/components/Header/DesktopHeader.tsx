import DesktopNavigation from './DesktopNavigation';
import ConnectWalletButton from '../Button/ConnectWalletBtn';
import {classNames} from 'shared/utils';
import {Container} from '@nextui-org/react';
import SocialNetworkList from './SocialNetworkList';

export default function DesktopHeader({className}: { className?: string }) {
  return (
    <Container xl>
      <div
        className={classNames(
          'h-full flex items-center justify-between',
          className,
        )}>
        {/*<Link href="/">*/}
        {/*  <a className="flex items-center">*/}
        {/*    <Image*/}
        {/*      src="/assets/logo.png"*/}
        {/*      alt="DrBill"*/}
        {/*      width={59}*/}
        {/*      height={59}*/}
        {/*    />*/}
        {/*  </a>*/}
        {/*</Link>*/}
        <DesktopNavigation className="flex w-1/2 justify-between"/>
        <div className="flex flex-row items-center">
          <SocialNetworkList className="w-[100px] mr-11"/>
          <ConnectWalletButton/>
        </div>
      </div>

    </Container>
  )
}
