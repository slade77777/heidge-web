import Link from 'next/link';
import {BreadItem} from './index';
import {Text, styled} from '@nextui-org/react';

type Props = {
  item: BreadItem;
  isLastItem?: boolean;
};

const BreadcrumbsItem: React.FC<Props> = ({item, isLastItem}) => {
  if (item.href) {
    return (
      <Link href={item.href}>
        <a>
          <Text css={{
            fontSize: '$tiny',
            lineHeight: '11px',
            textTransform: 'uppercase',
            fontWeight: isLastItem ? 600 : 300,
          }}>{item.text}</Text>
        </a>
      </Link>
    );
  }

  return <Text css={{
    fontSize: '$tiny',
    lineHeight: '11px',
    textTransform: 'uppercase',
    fontWeight: isLastItem ? 600 : 300,
  }}>{item.text}</Text>;
};

export default BreadcrumbsItem;
