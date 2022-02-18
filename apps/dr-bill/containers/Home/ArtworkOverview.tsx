import {Heading, Paragraph} from '../../components/Text';
import MoreLink from '../../components/MoreLink';
import ArtworkCard from '../../components/Card/ArtworkCard';

const artworks = [
  {src: '/assets/about/artwork1.png'},
  {src: '/assets/about/artwork2.png'},
]

export default function ArtworkOverview() {
  return (
    <div className="grid grid-cols-12 gap-12 my-[200px]">
      <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <div className="my-auto">
          <Heading> Artworks </Heading>
          <Paragraph css={{marginTop: '24px'}}>
            Dr. Bill has been pioneering the medium of Generative Art since the early 70’s. His Plotter Art
            Collection includes 1/1 NFTs that come with original prints made back then. His Generative Art Vending
            Machine is the newest project he’s actively working on. And there’s more!
          </Paragraph>
          <MoreLink href="/about" content="See all collections"/>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-7 flex justify-end">
        <ArtworkCard
          images={artworks}
          tag="New"
          className="max-w-[668px] relative"
        >
          <Heading css={{
            padding: '14px 22px',
            '@xs': {
              fontSize: '$lg',
              lineHeight: '$lg',
              padding: '18px 26px',
            },
            '@sm': {
              fontSize: '$sm',
              lineHeight: '$md',
              padding: '26px 34px',
            },
          }}>
            Generative Art Vending Machine
          </Heading>
        </ArtworkCard>
      </div>
    </div>
  );
};

