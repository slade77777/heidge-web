import {Text} from '@nextui-org/react';
import {ReactNode} from 'react';

export default function Paragraph({children, css}: { css?: Object, children: ReactNode }) {
  return (
    <Text
      css={{
        fontSize: '$xs',
        lineHeight: '$md',
        fontWeight: 300,
        '@xs': {
          fontSize: '$xs',
          lineHeight: '$md',
        },
        '@sm': {
          fontSize: '$base',
          lineHeight: '$md',
        },
        ...css,
      }}
    >
      {children}
    </Text>
  )
}
