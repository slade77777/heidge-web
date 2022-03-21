import { FC } from "react";
import Image from "next/image";

const EarnSection: FC = () => {
  return (
    <div
      id="earn"
      className="bg-slate-100 w-full mt-8 py-16 flex flex-col items-center"
    >
      <p className="text-teal-400 font-bold text-4xl text-center mb-4">Earn</p>
      <p className="text-center mt-8">
        Trade loot for Curio you can use to buy gear, or spend in the real
        world!
      </p>
      <p className="text-fuchsia-900 font-semibold underline underline-offset-2 text-center mt-2 cursor-pointer">
        <a>Learn more</a>
      </p>
      <div className="w-60 lg:w-96 h-52 lg:h-80 relative mt-12">
        <Image src="/images/curio_coin_img.png" alt="curioImg" layout="fill" />
      </div>
    </div>
  );
};

export default EarnSection;
