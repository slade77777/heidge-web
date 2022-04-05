import { Container, useTheme } from '@nextui-org/react';
import { Heading } from './CustomText';
import Watermark from './Watermark';
import { useState } from 'react';
import { Content, MediaType } from '../types';
import { classNames } from 'shared/utils';
import Card from './Card';
import BlurImage from './BlurImage';

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

export default function ShowAndMedia({ news }: { news: Content[] }) {
  const [selectedType, setSelectedType] = useState<MediaType>(MediaType.All);
  const [data, setData] = useState(news);
  const { isDark } = useTheme();

  function filterByType(type: MediaType) {
    setSelectedType(type);
    if (type === MediaType.All) {
      setData(news);
      return;
    }
    setData(news.filter((dt) => dt.tags.toLowerCase() === type.toLowerCase()));
  }

  return (
    <Watermark text="Show & Media">
      <Container md>
        <div className="mt-5 lg:mt-[100px] lg:mb-[200px]">
          <Heading css={{ marginBottom: '60px' }}> Show & Media </Heading>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((btn) => (
              <button
                className={classNames(
                  'px-4 py-1 text-sm',
                  selectedType === btn.key
                    ? `${
                        isDark
                          ? 'text-black bg-white border border-white'
                          : 'text-white bg-black border border-black'
                      }`
                    : `${
                        isDark
                          ? 'text-white bg-transparent border border-white'
                          : 'text-black bg-transparent border border-black'
                      }`,
                )}
                key={btn.key}
                onClick={() => filterByType(btn.key)}
              >
                {btn.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            {data.map((media) => (
              <Card
                key={media.id}
                href={media.link}
                isExternalLink
                tag={media.tags}
              >
                <BlurImage src={media.image} />
                <Card.CardTitle>{media.title}</Card.CardTitle>
                <Card.CardBody>{media.text}</Card.CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
