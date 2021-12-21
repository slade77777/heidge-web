import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hdgGradient">
      <div className="lg:bg-[url('/images/bg-stars.png')] bg-no-repeat bg-bottom">
        <div className="mx-auto max-w-5xl">
          <div className="text-white text-center py-20">
            <p className="px-5 md:px-3 lg:px-0 mx-auto max-w-xl lg:max-w-3xl">
              Hedgie is one of the OG projects in the NFT space. It was
              conceived in late 2017 and launched in 2018 on the Ethereum
              Blockchain. Now we are creating a very special collection: OG
              Hedgies.
            </p>
            <div className="pt-10">
              <Image
                src="/images/hero-banner.png"
                width={649}
                height={343}
                objectFit="contain"
                alt="hero banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
