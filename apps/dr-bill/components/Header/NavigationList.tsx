import Link from 'next/link'
import {Text} from '@nextui-org/react';
import {PageNames} from '../../constants/pageNames';
import {useRouter} from 'next/router';

const navigationList = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: PageNames.ABOUT.en,
  },
  {
    title: 'Artworks',
    url: PageNames.ARTWORK.en,
  },
  {
    title: 'Show & Media',
    url: PageNames.SHOW_AND_MEDIA.en,
  },
]
const Button = ({className, title, url, onClick, active = false}) => {
  return (
    <Link href={url}>
      <a className={className} onClick={onClick}>
        <Text
          css={{
            lineHeight: '22px',
            fontWeight: 600,
            borderBottom: active && '1px solid $primary',
          }}
        >
          {title}
        </Text>

      </a>
    </Link>
  )
}

type Props = {
  className?: string;
  onClose?: () => void;
}
export default function DesktopNavigation({className, onClose}: Props) {
  const {pathname} = useRouter();
  return (
    <div className={className}>
      {navigationList.map((e, i) =>
        <Button
          className="hover:opacity-40"
          onClick={onClose}
          active={e.url === `/${pathname.split('/')[1]}`}
          key={i}
          {...e}/>)}
    </div>
  )
}
