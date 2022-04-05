import { Container } from '@nextui-org/react';
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
        <div className="mt-5 mb-20">
          <div className="my-5 lg:my-16">
            <Heading> Artworks </Heading>
          </div>
          <ArtworkList artworks={artworks} />
        </div>
      </Container>
    </Watermark>
  );
}
