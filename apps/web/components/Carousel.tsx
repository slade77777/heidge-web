import { FC, memo, ReactNode } from "react";
import "swiper/css";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="hidden lg:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </div>
      <div className="lg:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination
          modules={[Pagination]}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default memo(Carousel);
