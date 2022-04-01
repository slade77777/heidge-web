import {
  Circle,
  PolygonAndEllipse,
  Triangle,
  TriangleAndSquare,
} from './Polygons';
import { useTheme } from '@nextui-org/react';
import SwitchThemeButton from './Button/SwitchThemeBtn';
// import {useEffect, useMemo, useState} from 'react';

const CircleWithDimension = ({ width, height, top, left }) => {
  return (
    <Circle
      className="absolute hidden lg:block blur-2xl text-white -translate-x-1/2 -translate-y-1/2 right-0"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
    />
  );
};

const renderRandomCircles = (width, height) => {
  let n = Math.floor(Math.random() * 10);
  let arr = [];
  while (--n) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const w = Math.floor(Math.random() * 500);
    arr.push(
      <CircleWithDimension key={n} width={w} height={w} left={x} top={y} />,
    );
  }
  return arr;
};

export default function Background({ children }) {
  const { theme } = useTheme();
  // const [dimension, setDimension] = useState({width: 0, height: 0})

  // const arr = useMemo(() => renderRandomCircles(dimension.width, dimension.height), [dimension])
  // useEffect(() => {
  //   if (window?.innerHeight && window?.innerWidth) {
  //     setDimension({width: window.innerWidth, height: window.innerHeight});
  //   }
  // }, [])

  return (
    <div className="relative">
      <TriangleAndSquare className="absolute right-10" />
      <PolygonAndEllipse className="absolute top-2/3 right-1/2" />
      <Triangle className="absolute top-1/2" />
      <Circle
        className="absolute w-[208px] md:w-[273px] lg:w-[662px] h-[208px] md:h-[273px] lg:h-[662px] blur-xl -translate-x-1/2 -translate-y-1/2"
        style={{ color: theme.colors.accents1.value }}
      />
      <Circle
        className="absolute hidden lg:block w-[381px] h-[381px] blur-2xl text-white -translate-x-1/2 -translate-y-1/2 right-0"
        style={{ color: theme.colors.background.value }}
      />
      {/*{arr}*/}
      {children}
      <div className="fixed bottom-0 md:top-1/2 right-5 z-10 h-8">
        <SwitchThemeButton />
      </div>
      {/*<SwitchThemeButton className="absolute top-1/2 right-0 -translate-x-1/2"/>*/}
    </div>
  );
}
