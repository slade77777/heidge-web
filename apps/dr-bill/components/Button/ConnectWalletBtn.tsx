import SquareBtn from './SquareBtn';
import {Text} from '@nextui-org/react';

export default function ConnectWalletButton({css}: { css?: Object }) {
  return (
    <SquareBtn css={{
      width: '240px',
      height: '56px',
      ...css,
    }}>
      <Text css={{fontSize: '$base', fontWeight: 600}}>Connect Wallet </Text>
    </SquareBtn>
  )
}
