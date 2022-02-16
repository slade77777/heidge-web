import {Grid, theme} from '@nextui-org/react';
import Image from 'next/image';
import {Heading, Paragraph} from '../../components/Text';
import MoreLink from '../../components/MoreLink';

const customGridStyle = {
  '@xsMax': {
    maxWidth: '100% !important',
    flexBasis: '100% !important',
  },
}

export default function Introduction() {
  return (
    <Grid.Container css={{margin: '200px auto'}} justify="center">
      <Grid xs={6} sm={5} css={customGridStyle}>
        <div
          className="w-full aspect-h-1 aspect-w-1 aspect-h-5 aspect-w-4 relative md:mr-[50px]">
          <div
            className={`hidden md:block absolute w-full h-full border rotate-[351.77deg] top-0 left-0 border-[${theme.colors.text.value}]`}
            style={{borderColor: theme.colors.text.value}}
          />
          <Image src="/assets/about/avatar.png" layout="fill" alt="avatar" objectFit="cover"/>
        </div>
      </Grid>
      <Grid xs={6} sm={7} css={customGridStyle}>
        <div>
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
  )
}
