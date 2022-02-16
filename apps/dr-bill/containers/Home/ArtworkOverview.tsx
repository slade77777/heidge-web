import {Grid} from '@nextui-org/react';
import {Heading, Paragraph} from '../../components/Text';
import MoreLink from '../../components/MoreLink';
import Artwork from '../../components/Card/Artwork';

const artworks = [
  {src: 'https://cdn.discordapp.com/attachments/478474748909846533/942738153758924800/Rectangle_9.png'},
  {src: 'https://cdn.discordapp.com/attachments/478474748909846533/942738153989636116/Rectangle_105.png'},
]

const customGridStyle = {
  '@xsMax': {
    maxWidth: '100% !important',
    flexBasis: '100% !important',
  },
}

export default function ArtworkOverview() {
  return (
    <Grid.Container css={{margin: '200px auto'}} justify="center">
      <Grid xs={6} sm={5} css={customGridStyle}>
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
      <Grid xs={6} sm={7} css={customGridStyle}>
        <div
          className="relative mx-auto">
          <Artwork images={artworks} tag="New">
            <Heading css={{
              '@xs': {
                fontSize: '$lg',
                lineHeight: '$lg',
              },
              '@sm': {
                fontSize: '$sm',
                lineHeight: '$md',
                padding: '26px 34px',
              },
            }}>
              Generative Art Vending Machine
            </Heading>
          </Artwork>
        </div>
      </Grid>
    </Grid.Container>
  );
};

