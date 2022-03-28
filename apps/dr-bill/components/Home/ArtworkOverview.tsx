import { Heading, Paragraph } from '../CustomText';
import MoreLink from '../MoreLink';
import CardArtwork from '../CardArtwork';
import { PageNames } from '../../constants/pageNames';
import { Content } from '../../types';

// const artworks = [
//   {
//     src: '/v1648114058/DrBill/common/generative_art_thumbnail.png',
//   },
// ];

export default function ArtworkOverview({
  overview,
  artwork,
}: {
  overview: Content;
  artwork: Content;
}) {
  return (
    <div className="grid grid-cols-12 md:gap-10 lg:gap-12 my-[200px]">
      <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <div className="my-auto">
          <Heading>{overview.title}</Heading>
          <div className="md:hidden mt-6">
            <CardArtwork
              images={[{ src: overview.image }]}
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
                {overview.title}
              </Heading>
            </CardArtwork>
          </div>
          <Paragraph css={{ margin: '24px 0' }}>{overview.text}</Paragraph>
          <MoreLink href={PageNames.ARTWORK.en} content="See all collections" />
        </div>
      </div>
      <div className="hidden md:block col-span-12 md:col-span-6 lg:col-span-7 flex justify-end">
        <CardArtwork
          images={[{ src: artwork.image }]}
          href={`${PageNames.ARTWORK.en}/${artwork.slug}`}
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
            {artwork.title}
          </Heading>
        </CardArtwork>
      </div>
    </div>
  );
}
