import { Container } from '@nextui-org/react';
import { Heading, Paragraph } from './CustomText';
import Watermark from './Watermark';
import { Content } from '../types';
import Card from './Card';
import BlurImage from './BlurImage';

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
        <div className="mt-8 lg:mt-24 mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-[40%,auto] gap-10">
            <div className="">
              <div className="my-auto">
                <Heading> {category.title}</Heading>
                <div>
                  <Paragraph className="mt-3">{category.text}</Paragraph>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {artworks?.map((artwork) => (
                <Card
                  href={
                    artwork.link ||
                    `/artworks/${artwork.content_type}/${artwork.slug}`
                  }
                  key={artwork.id}
                  isExternalLink={!!artwork.link}
                >
                  <BlurImage src={artwork.image} />
                  <Card.CardTitle>{artwork.title}</Card.CardTitle>
                  <Card.CardBody>
                    <div className="line-clamp-5">{artwork.text}</div>
                  </Card.CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Watermark>
  );
}
