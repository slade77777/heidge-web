import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Title from '../../common/Title';
import CollectionContent from './CollectionContent';
import Arrow from '../../common/icons/Arrow';
import useScreen from '../../hooks/useScreen';
import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { classNames } from '../../utils';

SwiperCore.use([Navigation, Pagination]);

const Collection = () => {
  const { isMobile } = useScreen();
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <div className="py-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-x-5">
        <div className="place-self-right px-4 lg:px-0">
          <Title>The OG Hedgies (the final) collection</Title>
          <CollectionContent />
        </div>
        <div className="flex items-center md:max-w-3xl lg:w-full">
          <button className="hidden lg:block arrow-next group">
            <Arrow
              className={classNames(
                'w-4 lg:w-5 text-teal-400 group-hover:text-hgPurple',
                selectedIndex === 3 ? 'text-slate-300' : 'text-teal-400',
              )}
            />
          </button>
          <div className="w-full py-3">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              pagination={{ clickable: true }}
              onSlideChange={(swiper: SwiperClass) =>
                setSelectedIndex(swiper.activeIndex + 1)
              }
              navigation={{
                nextEl: '.arrow-next',
                prevEl: '.arrow-prev',
              }}
            >
              {[
                '/images/hedgie.png',
                '/images/hedgie-2.png',
                '/images/hedgie.png',
                '/images/hedgie-2.png',
              ].map((img, index) => (
                <SwiperSlide key={index} className="first:pl-2">
                  <Image
                    src={img}
                    width={240}
                    height={310}
                    objectFit="contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            className="hidden lg:block arrow-prev group"
            disabled={selectedIndex === 1}
          >
            <Arrow
              className={classNames(
                'w-4 lg:w-5 group-hover:text-hgPurple transform rotate-180',
                selectedIndex === 1 ? 'text-slate-300' : 'text-teal-400',
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
