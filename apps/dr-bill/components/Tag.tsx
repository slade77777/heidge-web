import { CSS, Text } from '@nextui-org/react';

export default function Tag({text, css}: { text: string; css?: CSS }) {
  return (
    <Text
      css={{
        fontSize: '$xs',
        lineHeight: '$sm',
        background: '$text',
        color: '$background',
        position: 'absolute',
        fontWeight: 400,
        top: 0,
        right: 0,
        padding: '10px 20px',
        ...css
      }}
    >
      {text}
    </Text>
  )
}
