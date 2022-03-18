import {Container} from '@nextui-org/react';
import Breadcrumbs from './Breadcrumbs';
import {PageNames} from '../constants/pageNames';
import {Heading, Paragraph} from './CustomText';
import CardArtwork from './CardArtwork';
import CardRaw from './CardRaw';
import SquareBtn from './Button/SquareBtn';
import Watermark from './Watermark';

const artworks = [
  {
    title: 'Higher',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [{src: 'https://cdn.discordapp.com/attachments/478474748909846533/944649009551773777/unknown.png'}],
  },
  {
    title: 'Plotter Art',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [{src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153274716676096/unknown.png'}],
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
    title: 'Plotter Art',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [{src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153274716676096/unknown.png'}],
  },
  {
    title: 'HEN',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    image: [{src: 'https://cdn.discordapp.com/attachments/748042111148097556/944153275014463488/unknown.png'}],
  },
]

export default function ShowAndMedia() {
  return (
    <Watermark text="Show & Media"><Container md>
      <Breadcrumbs
        data={[
          {
            text: 'Home',
            href: '/',
          },
          {text: 'Show & Media', href: `${PageNames.SHOW_AND_MEDIA.en}`},
        ]}
      />
      <div className="mt-[100px] mb-[200px]">
        <Heading css={{marginBottom: '80px'}}> Show & Media </Heading>
        <div className="flex flex-row gap-2 mb-10">
          <SquareBtn css={{width: '160px', height: '44px'}}> All materials </SquareBtn>
          <SquareBtn css={{width: '160px', height: '44px'}}> Events </SquareBtn>
          <SquareBtn css={{width: '160px', height: '44px'}}> Promotions </SquareBtn>
          <SquareBtn css={{width: '160px', height: '44px'}}> Performances </SquareBtn>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-10 w-full">
          {
            artworks.map((artwork, index) => (
              <CardArtwork
                key={index}
                className="w-full break-inside-avoid relative !mb-8 !last:mb-0"
                imageClassName="w-full"
                images={artwork.image}
                href="/show-and-media/dr-bill-at-the-nft-exhibition-02.07.2023"
                layout="responsive"
                tag="Events">
                <CardRaw>
                  <Heading css={{
                    fontFamily: '$p',
                    fontSize: '$xs',
                    lineHeight: '$sm',
                    fontWeight: 600,
                    marginBottom: '12px',
                    '@xs': {
                      fontSize: '$base !important',
                      lineHeight: '$md !important',
                    },
                  }}> {artwork.title} </Heading>
                  <Paragraph css={{
                    fontSize: '$base',
                    lineHeight: '$md',
                    marginBottom: '12px',
                    '@sm': {
                      fontSize: '$base',
                      lineHeight: '$md',
                    },
                  }}> {artwork.description} </Paragraph>
                </CardRaw>
              </CardArtwork>
            ))
          }
        </div>
      </div>
    </Container></Watermark>
  )
}
