import { PageNames } from '../../constants/pageNames';
import { Content } from '../../types';
import Card from '../Card';
import BlurImage from '../BlurImage';

export default function ArtworkList({ artworks }: { artworks: Content[] }) {
  return (
    <div className="grid lg:grid-cols-[33%,1fr] gap-5 md:gap-7 lg:gap-10">
      {artworks.map((artwork, index) => (
        <Card href={`${PageNames.ARTWORK.en}/${artwork.slug}`} key={artwork.id}>
          <BlurImage
            src={artwork.image}
            className={`aspect-w-${index === 1 ? 2 : 1} aspect-h-1`}
          />
          <Card.CardTitle>{artwork.title}</Card.CardTitle>
          <Card.CardBody>
            <div className="line-clamp-5">{artwork.text}</div>
          </Card.CardBody>
        </Card>
      ))}
    </div>
  );
}
