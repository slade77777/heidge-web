import {NextArrow} from 'shared/icons';
import {Button} from '@nextui-org/react';
import {forwardRef} from 'react';

type Props = {
  buttonType: 'next' | 'previous',
  size?: number,
}

const AdjacentBtn = forwardRef<HTMLButtonElement, Props>(({buttonType, size = 60}, ref) => {
  return (
    <Button
      ref={ref}
      rounded
      css={{
        border: '1px solid $text',
        color: '$text',
        background: 'transparent',
        minWidth: 0,
        width: `${size}px`,
        height: `${size}px`,
        '&:hover': {
          border: '2px solid $text',
        },
      }}
    >
      <NextArrow className={buttonType === 'previous' ? 'rotate-180' : undefined}/>
    </Button>
  )
})

AdjacentBtn.displayName = 'AdjacentBtn';

export default AdjacentBtn;
