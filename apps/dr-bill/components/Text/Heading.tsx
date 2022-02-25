import {Text} from '@nextui-org/react';
import {ReactNode} from 'react';

export default function Heading({children, css}: { css?: Object, children: ReactNode }) {
  return (
    <Text
      css={{
        fontFamily: '$heading',
        fontWeight: 400,
        fontSize: '$sm',
        lineHeight: '$md',
        '@xs': {
          fontSize: '$lg',
          lineHeight: '$lg',
        },
        '@sm': {
          fontSize: '$xl',
          lineHeight: '74px',
        },
        ...css,
      }}
    >
      {children}
    </Text>
  )
}
