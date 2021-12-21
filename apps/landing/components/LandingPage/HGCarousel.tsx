import React from 'react';
import Image from 'next/image';

const IMAGES = [
  '/images/hedgie.png',
  '/images/hedgie-2.png',
  '/images/hedgie.png',
  '/images/hedgie-2.png',
];
const HGCarousel = () => {
  return (
    <div className="flex overflow-x-auto">
      {IMAGES.map((img) => (
        <img key={img} src={img} width={220} loading="lazy" height={250} />
      ))}
    </div>
  );
};

export default HGCarousel;
