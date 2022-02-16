import {NextArrow} from 'shared/icons';
import {Button} from '@nextui-org/react';

type Props = {
  buttonType: 'next' | 'previous',
  size?: number,
}
export default function AdjacentBtn({buttonType, size = 60}: Props) {
  return (
    <Button
      rounded
      css={{
        border: '1px solid $text',
        color: '$text',
        background: 'transparent',
        minWidth: 'none',
        width: `${size}px`,
        height: `${size}px`,
        '&:hover': {
          border: '2px solid $text',
        },
      }}
    >
      <NextArrow className={buttonType === 'previous' && 'rotate-180'}/>
    </Button>
  )
}
