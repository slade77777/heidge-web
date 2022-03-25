import { FC, memo } from "react";
import { AnnouncementType } from "../../types/announcement";

const Announcement: FC<{ data: AnnouncementType }> = ({ data }) => {
  return (
    <div className="mb-12 flex flex-col lg:flex-row-reverse h-[500px] lg:h-72 cursor-pointer lg:px-12">
      <img
        src={data.bannerURL}
        className="w-full h-96 lg:h-72 object-cover"
        alt={data.title}
      />
      <div className="bg-slate-200 px-4 py-4 lg:w-2/4 h-full">
        <p className="text-teal-400 font-semibold text-xl my-2">{data.title}</p>
        <p className="line-clamp-8 text-sm">{data.body}</p>
      </div>
    </div>
  );
};

export default memo(Announcement);
