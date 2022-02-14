import Image from 'next/image';

type Props = {
  images: {
    src: string;
    alt?: string;
  }[];
}
export default function Artwork({images}: Props) {
  return (
    <div className={`w-[${334 * images.length}px]`}>
      <div className="flex flex-row">
        {images.map(({src, alt = 'image'}, i) =>
          <div className="relative w-[334px] h-[334px]" key={i}>
            <Image src={src} alt={alt} layout="fill"/>
          </div>,
        )}
      </div>
    </div>
  )
}
