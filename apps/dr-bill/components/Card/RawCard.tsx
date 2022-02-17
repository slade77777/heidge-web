import {ReactNode} from 'react';
import {Card} from '@nextui-org/react';

type Props = {
  css?: Object;
  children?: ReactNode;
}
export default function RawCard({css, children}: Props) {
  return (
    <Card css={{
      background: 'transparent',
      borderRadius: 0,
      border: 'none',
      padding: 0,
      margin: 0,
      ...css,
    }}>
      {children}
    </Card>
  );
}
