import CardArtwork from '../CardArtwork';
import CardRaw from '../CardRaw';
import {Text} from '@nextui-org/react';
import {Paragraph} from '../CustomText';
import {PageNames} from '../../constants/pageNames';

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
    image: Array.from(Array(29).keys()).map((_, i) => ({src: `https://res.cloudinary.com/suborg/image/upload/v1647255699/DrBill/1920/plotter-${i + 1}.png`})),
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo vehicula fringilla. In
              tincidunt augue tellus, et maximus eros elementum et. Pellentesque pellentesque pharetra cursus. Vivamus
              at elementum nisi. Integer ultrices tortor quis metus lacinia scelerisque. Integer tincidunt nulla sed
              vulputate mattis.
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
            tag="Events"
            href={`${PageNames.ARTWORK.en}/${artwork.title.replaceAll(' ', '-').toLowerCase()}`}
          >
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
