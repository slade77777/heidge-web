import SwitchThemeButton from './Button/SwitchThemeBtn';
import { BACKGROUND_SHAPES } from '../constants/backgroundShapes';
import whiteCircle from '../public/assets/shapes/white-circle.png';
import { useMemo } from 'react';
import { getRandomNumber } from '../utils';

const BlurCircle = ({size, top, left}) => {
  return (
    <div className="blur-circle">
      <style jsx>{`
        .blur-circle {
          background-image: url(${whiteCircle.src});
          background-position: ${top} ${left};
          background-size: ${size};
          background-repeat: no-repeat;
          filter: blur(100px);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  )
}

export default function Background({children}) {
  const {backgroundImage, backgroundSize, backgroundPosition} = BACKGROUND_SHAPES;
  const BlurCircles = useMemo(() => {
    let arr = [], len = 5;
    while (len--) {
      const size = getRandomNumber(100, 600), top = getRandomNumber(-size, 2000), left = getRandomNumber(-size, 1920);
      arr.push(<BlurCircle size={`${size}px`} top={`${top}px`} left={`${left}px`} />)
    }
    return arr;
  }, []);
  return (
    <div className="background">
      {BlurCircles}
      <main>{children}</main>
      <div className="fixed bottom-0 md:top-1/2 right-5 z-10">
        <SwitchThemeButton />
      </div>
      <style jsx>{`
        .background {
          position: relative;
          background-image: ${backgroundImage.join(', ')};
          background-size: ${backgroundSize.join(', ')};
          background-position: ${backgroundPosition.join(', ')};
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
