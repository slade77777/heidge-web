import Image, { ImageProps, ImageLoader, ImageLoaderProps } from 'next/image';

const customLoader: ImageLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

const CustomImage = (props: ImageProps) => {
  if (!props.src)
    return (
      <div
        style={{ width: props.width, height: props.height }}
        className="border border-gray-100 flex items-center justify-center text-gray-100"
      >
        Photo
      </div>
    );
  return <Image loader={customLoader} {...props} alt={props.alt} />;
};
export default CustomImage;
