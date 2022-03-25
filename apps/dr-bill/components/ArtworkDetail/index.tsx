import { Container } from '@nextui-org/react';
import Breadcrumbs from '../Breadcrumbs';
import { PageNames } from '../../constants/pageNames';
import { Heading, Paragraph } from '../CustomText';
import NextImage from '../NextImage';
import SquareBtn from '../Button/SquareBtn';
import GeneratedArtworkList from './GeneratedArtworkList';
import Watermark from '../Watermark';
import { ArtSlugType, ArtworkType } from '../../types';

export default function ArtworkDetail({
  artwork,
  categorySlug,
}: {
  artwork: ArtworkType;
  categorySlug?: ArtSlugType;
}) {
  if (!artwork) {
    return null;
  }
  return (
    <Watermark text={artwork.name}>
      <Container md>
        <Breadcrumbs
          data={[
            {
              text: 'Home',
              href: '/',
            },
            { text: 'Artworks', href: `${PageNames.ARTWORK.en}` },
            {
              text: 'Generative Art Vending Machine',
              href: `/${PageNames.ARTWORK.en}/${categorySlug}`,
            },
            {
              text: artwork.name,
              href: `/${
                PageNames.ARTWORK.en
              }/${categorySlug}/${artwork.key.toLowerCase()}`,
            },
          ]}
        />
        <div className="mt-[100px] mb-[200px]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Heading css={{ marginBottom: '30px' }}>{artwork.name}</Heading>
              {!artwork.fullDescription.length ? (
                <Paragraph
                  css={{
                    '@xs': { display: 'block !important' },
                    display: 'none',
                  }}
                >
                  {artwork.description}
                </Paragraph>
              ) : (
                <div className="space-y-3">
                  {artwork.fullDescription.map((p, idx) => (
                    <Paragraph
                      key={idx}
                      css={{
                        '@xs': { display: 'block !important' },
                        display: 'none',
                      }}
                    >
                      {p}
                    </Paragraph>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full h-auto">
              <div>
                <NextImage src={artwork.image.src} alt="123" />
                <div className="flex flex-row justify-between gap-2">
                  <SquareBtn css={{ flex: 1 }}> Generate </SquareBtn>
                  <SquareBtn css={{ flex: 1 }}> Save </SquareBtn>
                  <SquareBtn css={{ flex: 1 }}> Mint </SquareBtn>
                </div>
                <GeneratedArtworkList />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
