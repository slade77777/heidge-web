import CardArtwork from '../CardArtwork';
import CardRaw from '../CardRaw';
import { Text } from '@nextui-org/react';
import { Paragraph } from '../CustomText';
import { ARTWORKS } from './mockContent';

type Artwork = {
  image: {
    src: string;
    alt?: string;
  };
  slug: string;
  title: string;
  description: string;
};

const ArtWork = ({ artwork }: { artwork: Artwork }) => {
  return (
    <CardArtwork
      className="h-full"
      imageClassName="h-[384px]"
      layout="fill"
      images={[artwork.image]}
      href={artwork.slug}
    >
      <CardRaw>
        <Text h4>{artwork.title}</Text>
        <div className="mt-3" />
        <Paragraph> {artwork.description} </Paragraph>
      </CardRaw>
    </CardArtwork>
  );
};

export default function ArtworkList() {
  return (
    <div className="grid lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
      {ARTWORKS.map((artwork) =>
        artwork.isHighlight ? (
          <div className="md:col-span-2" key={artwork.slug}>
            <ArtWork artwork={artwork} />
          </div>
        ) : (
          <ArtWork artwork={artwork} key={artwork.slug} />
        ),
      )}
    </div>
  );
}
