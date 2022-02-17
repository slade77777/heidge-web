import {Grid} from '@nextui-org/react';
import {Heading, Paragraph} from '../../components/Text';
import MoreLink from '../../components/MoreLink';
import Artwork from '../../components/Card/Artwork';

const artworks = [
  {src: '/assets/about/artwork1.png'},
  {src: '/assets/about/artwork2.png'},
]

const customGridStyle = {
  '@xsMax': {
    maxWidth: '100% !important',
    flexBasis: '100% !important',
  },
}

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
      <div className="col-span-12 md:col-span-6 lg:col-span-7">
        <Artwork images={artworks} tag="New">
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
        </Artwork>
      </div>
    </div>
  );
};

