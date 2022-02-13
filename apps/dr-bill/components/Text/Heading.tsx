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
        '@md': {
          fontSize: '$lg',
          lineHeight: '$lg',
        },
        '@lg': {
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
