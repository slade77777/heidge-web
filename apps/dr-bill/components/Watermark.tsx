import {ReactNode} from 'react';
import {Text} from '@nextui-org/react';

type Props = {
  children: ReactNode;
  text: string;
}
export default function Watermark({text, children}: Props) {
  return (
    <div className="relative overflow-hidden">
      <Text css={{
        fontFamily: '$heading',
        fontSize: '180px',
        fontWeight: 400,
        lineHeight: '171px',
        letterSpacing: '0em',
        textAlign: 'left',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.02,
        color: '$text',
      }}>{text}</Text>
      {children}
    </div>
  )
}
