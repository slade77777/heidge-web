import FilledArrow from 'shared/icons/FilledArrow';
import {classNames} from 'shared/utils';
import Link from 'next/link';
import {Text} from '@nextui-org/react';

export type BreadItem = {
  href?: string;
  text: string;
  onClick?: () => void;
};

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

export default function Breadcrumbs({data}: { data: BreadItem[] }) {
  const isLastItem = (currentIndex) => {
    return currentIndex == data.length - 1;
  };

  return (
    <nav className="relative">
      <ol className="flex flex-no-wrap items-center m-0 p-0 list-none z-10">
        {data.map((item, index) => (
          <li className="flex items-center gap-4" key={index}>
            <div className={classNames('text-red-800', isLastItem(index) && 'font-bold')}>
              <BreadcrumbsItem item={item} isLastItem={isLastItem(index)}/>
            </div>
            <span className={classNames('mr-4', isLastItem(index) && 'hidden')}>
              <FilledArrow/>
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};
