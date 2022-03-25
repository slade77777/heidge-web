import { Button, Text } from '@nextui-org/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  css?: Object;
  onClick?: () => void;
  disabled?: boolean;
};

export default function SquareBtn({ children, css, onClick, disabled }: Props) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      css={{
        minWidth: 0,
        borderRadius: 0,
        color: disabled ? '$gray100' : '$black',
        backgroundColor: disabled ? '$gray600' : 'transparent',
        border: disabled ? '1px solid $gray500' : '1px solid $primary',
        '&:hover': {
          border: disabled ? '2px solid transparent' : '2px solid $primary',
        },
        ...css,
      }}
    >
      <Text
        css={{
          fontSize: '$xs',
          lineHeight: '$xs',
          fontWeight: 600,
          '&:active': {
            borderBottom: '1px solid $primary',
          },
          '@sm': {
            fontSize: 'base',
            lineHeight: '$sm',
          },
        }}
      >
        {children}
      </Text>
    </Button>
  );
}
