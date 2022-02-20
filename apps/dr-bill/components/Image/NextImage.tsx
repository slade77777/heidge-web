import {useEffect, useState} from 'react';
import NImage from 'next/image';

const getMeta = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject();
    img.src = url;
  });
}

export default function NextImage({src, alt, ...rest}) {
  const [dimension, setDimension] = useState({
    width: 384,
    height: 384,
  })
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const {width, height} = await getMeta(src);
      if (height && width) {
        setDimension({width, height})
      }
    })()
  }, [])
  return (
    <NImage
      src={src}
      alt={alt}
      {...rest}
      height={dimension.height}
      width={dimension.width}
    />
  )
}

