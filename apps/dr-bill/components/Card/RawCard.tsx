import {ReactNode} from 'react';
import {Card} from '@nextui-org/react';

type Props = {
  css?: Object;
  children?: ReactNode;
  className?: string;
}
export default function RawCard({css, className, children}: Props) {
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
