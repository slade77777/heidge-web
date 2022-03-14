import {Spacer, Text} from '@nextui-org/react';
import {Heading, Paragraph} from '../../components/Text';
import ArtworkCard from '../../components/Card/ArtworkCard';
import ScheduleCard from '../../components/Card/ScheduleCard';
import AdjacentBtn from '../../components/Button/AdjacentBtn';
import MoreLink from '../../components/MoreLink';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {useRef} from 'react';

SwiperCore.use([Navigation, Pagination]);

const artworks = [
  {src: '/assets/about/show-and-media.png'},
]

export default function ShowAndMedia() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="grid grid-cols-12 md:gap-10 lg:gap-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <Heading> Show & Media </Heading>
        </div>
        <div className="hidden md:block col-span-12 md:col-span-6 lg:col-span-7">
          <div className="flex flex-row gap-5 justify-end">
            <AdjacentBtn buttonType="previous" ref={prevRef}/>
            <AdjacentBtn buttonType="next" ref={nextRef}/>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={swiper => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        <SwiperSlide>
          <div className="grid grid-cols-12 md:gap-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="my-auto">
                <div className="relative mx-auto mt-[50px]">
                  <ArtworkCard
                    images={artworks}
                    className="h-full"
                    imageClassName="h-[334px]"
                    layout="fill"
                    objectFit="cover"
                    tag="Events">
                    <Text css={{lineHeight: '$md', fontWeight: 600}}>
                      Dr. Bill at the NFT exhibition
                      02.07.2023
                    </Text>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                      dolore
                      magna aliqua. Ut enim...
                    </Paragraph>
                  </ArtworkCard>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 flex justify-end">
              <div className="mt-[50px] h-full">
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
                <div className="h-[135px] flex justify-end items-end">
                  <MoreLink href="/about" content="Learn more"/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

