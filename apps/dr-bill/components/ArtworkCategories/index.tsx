import { Container } from '@nextui-org/react';
import Breadcrumbs from '../Breadcrumbs';
import { PageNames } from '../../constants/pageNames';
import { Heading } from '../CustomText';
import ArtworkList from './ArtworkList';
import Watermark from '../Watermark';
import { Content } from '../../types';

export default function ArtworkCategories({
  artworks,
}: {
  artworks: Content[];
}) {
  return (
    <Watermark text="Artworks">
      <Container md>
        <Breadcrumbs
          data={[
            {
              text: 'Home',
              href: '/',
            },
            { text: 'Artworks', href: `${PageNames.ARTWORK.en}` },
          ]}
        />
        <div className="mt-[100px] mb-[200px]">
          <Heading css={{ margin: '72px 0' }}> Artworks </Heading>
          <ArtworkList artworks={artworks} />
        </div>
      </Container>
    </Watermark>
  );
}
