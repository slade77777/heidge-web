import { FC, memo } from "react";
import { AnnouncementType } from "../../types/announcement";
import Announcement from "./Announcement";
import { SwiperSlide } from "swiper/react";
import Carousel from "../Carousel";

const Announcements: FC<{ announcements: Array<AnnouncementType> }> = ({
  announcements,
}) => {
  if (!announcements?.length) return null;
  return (
    <div className="w-full lg:max-w-[900px] px-2 py-4">
      <p className="text-teal-400 font-bold text-4xl text-center mb-4">
        Announcements
      </p>
      {announcements.length === 1 ? (
        <Announcement data={announcements[0]} />
      ) : (
        <Carousel>
          {announcements.map((item, index) => (
            <SwiperSlide key={index}>
              <Announcement data={item} />
            </SwiperSlide>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default memo(Announcements);
