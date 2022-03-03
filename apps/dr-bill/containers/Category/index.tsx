import {Container} from '@nextui-org/react';
import Breadcrumbs from '../../components/Breadcrumbs';
import {PageNames} from '../../constants/pageNames';
import {Heading, Paragraph} from '../../components/Text';
import MoreLink from '../../components/MoreLink';
import ArtworkCard from '../../components/Card/ArtworkCard';
import RawCard from '../../components/Card/RawCard';
import Watermark from '../../components/Watermark';

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

export default function Category() {
  return (
    <Watermark text="Generative Art Vending Machine">
      <Container md>
        <Breadcrumbs
          data={[
            {
              text: 'Home',
              href: '/',
            },
            {text: 'Artworks', href: `${PageNames.ARTWORK.en}`},
            {text: 'Generative Art Vending Machine', href: `generative-art-vending-machine`},
          ]}
        />
        <div className="mt-[100px] mb-[200px]">
          <div className="flex flex-col items-center md:items-start md:grid lg:grid-cols-12 gap-12 mt-[200px]">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="my-auto">
                <Heading> Generative Art Vending Machine </Heading>
                <Paragraph css={{marginTop: '24px'}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's
                  standard dummy text ever since the 1500s, when an unknown printer.
                </Paragraph>
                <MoreLink href="/about" content="See all collections"/>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="columns-2 gap-8 w-full">
                {
                  artworks.map((artwork, index) => (
                    <ArtworkCard
                      key={index}
                      className="w-full break-inside-avoid relative !mb-8 !last:mb-0"
                      imageClassName="w-full"
                      images={artwork.image}
                      href="/artworks/generative-art-vending-machine/oblique-cube-composition"
                      layout="responsive"
                      tag="Events">
                      <RawCard>
                        <Heading css={{
                          fontSize: '$base',
                          lineHeight: '$sm',
                          fontWeight: 400,
                          marginBottom: '12px',
                          '@sm': {
                            fontSize: '$base',
                            lineHeight: '$sm',
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
                      </RawCard>
                    </ArtworkCard>
                  ))
                }
              </div>
            </div>
          </div>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy.
          </Paragraph>
        </div>
      </Container>
    </Watermark>
  )
}
