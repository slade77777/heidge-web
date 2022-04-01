import FilledArrow from 'shared/icons/FilledArrow';
import { classNames } from 'shared/utils';
import Link from 'next/link';
import { Container, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { decodeSlug } from '../utils';

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
          }}>{decodeSlug(item.text)}</Text>
        </a>
      </Link>
    );
  }

  return <Text css={{
    fontSize: '$tiny',
    lineHeight: '11px',
    textTransform: 'uppercase',
    fontWeight: isLastItem ? 600 : 300,
  }}>{decodeSlug(item.text)}</Text>;
};

export default function Breadcrumbs() {
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  const {asPath} = useRouter();
  const isLastItem = useCallback((currentIndex) => {
    return currentIndex == breadcrumbs.length - 1;
  }, [breadcrumbs]);

  useEffect(() => {
    if (asPath) {
      const paths = asPath.split('/');
      paths.shift();
      const pathArray = paths.map((path, index) => ({text: path, href: `/${paths.slice(0, index + 1).join('/')}`}));
      pathArray.unshift({text: 'home', href: '/'});
      setBreadcrumbs(pathArray);
    }
  }, [asPath]);

  if (breadcrumbs?.[1]?.href === '/') return null

  return (
    <Container md>
      <nav className="relative">
        <ol className="flex flex-no-wrap items-center m-0 p-0 list-none z-10">
          {breadcrumbs?.map((item, index) => (
            <li className="flex items-center gap-4" key={index}>
              <div className={classNames('text-red-800', isLastItem(index) && 'font-bold')}>
                <BreadcrumbsItem item={item} isLastItem={isLastItem(index)} />
              </div>
              <span className={classNames('mr-4', isLastItem(index) && 'hidden')}>
              <FilledArrow />
            </span>
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
};
