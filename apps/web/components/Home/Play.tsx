import { FC, memo } from "react";
import { WorldType } from "../../types/world";

const Play: FC<{ data: WorldType }> = ({ data }) => {
  return (
    <div className="mb-12 lg:px-12">
      <img
        src={data.imageURL}
        className={"w-full h-72 lg:h-[500px]"}
        alt={data.name}
      />
    </div>
  );
};

export default memo(Play);
