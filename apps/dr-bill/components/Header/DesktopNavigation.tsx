import Link from 'next/link'
import {Text} from '@nextui-org/react';

const navigation = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Artworks',
    url: '/artworks',
  },
  {
    title: 'Show & Media',
    url: '/show-and-media',
  },
]
const Button = ({title, url}) => {
  return (
    <Link href={url}>
      <a>
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
export default function DesktopNavigation({className}) {
  return (
    <div className={className}>
      {navigation.map((e, i) => <Button key={i} {...e}/>)}
    </div>
  )
}
