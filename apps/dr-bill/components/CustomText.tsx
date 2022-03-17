import {Text} from '@nextui-org/react';
import {ReactNode} from 'react';

export const Heading = ({children, css}: { css?: Object, children: ReactNode }) => {
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

export  const Paragraph = ({children, css}: { css?: Object, children: ReactNode }) => {
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
