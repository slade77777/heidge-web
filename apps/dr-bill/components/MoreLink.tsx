import {Text} from '@nextui-org/react';
import {Direction} from 'shared/icons';
import Link from 'next/link';

type Props = {
  href: string;
  content?: string;
}
export default function MoreLink({href, content}: Props) {
  return (
    <Link href={href}>
      <a>
        <Text css={{
          fontSize: '$base',
          lineHeight: '$sm',
          fontWeight: 600,
          display: 'inline',
          marginRight: '16px',
        }}>{content}</Text>
        <Direction className="inline"/>
      </a>
    </Link>
  )
}
