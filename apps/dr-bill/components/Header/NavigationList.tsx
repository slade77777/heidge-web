import Link from 'next/link'
import {Text} from '@nextui-org/react';
import {PageNames} from '../../constants/pageNames';

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
const Button = ({title, url, onClick}) => {
  return (
    <Link href={url}>
      <a onClick={onClick}>
        <Text
          css={{
            lineHeight: '22px',
            fontWeight: 600,
            '&:active': {
              borderBottom: '1px solid $primary',
            },
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
  return (
    <div className={className}>
      {navigationList.map((e, i) => <Button onClick={onClose} key={i} {...e}/>)}
    </div>
  )
}
