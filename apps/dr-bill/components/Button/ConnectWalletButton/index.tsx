import {Button} from 'shared';
import {Text} from '@nextui-org/react';

export default function ConnectWalletButton() {
  return (
    <Button className="w-[260px] h-[60px] border border-black hover:border-2 hover:bg-black hover:opacity-[0.07]">
      <Text
        css={{
          fontSize: '22px',
          lineHeight: '22px',
          fontWeight: 600,
          '&:active': {
            borderBottom: '1px solid black',
          },
        }}
      >
        Connect Wallet
      </Text>
    </Button>
  )
}
