import { Text } from '@nextui-org/react';
import { Heading, Paragraph } from '../CustomText';
import CardArtwork from '../CardArtwork';
import CardSchedule from '../CardSchedule';
import AdjacentBtn from '../Button/AdjacentBtn';
import MoreLink from '../MoreLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
import { Content } from '../../types';

SwiperCore.use([Navigation, Pagination]);

export default function ShowAndMedia({
  info,
  media,
}: {
  info: Content;
  media: Content[];
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="grid grid-cols-12 md:gap-10 lg:gap-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <Heading> {info.title}</Heading>
        </div>
        <div className="hidden col-span-12 md:col-span-6 lg:col-span-7">
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
                    images={[{ src: media[0].image }]}
                    href={media[0].link}
                    isExternalLink
                    className="h-full"
                    imageClassName=""
                    tag="Events"
                  >
                    <Text css={{ lineHeight: '$md', fontWeight: 600 }}>
                      {media[0].title}
                    </Text>
                    <Paragraph>{media[0].text}</Paragraph>
                  </CardArtwork>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 flex justify-end">
              <div className="mt-[50px] h-full space-y-5">
                {media.slice(1).map((m) => (
                  <CardSchedule
                    key={m.id}
                    href={m.link}
                    isExternal
                    tag={m.tags}
                    title={m.title}
                    content={m.text}
                  />
                ))}
                <div className="h-[135px] flex justify-end items-end">
                  <MoreLink href="/show-and-media" content="View all" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
