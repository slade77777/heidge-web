import { Container } from '@nextui-org/react';
import Introduction from './Introduction';
import ArtworkOverview from './ArtworkOverview';
import ShowAndMedia from './ShowAndMedia';
import { Content } from '../../types';

export default function Home({
  data,
  artwork,
  media,
}: {
  data: Content[];
  artwork: Content;
  media: Content[];
}) {
  return (
    <Container md className="relative">
      <div className="mb-[120px]">
        <Introduction data={data[0]} />
        <ArtworkOverview overview={data[1]} artwork={artwork} />
        <ShowAndMedia info={data[2]} media={media} />
      </div>
    </Container>
  );
}
