import { Container } from '@nextui-org/react';
import { Heading, Paragraph } from './CustomText';
import CardArtwork from './CardArtwork';
import CardRaw from './CardRaw';
import Watermark from './Watermark';
import { SHOW_AND_MEDIA } from '../constants/mediaAndShow';
import { useState } from 'react';
import { MediaType } from '../types';
import { classNames } from 'shared/utils';

const filters: { key: MediaType; title: string }[] = [
  {
    key: MediaType.All,
    title: 'All materials',
  },
  {
    key: MediaType.Event,
    title: 'Events',
  },
  {
    key: MediaType.Article,
    title: 'Articles',
  },
  {
    key: MediaType.Video,
    title: 'Video',
  },
];

export default function ShowAndMedia() {
  const [selectedType, setSelectedType] = useState<MediaType>(MediaType.All);
  const [data, setData] = useState(SHOW_AND_MEDIA);

  function filterByType(type: MediaType) {
    setSelectedType(type);
    if (type === MediaType.All) {
      setData(SHOW_AND_MEDIA);
      return;
    }
    setData(SHOW_AND_MEDIA.filter((dt) => dt.label === type));
  }

  return (
    <Watermark text="Show & Media">
      <Container md>
        <div className="mt-[100px] mb-[200px]">
          <Heading css={{ marginBottom: '80px' }}> Show & Media </Heading>
          <div className="flex flex-row gap-2 mb-10">
            {filters.map((btn) => (
              <button
                className={classNames(
                  'px-4 py-1',
                  selectedType === btn.key
                    ? 'text-white bg-black border border-black'
                    : 'text-black bg-transparent border border-black',
                )}
                key={btn.key}
                onClick={() => filterByType(btn.key)}
              >
                {btn.title}
              </button>
            ))}
          </div>
          <div className="md:columns-2 lg:columns-3 gap-10 w-full">
            {data.map((media) => (
              <CardArtwork
                key={media.key}
                className="w-full break-inside-avoid relative !mb-8 !last:mb-0"
                imageClassName="w-full"
                images={[media.image]}
                href={media.href}
                isExternalLink
                layout="responsive"
                tag={media.label}
              >
                <CardRaw>
                  <Heading
                    css={{
                      fontFamily: '$p',
                      fontSize: '$xs',
                      lineHeight: '$sm',
                      fontWeight: 600,
                      marginBottom: '12px',
                      '@xs': {
                        fontSize: '$base !important',
                        lineHeight: '$md !important',
                      },
                    }}
                  >
                    {' '}
                    {media.title}{' '}
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
                    {media.description}{' '}
                  </Paragraph>
                </CardRaw>
              </CardArtwork>
            ))}
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
