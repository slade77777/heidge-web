import { FC, memo } from "react";
import { BusinessType } from "../../types/business";

const BusinessItem: FC<{ item: BusinessType }> = ({ item }) => {
  return (
    <div className="w-full lg:w-1/4 lg:px-4 flex flex-col items-center mb-8 cursor-pointer">
      <img
        src={item.imageURL}
        alt={item.name}
        className="w-48 h-48 rounded-3xl"
      />
      <p className="text-sm my-2 font-semibold text-center">{item.name}</p>
      <p className="text-center">{item.description}</p>
    </div>
  );
};

export default memo(BusinessItem);
