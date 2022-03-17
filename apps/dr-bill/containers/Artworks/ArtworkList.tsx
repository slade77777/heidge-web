import CardArtwork from '../../components/CardArtwork';
import CardRaw from '../../components/CardRaw';
import {Text} from '@nextui-org/react';
import {Paragraph} from '../../components/CustomText';

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
    <div className="grid lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
      <div className="md:col-span-2">
        <CardArtwork
          className="h-full"
          imageClassName="h-[384px]"
          images={first.image}
          layout="fill"
          tag="Events">
          <CardRaw>
            <Text css={{lineHeight: '$md', fontWeight: 600}}>
              Dr. Bill at the NFT exhibition
              02.07.2023
            </Text>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
              magna aliqua. Ut enim...
            </Paragraph>
          </CardRaw>
        </CardArtwork>
      </div>
      {
        rest.map((artwork, index) => (
          <CardArtwork
            key={index}
            className="h-full"
            imageClassName="h-[384px]"
            layout="fill"
            images={artwork.image}
            tag="Events">
            <CardRaw>
              <Text css={{lineHeight: '$md', fontWeight: 600}}> {artwork.title} </Text>
              <Paragraph> {artwork.description} </Paragraph>
            </CardRaw>
          </CardArtwork>
        ))
      }
    </div>
  );
}
