import { Container } from '@nextui-org/react';
import Breadcrumbs from './Breadcrumbs';
import { PageNames } from '../constants/pageNames';
import { Heading, Paragraph } from './CustomText';
import CardArtwork from './CardArtwork';
import CardRaw from './CardRaw';
import Watermark from './Watermark';
import { ArtDetailType, ArtworkType } from '../types';

export default function ArtworksByCategory({
  artworks,
  category,
}: {
  artworks: ArtworkType[];
  category: ArtDetailType;
}) {
  return (
    <Watermark text={category?.page}>
      <Container md>
        <Breadcrumbs />
        <div className="mt-[100px] mb-[200px]">
          <div className="flex flex-col items-center md:items-start md:grid lg:grid-cols-12 gap-12 mt-[200px]">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 md:sticky md:top-10">
              <div className="my-auto">
                <Heading> {category?.page}</Heading>
                <div>
                  {category?.description.map((text, index) => (
                    <Paragraph css={{ marginTop: '24px' }} key={index}>
                      {text}
                    </Paragraph>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="md:columns-2 gap-8 w-full">
                {artworks?.map((artwork) => (
                  <CardArtwork
                    key={artwork.key}
                    className="w-full break-inside-avoid relative !mb-8 !last:mb-0"
                    imageClassName="w-full"
                    images={[artwork.image]}
                    href={`/${PageNames.ARTWORK.en}/${
                      category.slug
                    }/${artwork.key.toLowerCase()}`}
                    layout="responsive"
                  >
                    <CardRaw>
                      <Heading
                        css={{
                          fontSize: '$base',
                          lineHeight: '$sm',
                          fontWeight: 400,
                          marginBottom: '12px',
                          '@sm': {
                            fontSize: '$base',
                            lineHeight: '$sm',
                          },
                        }}
                      >
                        {' '}
                        {artwork.name}{' '}
                      </Heading>
                      <Paragraph
                        css={{
                          fontSize: '$base',
                          lineHeight: '$md',
                          marginBottom: '12px',
                          '@sm': {
                            fontSize: '$base',
                            lineHeight: '$md',
                          },
                        }}
                      >
                        {' '}
                        {artwork.description}{' '}
                      </Paragraph>
                    </CardRaw>
                  </CardArtwork>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
