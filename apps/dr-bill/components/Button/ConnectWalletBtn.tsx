import {Text, Button} from '@nextui-org/react';

export default function ConnectWalletButton() {
  return (
    <Button css={{
      borderRadius: 0,
      background: 'transparent',
      width: '260px',
      height: '60px',
      border: '1px solid $primary',
      '&:hover': {
        border: '2px solid $primary',
      },
    }}>
      <Text
        css={{
          lineHeight: '22px',
          fontWeight: 600,
          '&:active': {
            borderBottom: '1px solid $primary',
          },
        }}
      >
        Connect Wallet
      </Text>
    </Button>
  )
}
