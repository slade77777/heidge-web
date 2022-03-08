import {Circle, PolygonAndEllipse, Triangle, TriangleAndSquare} from './Polygons';

export default function Background({children}) {
  return (
    <div className="relative">
      <Circle className="absolute w-[662px] h-[662px] -left-[331px] -top-[331px] blur-2xl opacity-60"/>
      <TriangleAndSquare className="absolute right-10"/>
      <PolygonAndEllipse className="absolute top-2/3 right-1/2"/>
      <Triangle className="absolute top-1/2"/>
      {children}
    </div>
  )
}
