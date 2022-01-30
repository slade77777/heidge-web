import CustomImage from './CustomImage';

const Hero = () => {
  return (
    <div className="hdgGradient relative">
      <div className="pt-5 lg:pt-16 pb-16 lg:pb-0">
        <div className="relative max-w-5xl top-[-80px] mx-auto hidden lg:block">
          <div className="drop-shadow-xl border-[5px] border-white w-60 h-60 rounded-full bg-purple-900 absolute top-10 right-0 transform rotate-12 flex justify-center items-center">
            <p className="text-white text-[13px] text-center pt-6 px-8 [font-weight:600]">
              Hedgie is an OG project in the NFT space. It was conceived in late
              2017 and launched in spring 2018 on the Ethereum Blockchain. Now
              we are creating a very special final edition:
              <span className="block text-teal-300 font-medium text-lg pt-1">
                OG Hedgies!
              </span>
            </p>
          </div>
        </div>
        <div className="w-full md:hidden text-center">
          <p className="text-white text-center pt-6 px-5">
            Hedgie is an OG project in the NFT space. It was conceived in late
            2017 and launched in spring 2018 on the Ethereum Blockchain. Now we
            are creating a very special final edition:{' '}
            <span className="text-teal-300 font-bold text-xl pt-1">
              OG Hedgies!
            </span>
          </p>
          <CustomImage
            src="/images/carousel/f53f05.png"
            width={280}
            height={300}
            objectFit="contain"
          />
        </div>
        <video playsInline autoPlay muted loop className="hidden md:block">
          <source src="/video/hero-banner.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
