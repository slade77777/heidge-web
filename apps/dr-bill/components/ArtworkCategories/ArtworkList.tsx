import CardArtwork from '../CardArtwork';
import CardRaw from '../CardRaw';
import { Text } from '@nextui-org/react';
import { Paragraph } from '../CustomText';
import { ARTWORKS } from '../../constants/artworks';
import { PageNames } from '../../constants/pageNames';

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
      href={`${PageNames.ARTWORK.en}/${artwork.slug}`}
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
      {Object.keys(ARTWORKS).map((k) =>
        ARTWORKS[k].isHighlight ? (
          <div className="md:col-span-2" key={ARTWORKS[k].slug}>
            <ArtWork artwork={ARTWORKS[k]} />
          </div>
        ) : (
          <ArtWork artwork={ARTWORKS[k]} key={ARTWORKS[k].slug} />
        ),
      )}
    </div>
  );
}
