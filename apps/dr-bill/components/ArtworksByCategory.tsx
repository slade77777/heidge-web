import { Container } from '@nextui-org/react';
import { Heading, Paragraph } from './CustomText';
import CardArtwork from './CardArtwork';
import CardRaw from './CardRaw';
import Watermark from './Watermark';
import { Content } from '../types';

export default function ArtworksByCategory({
  artworks,
  category,
}: {
  artworks: Content[];
  category: Content;
}) {
  if (!category) return null;

  return (
    <Watermark text={category.title}>
      <Container md>
        <div className="mt-[100px] mb-[200px]">
          <div className="flex flex-col items-center md:items-start md:grid lg:grid-cols-12 gap-12 mt-[200px]">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 md:sticky md:top-10">
              <div className="my-auto">
                <Heading> {category.title}</Heading>
                <div>
                  <Paragraph className="mt-3">{category.text}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="md:columns-2 gap-8 w-full">
                {artworks?.map((artwork) => (
                  <CardArtwork
                    key={artwork.id}
                    className="w-full break-inside-avoid relative !mb-8 !last:mb-0"
                    imageClassName="w-full"
                    images={[{ src: artwork.image }]}
                    href={`/artworks/${artwork.content_type}/${artwork.slug}`}
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
                        {artwork.title}
                      </Heading>
                      <Paragraph
                        className="line-clamp-5"
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
                        {artwork.text}
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
