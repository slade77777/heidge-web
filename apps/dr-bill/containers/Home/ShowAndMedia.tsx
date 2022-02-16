import {Text, Grid, Spacer} from '@nextui-org/react';
import {Heading, Paragraph} from '../../components/Text';
import Artwork from '../../components/Card/Artwork';
import ScheduleCard from '../../components/Card/ScheduleCard';

const customGridStyle = {
  '@xsMax': {
    maxWidth: '100% !important',
    flexBasis: '100% !important',
  },
}

const artworks = [
  {src: 'https://cdn.discordapp.com/attachments/478474748909846533/942738153758924800/Rectangle_9.png'},
]

export default function ShowAndMedia() {
  return (
    <Grid.Container css={{margin: '200px auto'}} justify="center">
      <Grid xs={6} sm={5} css={customGridStyle}>
        <div className="my-auto">
          <Heading> Show & Media </Heading>
          <div
            className="relative mx-auto mt-[50px]">
            <Artwork images={artworks} tag="Events">
              <Text css={{lineHeight: '$md', fontWeight: 600}}>
              Dr. Bill at the NFT exhibition
              02.07.2023
              </Text>
              <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
              magna aliqua. Ut enim...
              </Paragraph>
            </Artwork>
          </div>
        </div>
      </Grid>
      <Grid xs={6} sm={7} css={customGridStyle}>
        <div className="ml-[50px]">
          <Heading> Show & Media </Heading>
          <div
            className="mt-[50px]">
            <ScheduleCard
              tag="Promotions"
              title="Master Drawings New York 01.05.2022"
              content="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua..."
              />
            <Spacer y={1}/>
            <ScheduleCard
              tag="Events"
              title="Master Drawings New York 01.05.2022"
              content="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua..."
              />
          </div>
        </div>
      </Grid>
    </Grid.Container>
  );
};

