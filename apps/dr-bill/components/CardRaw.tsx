import {ReactNode} from 'react';
import { Card, CSS } from '@nextui-org/react';

type Props = {
  css?: CSS;
  children?: ReactNode;
  className?: string;
}
export default function CardRaw({css, className, children}: Props) {
  return (
    <Card
      className={className}
      css={{
        background: 'transparent',
        borderRadius: 0,
        border: 'none',
        boxShadow: 'none',
        padding: 0,
        margin: 0,
        'div': {
          padding: 0,
        },
        ...css,
      }}>
      {children}
    </Card>
  );
}
