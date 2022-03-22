import { FC, memo } from "react";
import { BusinessType } from "../../types/business";
import BusinessItem from "./BusinessItem";

const SpendSection: FC<{ businesses: Array<BusinessType> }> = ({
  businesses,
}) => {
  return (
    <div id="spend" className="w-full my-12 lg:max-w-[1200px]">
      <p className="text-teal-400 font-bold text-4xl text-center mb-4">Spend</p>
      <p className="text-center">
        Spend your Curio on products and perks at Hedgie-approved businesses!
      </p>
      <p className="text-fuchsia-900 font-semibold underline underline-offset-2 text-center mt-2 cursor-pointer">
        <a>Learn more</a>
      </p>
      <div className="w-full flex flex-col mt-12 lg:flex-row lg:flex-wrap">
        {businesses &&
          businesses.map((item, index) => (
            <BusinessItem item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default memo(SpendSection);
