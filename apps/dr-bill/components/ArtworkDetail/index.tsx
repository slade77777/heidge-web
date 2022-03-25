import { Container } from '@nextui-org/react';
import Breadcrumbs from '../Breadcrumbs';
import { PageNames } from '../../constants/pageNames';
import { Heading, Paragraph } from '../CustomText';
import NextImage from '../NextImage';
import SquareBtn from '../Button/SquareBtn';
import GeneratedArtworkList from './GeneratedArtworkList';
import Watermark from '../Watermark';
import { ArtSlugType, ArtworkType } from '../../types';
import { toast } from 'shared';
import { useState } from 'react';
import { blobToBase64, getRandomNumber } from '../../utils';

export default function ArtworkDetail({
  artwork,
  categorySlug,
}: {
  artwork: ArtworkType;
  categorySlug?: ArtSlugType;
}) {
  const [generatedImages, setGeneratedImages] = useState({});

  if (!artwork) {
    return null;
  }

  function generateImages(id: number) {
    const random = getRandomNumber(1, 999);
    fetch(`/api/art-generation?id=${id}&random=${random}`, {
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    })
      .then((blob) => blobToBase64(blob))
      .then((base64) => {
        setGeneratedImages((prevState) => ({
          ...prevState,
          [random]: base64,
        }));
      })
      .catch((err) => {
        toast.error('error');
      });
  }

  console.log('generatedImages', generatedImages);

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
