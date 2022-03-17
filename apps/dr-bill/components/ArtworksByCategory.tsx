import {Container} from '@nextui-org/react';
import Breadcrumbs from './Breadcrumbs';
import {PageNames} from '../constants/pageNames';
import {Heading, Paragraph} from './CustomText';
import CardArtwork from './CardArtwork';
import CardRaw from './CardRaw';
import Watermark from './Watermark';

export default function ArtworksByCategory({artworks, category}) {
  const {title, description} = category;
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
            {text: title},
          ]}
        />
        <div className="mt-[100px] mb-[200px]">
          <div className="flex flex-col items-center md:items-start md:grid lg:grid-cols-12 gap-12 mt-[200px]">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 sticky top-10">
              <div className="my-auto">
                <Heading> {title} </Heading>
                <Paragraph css={{marginTop: '24px'}}> {description} </Paragraph>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="columns-2 gap-8 w-full">
                {
                  artworks.map((artwork, index) => (
                    <CardArtwork
                      key={index}
                      className="w-full break-inside-avoid relative !mb-8 !last:mb-0"
                      imageClassName="w-full"
                      images={artwork.image}
                      href="/artworks/generative-art-vending-machine/oblique-cube-composition"
                      layout="responsive"
                      tag="Events">
                      <CardRaw>
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
                      </CardRaw>
                    </CardArtwork>
                  ))
                }
              </div>
            </div>
          </div>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy.
          </Paragraph>
        </div>
      </Container>
    </Watermark>
  )
}
