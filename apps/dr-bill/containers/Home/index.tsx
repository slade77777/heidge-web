import {Container, Grid, theme} from '@nextui-org/react';
import Image from 'next/image';
import {Heading, Paragraph} from '../../components/Text';
import MoreLink from '../../components/MoreLink';
import Artwork from '../../components/Card/Artwork';

const artworks = [
  {src: 'https://cdn.discordapp.com/attachments/478474748909846533/942738153758924800/Rectangle_9.png'},
  {src: 'https://cdn.discordapp.com/attachments/478474748909846533/942738153989636116/Rectangle_105.png'},
]

export default function Home() {
  return (
    <Container xl>
      <div className="mt-[200px]">
        <Grid.Container>
          <Grid xs={0} md={6}>
            <div
              className="hidden lg:block w-[320px] h-[320px] md:w-[338px] md:h-[434px] lg:w-[420px] lg:h-[540px] relative float-left">
              <div
                className={`absolute w-full h-full border rotate-[351.77deg] top-0 left-0 border-[${theme.colors.text.value}]`}
                style={{borderColor: theme.colors.text.value}}
              />
              <Image src="/assets/about/avatar.png" layout="fill" alt="avatar"/>
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <div className="my-auto">
              <Heading> Dr. Bill, the OG of Generative Art </Heading>
              <Paragraph css={{marginTop: '24px'}}>
                Dr. Bill Kolomyjec has been involved in Generative Art from the very beginning of the form. As one of
                the
                earliest pioneers of the medium he started making computer art in the early 70’s.
              </Paragraph>
              <MoreLink href="/about" content="Learn more"/>
            </div>
          </Grid>
        </Grid.Container>
        <Grid.Container>
          <Grid xs={12} md={3}>
            <div className="my-auto">
              <Heading> Artworks </Heading>
              <Paragraph css={{marginTop: '24px'}}>
                Dr. Bill has been pioneering the medium of Generative Art since the early 70’s. His Plotter Art
                Collection includes 1/1 NFTs that come with original prints made back then. His Generative Art Vending
                Machine is the newest project he’s actively working on. And there’s more!
              </Paragraph>
              <MoreLink href="/about" content="See all collections"/>
            </div>
          </Grid>
          <Grid xs={0} md={9}>
            <div
              className="hidden lg:block w-[320px] h-[320px] md:w-[338px] md:h-[434px] lg:w-[420px] lg:h-[540px] relative float-left">
              <Artwork images={artworks}/>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </Container>
  )
}
