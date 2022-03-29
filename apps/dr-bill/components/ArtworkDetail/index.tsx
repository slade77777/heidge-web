import { Container } from '@nextui-org/react';
import Breadcrumbs from '../Breadcrumbs';
import { PageNames } from '../../constants/pageNames';
import { Heading, Paragraph } from '../CustomText';
import NextImage from '../NextImage';
import SquareBtn from '../Button/SquareBtn';
import GeneratedArtworkList from './GeneratedArtworkList';
import Watermark from '../Watermark';
import { Content } from '../../types';
import { useState } from 'react';
import { getRandomNumber } from '../../utils';

export default function ArtworkDetail({
  artwork,
  categorySlug,
}: {
  artwork: Content;
  categorySlug?: string;
}) {
  const [generatedImages, setGeneratedImages] = useState({});

  if (!artwork) {
    return null;
  }

  function generateImages(id: number) {
    const random = getRandomNumber(1, 999);
    setGeneratedImages((prevState) => ({
      ...prevState,
      [random]: `${process.env.NEXT_PUBLIC_API_URL}/api/generator/${id}-${random}`,
    }));
  }

  return (
    <Watermark text={artwork.title}>
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
              text: artwork.title,
              href: `/${PageNames.ARTWORK.en}/${categorySlug}/${artwork.slug}`,
            },
          ]}
        />
        <div className="mt-[100px] mb-[200px]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Heading css={{ marginBottom: '30px' }}>{artwork.title}</Heading>
              <Paragraph
                css={{
                  '@xs': { display: 'block !important' },
                  display: 'none',
                }}
              >
                {artwork.text}
              </Paragraph>
            </div>
            <div className="w-full h-auto">
              <div>
                <NextImage src={artwork.image} alt="123" />
                {categorySlug === 'generative-art-vending-machine' && (
                  <>
                    <div className="flex flex-row justify-between gap-2">
                      <SquareBtn
                        css={{ flex: 1 }}
                        onClick={() =>
                          artwork.id ? generateImages(artwork.id) : undefined
                        }
                      >
                        {' '}
                        Generate{' '}
                      </SquareBtn>
                      <SquareBtn css={{ flex: 1 }}> Save </SquareBtn>
                      <SquareBtn css={{ flex: 1 }} disabled>
                        {' '}
                        Mint{' '}
                      </SquareBtn>
                    </div>
                    <GeneratedArtworkList generatedImages={generatedImages} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
