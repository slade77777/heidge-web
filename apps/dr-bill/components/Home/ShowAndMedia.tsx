import { Spacer, Text } from '@nextui-org/react';
import { Heading, Paragraph } from '../CustomText';
import CardArtwork from '../CardArtwork';
import CardSchedule from '../CardSchedule';
import AdjacentBtn from '../Button/AdjacentBtn';
import MoreLink from '../MoreLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
import { MAGAZINE_LINK, YOUTUBE_LINK_RETRO } from '../../constants/common';

SwiperCore.use([Navigation, Pagination]);

const artworks = [
  {
    src: 'https://res.cloudinary.com/suborg/image/upload/w_800/v1648110595/DrBill/common/Post_Instagram_Facebook__1080x1080_krhq1a.png',
  },
];

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
            <AdjacentBtn buttonType="previous" ref={prevRef} />
            <AdjacentBtn buttonType="next" ref={nextRef} />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
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
                  <CardArtwork
                    images={artworks}
                    href="https://nft-art.eventbrite.ca"
                    isExternalLink
                    className="h-full"
                    imageClassName=""
                    tag="Events"
                  >
                    <Text css={{ lineHeight: '$md', fontWeight: 600 }}>
                      NFT Art - Spring Mixer 03.26.2022
                    </Text>
                    <Paragraph>
                      My artwork will be exhibited on digital screens at this
                      NFT Art gathering in Toronto on March 26, 2022
                    </Paragraph>
                  </CardArtwork>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 flex justify-end">
              <div className="mt-[50px] h-full">
                <CardSchedule
                  href={MAGAZINE_LINK}
                  isExternal
                  tag="Article"
                  title="Master Drawings New York 01.05.2022"
                  content="Concept behind ‘shotgun’ art approaches 1940s abstract expressionism"
                />
                <Spacer y={1} />
                <CardSchedule
                  tag="Events"
                  title="Generative Art Retrospective 11.20.2021"
                  href={YOUTUBE_LINK_RETRO}
                  isExternal
                  content="Dr. Bill takes the audience of an NFT Art event in Toronto on the generative art journey, from the 70’s until now"
                />
                <div className="h-[135px] flex justify-end items-end">
                  <MoreLink href="/about" content="Learn more" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
