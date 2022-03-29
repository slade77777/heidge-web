import CardArtwork from '../CardArtwork';
import CardRaw from '../CardRaw';
import { Text } from '@nextui-org/react';
import { Paragraph } from '../CustomText';
import { PageNames } from '../../constants/pageNames';
import { Content } from '../../types';

const ArtWork = ({ artwork }: { artwork: Content }) => {
  return (
    <CardArtwork
      className="h-full"
      imageClassName="h-[384px]"
      layout="fill"
      images={[{ src: artwork.image }]}
      href={`${PageNames.ARTWORK.en}/${artwork.slug}`}
    >
      <CardRaw>
        <Text h4>{artwork.title}</Text>
        <div className="mt-3" />
        <Paragraph className="line-clamp-5">{artwork.text}</Paragraph>
      </CardRaw>
    </CardArtwork>
  );
};

export default function ArtworkList({ artworks }: { artworks: Content[] }) {
  return (
    <div className="grid lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
      <div className="md:col-span-2">
        <ArtWork artwork={artworks[1]} />
      </div>
      <ArtWork artwork={artworks[0]} />
    </div>
  );
}
