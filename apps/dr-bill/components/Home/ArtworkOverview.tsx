import { Heading, Paragraph } from '../CustomText';
import MoreLink from '../MoreLink';
import { PageNames } from '../../constants/pageNames';
import { Content } from '../../types';
import Card from '../Card';
import BlurImage from '../BlurImage';

export default function ArtworkOverview({
  overview,
  artwork,
}: {
  overview: Content;
  artwork: Content;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[40%,auto] gap-5 lg:gap-12 my-24 lg:my-48">
      <div>
        <Heading>{overview.title}</Heading>
        <Paragraph css={{ marginTop: '1.5rem' }}>{overview.text}</Paragraph>
        <MoreLink
          href={PageNames.ARTWORK.en}
          content="See all collections"
          className="hidden lg:block pt-5"
        />
      </div>
      <Card href={`${PageNames.ARTWORK.en}/${artwork.slug}`} tag="New">
        <BlurImage src={artwork.image} className="aspect-w-2 aspect-h-1" />
        <Card.CardTitle>{artwork.title}</Card.CardTitle>
      </Card>
      <MoreLink
        href={PageNames.ARTWORK.en}
        content="See all collections"
        className="lg:hidden"
      />
    </div>
  );
}
