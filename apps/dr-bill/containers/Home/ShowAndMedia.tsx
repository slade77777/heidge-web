import {Spacer, Text} from '@nextui-org/react';
import {Heading, Paragraph} from '../../components/Text';
import Artwork from '../../components/Card/Artwork';
import ScheduleCard from '../../components/Card/ScheduleCard';
import AdjacentBtn from '../../components/Button/AdjacentBtn';
import MoreLink from '../../components/MoreLink';
import RawCard from '../../components/Card/RawCard';


const artworks = [
  {src: '/assets/about/show-and-media.png'},
]

export default function ShowAndMedia() {
  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <Heading> Show & Media </Heading>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-7">
        <div className="flex flex-row gap-5 justify-end">
          <AdjacentBtn buttonType="previous"/>
          <AdjacentBtn buttonType="next"/>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <div className="my-auto">
          <div className="relative mx-auto mt-[50px]">
            <Artwork images={artworks} tag="Events">
              <RawCard>
                <Text css={{lineHeight: '$md', fontWeight: 600}}>
                  Dr. Bill at the NFT exhibition
                  02.07.2023
                </Text>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                  magna aliqua. Ut enim...
                </Paragraph>
              </RawCard>
            </Artwork>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-7">
        <div className="mt-[50px]">
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
          <div className="relative right-0 bottom-0">
            <MoreLink href="/about" content="Learn more"/>
          </div>
        </div>
      </div>
    </div>
  );
};

