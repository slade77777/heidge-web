import Link from "next/link";
import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const EarnSection = () => {
  return (
    <div
      className="h-screen relative overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(./images/earn-money-bg.jpg)" }}
    >
      <div className="relative h-full flex items-center">
        <div className="flex w-full h-full">
          <div className="flex justify-center items-center flex-col min-w-[45%] relative">
            <div className="flex justify-center flex-col w-96 max-w-[80%] mt-12">
              <div className="text-h_cyan-100 text-xl md:text-4xl font-bold">
                You Earn it!
              </div>
              <div className="mt-4 mb-4 font-bold text-xs md:text-lg">
                Spend your hard earned Curio at our partner businesses!
              </div>
              <div className="grid gap-3 grid-cols-3">
                <img
                  src="./images/logo_HODL_large.png"
                  className="w-24 h-24 rounded-3xl"
                />
                <img
                  src="./images/logo_uptownbrie_LARGE.png"
                  className="w-24 h-24 rounded-3xl"
                />
                <img
                  src="./images/logo_jules_cafe_LARGE.png"
                  className="w-24 h-24 rounded-3xl"
                />
              </div>
              <div className="mt-8">
                <Link href="/businesses">
                  <div className="bg-[#61285d] text-white px-4 py-2 rounded-md w-fit cursor-pointer hover:bg-[#491d47] transition-all">
                    View all businesses
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnSection;
