import {Container} from '@nextui-org/react';
import Breadcrumbs from '../../components/Breadcrumbs';
import {PageNames} from '../../constants/pageNames';
import {Heading} from '../../components/Text';
import ArtworkList from './ArtworkList';

export default function Artworks() {
  return (
    <Container md>
      <Breadcrumbs
        data={[
          {
            text: 'Home',
            href: '/',
          },
          {text: 'Artworks', href: `${PageNames.ARTWORK.en}`},
        ]}
      />
      <div className="mt-[100px]">
        <Heading css={{margin: '72px 0'}}> Artworks </Heading>
        <ArtworkList/>
      </div>
    </Container>
  )
}
