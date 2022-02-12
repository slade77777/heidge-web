import {Input, Text} from '@nextui-org/react';
import {Button} from 'shared';

export default function Subscribe({className}) {
  return (
    <div className={className}>
      <Input
        placeholder="Enter Your Email..."
        color="success"
        fullWidth
        animated={false}
        rounded={false}
        css={{
          'label': {
            height: '54px',
            background: 'transparent',
            borderRadius: 0,
            border: '1px solid $black',
            boxSizing: 'border-box'
          },
          'input': {
            fontSize: '18px',
            lineHeight: '30.6px',
            fontWeight: 300,
            color: '$black'
          }
        }}
       />
      <Button className="bg-black h-[54px] w-full">
        <Text
          css={{
            fontSize: '20px',
            lineHeight: '34px',
            fontWeight: 600,
            color: '#E3E0D9'
          }}
        >
          Subscribe
        </Text>
      </Button>
    </div>
  )
}
