import { Container } from '@nextui-org/react';
import Breadcrumbs from '../Breadcrumbs';
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
        <Breadcrumbs />
        <div className="mt-[100px] mb-[200px]">
          <Heading css={{ margin: '72px 0' }}> Artworks </Heading>
          <ArtworkList artworks={artworks} />
        </div>
      </Container>
    </Watermark>
  );
}
