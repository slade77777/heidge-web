import { Heading, Paragraph } from '../CustomText';
import MoreLink from '../MoreLink';
import CardArtwork from '../CardArtwork';
import { PageNames } from '../../constants/pageNames';

const artworks = [
  {
    src: '/v1648114058/DrBill/common/generative_art_thumbnail.png',
  },
];

export default function ArtworkOverview() {
  return (
    <div className="grid grid-cols-12 md:gap-10 lg:gap-12 my-[200px]">
      <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <div className="my-auto">
          <Heading> Artworks </Heading>
          <div className="md:hidden mt-6">
            <CardArtwork
              images={artworks}
              tag="New"
              className="h-full"
              imageClassName="h-[352px]"
              layout="fill"
              objectFit="cover"
            >
              <Heading
                css={{
                  overflow: 'hidden',
                  '@xs': {
                    fontSize: '$lg',
                    lineHeight: '$lg',
                  },
                  '@sm': {
                    fontSize: '$sm',
                    lineHeight: '$md',
                  },
                }}
              >
                Generative Art Vending Machine
              </Heading>
            </CardArtwork>
          </div>
          <Paragraph css={{ margin: '24px 0' }}>
            Dr. Bill has been pioneering the medium of Generative Art since the
            early 70’s. His Plotter Art Collection includes 1/1 NFTs that come
            with original prints made back then. His Generative Art Vending
            Machine is the newest project he’s actively working on. And there’s
            more!
          </Paragraph>
          <MoreLink href={PageNames.ARTWORK.en} content="See all collections" />
        </div>
      </div>
      <div className="hidden md:block col-span-12 md:col-span-6 lg:col-span-7 flex justify-end">
        <CardArtwork
          images={artworks}
          href={`${PageNames.ARTWORK.en}/generative-art-vending-machine`}
          tag="New"
          imageClassName="w-[680px] h-[340px]"
          layout="fill"
          objectFit="contain"
        >
          <Heading
            css={{
              overflow: 'hidden',
              '@xs': {
                fontSize: '$lg',
                lineHeight: '$lg',
              },
              '@sm': {
                fontSize: '$sm',
                lineHeight: '$md',
              },
            }}
          >
            Generative Art Vending Machine
          </Heading>
        </CardArtwork>
      </div>
    </div>
  );
}
