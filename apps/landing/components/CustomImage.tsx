import Image, { ImageProps } from 'next/image';

const myLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 90}`;
};

const CustomImage = (props: ImageProps) => {
  return <Image loader={myLoader} {...props} />;
};

export default CustomImage;
