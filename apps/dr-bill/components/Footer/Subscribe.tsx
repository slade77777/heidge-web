import {Button, Input, Text} from '@nextui-org/react';

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
            border: '1px solid $primary',
            boxSizing: 'border-box',
          },
          'input': {
            fontSize: '$xs',
            lineHeight: '30.6px',
            fontWeight: 300,
            color: '$primary',
          },
          'input::placeholder': {
            color: '$primary',
          },
          'input:focus': {
            outline: 'none',
            boxShadow: 'none',
        },
        }}
      />
      {/*<Button className="bg-black h-[54px] w-full mt-2">*/}
      <Button css={
        {
          background: '$primary',
          height: '54px',
          width: '100%',
          marginTop: '7px',
          borderRadius: 0,
        }
      }>
        <Text
          css={{
            
            lineHeight: '34px',
            fontWeight: 600,
            color: '$background',
          }}
        >
          Subscribe
        </Text>
      </Button>
    </div>
  )
}
