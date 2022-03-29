// import CardArtwork from '../CardArtwork';
// import CardRaw from '../CardRaw';
// import { Text } from '@nextui-org/react';
// import { Paragraph } from '../CustomText';
import { PageNames } from '../../constants/pageNames';
import { Content } from '../../types';
import Card from '../Card';

export default function ArtworkList({ artworks }: { artworks: Content[] }) {
  return (
    <div className="grid lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
      <div className="md:col-span-2">
        <Card
          ratio="aspect-w-2 aspect-h-1"
          title={artworks[1].title}
          imageSrc={artworks[1].image}
          description={artworks[1].text}
          href={`${PageNames.ARTWORK.en}/${artworks[1].slug}`}
        />
      </div>
      <div className="md:col-span-1">
        <Card
          title={artworks[0].title}
          imageSrc={artworks[0].image}
          description={artworks[0].text}
          href={`${PageNames.ARTWORK.en}/${artworks[0].slug}`}
        />
      </div>
    </div>
  );
}
