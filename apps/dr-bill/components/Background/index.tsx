import {Circle, PolygonAndEllipse, Triangle, TriangleAndSquare} from './Polygons';
// import {useEffect, useMemo, useState} from 'react';


const CircleWithDimension = ({width, height, top, left}) => {
  return (
    <Circle className="absolute hidden lg:block blur-2xl text-white -translate-x-1/2 -translate-y-1/2 right-0"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              top: `${top}px`,
              left: `${left}px`,
            }}
    />
  )
}

const renderRandomCircles = (width, height) => {
  let n = Math.floor(Math.random() * 10)
  let arr = []
  while (--n) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const w = Math.floor(Math.random() * 500);
    arr.push(<CircleWithDimension key={n} width={w} height={w} left={x} top={y}/>)
  }
  return arr;
}

export default function Background({children}) {
  // const [dimension, setDimension] = useState({width: 0, height: 0})

  // const arr = useMemo(() => renderRandomCircles(dimension.width, dimension.height), [dimension])
  // useEffect(() => {
  //   if (window?.innerHeight && window?.innerWidth) {
  //     setDimension({width: window.innerWidth, height: window.innerHeight});
  //   }
  // }, [])

  return (
    <div className="relative">
      <TriangleAndSquare className="absolute right-10"/>
      <PolygonAndEllipse className="absolute top-2/3 right-1/2"/>
      <Triangle className="absolute top-1/2"/>
      <Circle
        className="absolute w-[208px] md:w-[273px] lg:w-[662px] h-[208px] md:h-[273px] lg:h-[662px] blur-xl text-white -translate-x-1/2 -translate-y-1/2"/>
      <Circle
        className="absolute hidden lg:block w-[381px] h-[381px] blur-2xl text-white -translate-x-1/2 -translate-y-1/2 right-0"/>
      {/*{arr}*/}
      {children}
    </div>
  )
}
