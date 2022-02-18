import ArtworkCard from '../../components/Card/ArtworkCard';
import RawCard from '../../components/Card/RawCard';
import {Text} from '@nextui-org/react';
import {Paragraph} from '../../components/Text';

const artworks = [
  {
    title: 'Generative Art Vending Machine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image:
      [{src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275551338517/unknown.png'},
        {src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275819778098/unknown.png'}],
  },
  {
    title: 'Plotter Art',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [{src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153274716676096/unknown.png'}],
  },
  {
    title: 'HEN',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [{src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275014463488/unknown.png'}],
  },
  {
    title: 'Vending Machine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [{src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275232563260/unknown.png'}],
  },
  {
    title: 'LovGen',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [{src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275014463488/unknown.png'}],
  },
]

export default function ArtworkList() {
  const [first, ...rest] = artworks;
  return (
    <div className="grid lg:grid-cols-3 lg:gap-10">
      <div className="col-span-2">
        <ArtworkCard
          className="max-w-full h-full"
          imageClassName="w-[668px]"
          images={first.image}
          tag="Events">
          <RawCard>
            <Text css={{lineHeight: '$md', fontWeight: 600}}>
              Dr. Bill at the NFT exhibition
              02.07.2023
            </Text>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
              magna aliqua. Ut enim...
            </Paragraph>
          </RawCard>
        </ArtworkCard>
      </div>
      {
        rest.map((artwork, index) => (
          <ArtworkCard
            key={index}
            className="max-w-[490px]"
            imageClassName="w-[490px]"
            images={artwork.image}
            tag="Events">
            <RawCard>
              <Text css={{lineHeight: '$md', fontWeight: 600}}> {artwork.title} </Text>
              <Paragraph> {artwork.description} </Paragraph>
            </RawCard>
          </ArtworkCard>
        ))
      }
    </div>
  );
}
