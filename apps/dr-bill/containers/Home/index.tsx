import {Container, Grid} from '@nextui-org/react';
import Image from 'next/image';
import {Heading, Paragraph} from '../../components/Text';


export default function Home() {
  return (
    <Container xl>
      <div className="mt-[200px]">
        <Grid.Container>
          <Grid xs={6}>
            <div
              className="hidden lg:block w-[320px] h-[320px] md:w-[338px] md:h-[434px] lg:w-[420px] lg:h-[540px] relative float-left">
              <Image src="/assets/about/avatar.png" layout="fill" alt="avatar"/>
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
              <Heading> Dr. Bill, the OG of Generative Art </Heading>
              <Paragraph css={{marginTop: '24px'}}>
                Dr. Bill Kolomyjec has been involved in Generative Art from the very beginning of the form. As one of
                the
                earliest pioneers of the medium he started making computer art in the early 70’s.
              </Paragraph>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </Container>
  )
}
